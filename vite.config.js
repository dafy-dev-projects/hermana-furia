// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use './src/styles/core/Variables.scss' as *; @use './src/styles/core/Reset.scss' as *;`,
      },
    },
  },
})
