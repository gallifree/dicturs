import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { defineConfig } from 'vite'

export default defineConfig({
  // Served at https://gallifree.app/dicturs/ (gallifree org Pages site). BASE_URL overrides
  // it, e.g. "/" when served from a domain root.
  base: process.env.BASE_URL ?? '/dicturs/',
  plugins: [vike(), react(), tailwindcss()],
  // The logo and screenshots are imported from the repo root, so they stay in one place.
  server: { fs: { allow: ['..'] } },
})
