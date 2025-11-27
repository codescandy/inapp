import { defineConfig } from 'vite';
import { resolve } from 'path'
import glob from 'fast-glob'
// Grab all HTML files inside src (including subfolders)
const htmlFiles = glob.sync('./src/**/*.html')


export default defineConfig({
   base: './',
   root: resolve(__dirname, 'src'),   // ✅ keeps dev server working
   server: {
    host: true,
    port: 3000,
    hot: true,
    open: true,
  },
  css: {
    preprocessorOptions: {
        scss: {

        },
      }
  },
    build: {
    outDir: resolve(__dirname, 'dist'), // ✅ output outside src
    emptyOutDir: true,
    rollupOptions: {
      input: htmlFiles.length
        ? Object.fromEntries(
            htmlFiles.map(file => [
              file.replace(/^\.\/src\//, '').replace(/\.html$/, ''),
              resolve(__dirname, file),
            ])
          )
        : resolve(__dirname, 'src/index.html'),
         output: {
          chunkFileNames: 'assets/js/[name].js',
          entryFileNames: 'assets/js/[name].js',

          assetFileNames: ({name}) => {
            if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                return 'assets/images/[name][extname]';
            }

            if (/\.css$/.test(name ?? '')) {
                return 'assets/css/[name][extname]';
            }

            // default value
            // ref: https://rollupjs.org/guide/en/#outputassetfilenames
            return 'assets/[name][extname]';
          },



      },
    },
  },
});
