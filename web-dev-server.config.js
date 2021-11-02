import {legacyPlugin} from '@web/dev-server-legacy';

const mode = process.env.MODE || 'dev';

if (!['dev', 'prod'].includes(mode)) {
  throw new Error(`MODE must be "dev" or "prod", was "${mode}"`);
}

export default {
  nodeResolve: {exportConditions: mode === 'dev' ? ['development'] : []},
  preserveSymlinks: true,
  appIndex: 'docs/index.html',
  rootDir: './',
  plugins: [
    legacyPlugin({
      polyfills: {
        webcomponents: false,
      },
    }),
  ],
};
