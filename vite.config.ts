import pkg from './package.json';

import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	define: {
		__APP_VERSION__: JSON.stringify(pkg.version)
	},
	base: '/wadokei/',
	build: {
		outDir: './docs'
	}
});
