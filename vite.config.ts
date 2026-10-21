import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configuración de Vite con React y el plugin oficial de Tailwind CSS.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
