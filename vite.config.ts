<<<<<<< HEAD

=======
>>>>>>> fc31645f171024ec79a283d8f88255982595d8cb
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
})
