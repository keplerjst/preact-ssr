import { cloudflare } from '@cloudflare/vite-plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  // build: {
  //   minify: true,
  //   outDir: './static/public',
  // },
  plugins: [cloudflare()],
})
