import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// When deploying to GitHub Pages at https://<user>.github.io/willsmere-kitchen-garden/
// the base must match the repo name. For a custom domain or user/organisation page
// (https://<user>.github.io/), change this to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
