import { defineConfig } from "vitest/config";

import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths()],
  test: {
    dir: "./",
    globals: true,
    environment: 'jsdom',
    coverage: {
       reporter: ['text', 'json', 'html'],
    },
  }
})