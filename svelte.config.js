import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import sequence from 'svelte-sequential-preprocessor';
import { preprocessMeltUI } from '@melt-ui/pp';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sequence([vitePreprocess({}), preprocessMeltUI()]),
	kit: {
		adapter: adapter(),
		alias: {
			$assets: './static/assets',
			$lib: './src/lib',
			$modules: './src/modules',
			$util: './src/util'
		}
	}
};

export default config;
