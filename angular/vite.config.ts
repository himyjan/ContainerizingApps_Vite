import { defineConfig } from 'vite';
import { ViteAngularPlugin } from '@nxext/angular-vite';

export default defineConfig(({ command, mode }) => {
	return {
		plugins: [
			ViteAngularPlugin(),
		],
		resolve: {
			preserveSymlinks: true,
		},
		define: {
			'import.meta.vitest': mode !== 'production',
		},
	}
});
