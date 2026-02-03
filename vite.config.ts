import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false, // <--- defaults to `true`
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'audioYT',
      // the proper extensions will be added
      fileName: 'audio-yt',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'react', 'react/jsx-runtime'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
