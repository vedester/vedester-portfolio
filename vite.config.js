// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'//i have updated this

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),//updated this too
    react()],
})
