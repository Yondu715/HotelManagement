import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

export default defineConfig({
    server: {
        host: true,
        port: 3009,
        hmr: { host: 'localhost' },
    },
    plugins: [
        laravel({
            input: [
                'resources/js/app/main.tsx',
            ],
            refresh: true,
        }),
        react({
            include: 'resources/js/**/*.tsx'
        }),
        checker({ typescript: true }),
    ]
});