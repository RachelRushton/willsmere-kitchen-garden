/**
 * Fetches recent posts from the Willsmere Kitchen Garden Facebook Page
 * using the Graph API and writes them to `src/data/facebook-posts.json`
 * so the static site can render them at build time.
 *
 * Required env vars:
 *   FB_PAGE_ID            – The numeric Page ID (or page slug). e.g. "willsmerekitchengarden"
 *   FB_PAGE_ACCESS_TOKEN  – A long-lived Page Access Token with pages_read_engagement
 *
 * If the env vars are missing (e.g. local dev without a token), the script
 * writes an empty payload and exits 0 so the build still succeeds.
 */

import { writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_PATH = resolve(__dirname, '../src/data/facebook-posts.json');

const PAGE_ID = process.env.FB_PAGE_ID;
const TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const POST_LIMIT = 8;
const API_VERSION = 'v19.0';

const FIELDS = [
  'id',
  'message',
  'created_time',
  'permalink_url',
  'full_picture',
  'attachments{media_type,type,url,title,description,media}',
].join(',');

async function writeOut(payload) {
  await mkdir(dirname(OUT_PATH), { recursive: true });
  await writeFile(OUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf8');
}

async function main() {
  if (!PAGE_ID || !TOKEN) {
    console.warn(
      '[fetch-facebook-posts] FB_PAGE_ID or FB_PAGE_ACCESS_TOKEN not set — writing empty feed.'
    );
    await writeOut({ fetchedAt: null, posts: [] });
    return;
  }

  const url = new URL(
    `https://graph.facebook.com/${API_VERSION}/${PAGE_ID}/posts`
  );
  url.searchParams.set('fields', FIELDS);
  url.searchParams.set('limit', String(POST_LIMIT));
  url.searchParams.set('access_token', TOKEN);

  console.log(`[fetch-facebook-posts] Fetching latest ${POST_LIMIT} posts…`);

  const res = await fetch(url);
  const body = await res.json();

  if (!res.ok || body.error) {
    console.error('[fetch-facebook-posts] Graph API error:', body);
    // Don't fail the build — write empty so the UI shows the fallback link.
    await writeOut({ fetchedAt: new Date().toISOString(), posts: [], error: body.error?.message ?? 'Unknown error' });
    return;
  }

  const posts = (body.data ?? []).map((p) => {
    const attachment = p.attachments?.data?.[0];
    const subAttachments = attachment?.subattachments?.data ?? [];
    const images = [];
    if (p.full_picture) images.push(p.full_picture);
    for (const sub of subAttachments) {
      const src = sub?.media?.image?.src;
      if (src && !images.includes(src)) images.push(src);
    }
    return {
      id: p.id,
      message: p.message ?? '',
      createdTime: p.created_time,
      permalink: p.permalink_url,
      image: p.full_picture ?? null,
      images,
      mediaType: attachment?.media_type ?? null,
    };
  });

  await writeOut({
    fetchedAt: new Date().toISOString(),
    posts,
  });

  console.log(`[fetch-facebook-posts] Wrote ${posts.length} posts to ${OUT_PATH}`);
}

main().catch(async (err) => {
  console.error('[fetch-facebook-posts] Unexpected failure:', err);
  await writeOut({ fetchedAt: new Date().toISOString(), posts: [], error: String(err) });
});
