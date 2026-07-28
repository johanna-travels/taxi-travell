// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

/** GitHub Pages uses /taxi-travell; Netlify serves from site root. */
const isNetlify = process.env.NETLIFY === 'true';

// https://astro.build/config
export default defineConfig({
	site: isNetlify
		? process.env.URL || 'https://example.netlify.app'
		: 'https://johanna-travels.github.io',
	base: isNetlify ? '/' : '/taxi-travell',
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
	},
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssMinify: true,
			target: 'es2020',
		},
	},
});
