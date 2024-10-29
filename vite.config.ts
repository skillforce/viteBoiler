import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
const root = path.resolve(__dirname, 'src');

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': root,
            '@app': path.join(root, 'app'),
            '@pages': path.join(root, 'pages'),
            '@entities': path.join(root, 'entities'),
            '@features': path.join(root, 'features'),
            '@shared': path.join(root, 'shared'),
        },
    },
    base: './',
    plugins: [react()],
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
