import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base should match the repo name when deploying to GitHub Pages
export default defineConfig({
  base: '/resolucionproblemas/',
  plugins: [react()]
});
