import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import path from 'path';

export default defineConfig({
    server: {
        host: true,
        port: 3009,
        hmr: { host: 'localhost' },
    },
    plugins: [
        laravel({
            input: [
                'resources/js/reception-panel/app/main.tsx',
            ],
            refresh: true,
        }),
        react({
            include: 'resources/js/reception-panel/**/*.tsx'
        }),
        checker({ typescript: true }),
    ],
    resolve: {
        alias: {
            '@/client': path.resolve(__dirname, './resources/js/client-panel'),
            '@/reception': path.resolve(__dirname, './resources/js/reception-panel'),
        }
    },
});