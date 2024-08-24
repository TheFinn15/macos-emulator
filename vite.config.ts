import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        api: 'modern',
        silenceDeprecations: ['mixed-decls'],
        additionalData: `
          @import "/src/assets/mixins";
          @import "/src/assets/variables";          
        `,
      },
    },
  },
});
