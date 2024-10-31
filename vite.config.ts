import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
const rootSrc = path.resolve(__dirname, 'src');
const entryIndexFilePath = resolve(__dirname, 'index.html');

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: entryIndexFilePath,
            },
        },
    },
    resolve: {
        alias: {
            '@': rootSrc,
            '@app': path.join(rootSrc, 'app'),
            '@pages': path.join(rootSrc, 'pages'),
            '@entities': path.join(rootSrc, 'entities'),
            '@features': path.join(rootSrc, 'features'),
            '@shared': path.join(rootSrc, 'shared'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },
    server: {
        open: true,
    },
});
