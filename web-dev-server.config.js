import {legacyPlugin} from '@web/dev-server-legacy';

const mode = process.env.MODE || 'dev';

if (!['dev', 'prod'].includes(mode)) {
  throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

export default {
  nodeResolve: {exportConditions: mode === 'dev' ? ['development'] : []},
  preserveSymlinks: true,
  appIndex: mode === 'dev' ? 'docs/index.html' : 'docs/index.html',
  rootDir: mode === 'dev' ? './docs' : './docs',
  plugins: [
    legacyPlugin({
      polyfills: {
        // Manually imported in index.html file
        webcomponents: false,
      },
    }),
  ],
};
