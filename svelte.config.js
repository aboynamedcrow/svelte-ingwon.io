import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	compilerOptions: {
		enableSourcemap: true,
	},
	
	preprocess: preprocess({
		sourceMap: true,
	}),
	

	kit: {
		adapter: adapter({
			split: false
		}),

		vite: {
			server:{
				fs: {
					allow: ['..']
				}
			}
		},
		
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default config;
