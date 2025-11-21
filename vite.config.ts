import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  css: {
    modules: {
      localsConvention: 'camelCase'
    }
  },
  build: {
    target: 'esnext',
    cssMinify: 'lightningcss'
  }
});