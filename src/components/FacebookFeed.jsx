import postsData from '../data/facebook-posts.json';

const PAGE_URL = 'https://www.facebook.com/willsmerekitchengarden/';

function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function truncate(text, max = 280) {
  if (!text) return '';
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, '') + '…';
}

function FeedHeader() {
  return (
    <div className="fb-feed-card-header">
      <span className="fb-feed-card-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
        </svg>
      </span>
      <h3 className="fb-feed-card-title">Willsmere Kitchen Garden</h3>
      <a
        className="fb-feed-card-link"
        href={PAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow
      </a>
    </div>
  );
}

export default function FacebookFeed() {
  const posts = postsData?.posts ?? [];

  if (posts.length === 0) {
    return (
      <div className="fb-feed-card">
        <FeedHeader />
        <div className="fb-feed-empty">
          <p>
            We couldn't load recent posts right now. Visit our{' '}
            <a href={PAGE_URL} target="_blank" rel="noopener noreferrer">
              Facebook page
            </a>{' '}
            for the latest news.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fb-feed-card">
      <FeedHeader />
      <ul className="fb-post-list">
        {posts.map((post) => (
          <li key={post.id} className="fb-post">
            {post.image && (
              <a
                className="fb-post-image"
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
                tabIndex={-1}
              >
                <img src={post.image} alt="" loading="lazy" />
              </a>
            )}
            <div className="fb-post-body">
              <time className="fb-post-date" dateTime={post.createdTime}>
                {formatDate(post.createdTime)}
              </time>
              {post.message && (
                <p className="fb-post-message">{truncate(post.message)}</p>
              )}
              <a
                className="fb-post-link"
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on Facebook →
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
