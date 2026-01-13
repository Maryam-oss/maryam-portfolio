import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/maryam-portfolio/', // IMPORTANT: Replace 'maryam-portfolio' with your specific repository name if different
})
