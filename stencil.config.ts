import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import image from 'rollup-plugin-img';

console.log('excluding', process.cwd(), './src/assets/images/icons');

export const config: Config = {
  namespace: 'rawson-components',
  plugins: [
    sass({
      injectGlobalPaths: [
        './src/assets/styles/_variables.scss',
        './src/assets/styles/_mixins.scss',
        './src/assets/styles/_typography.scss'
      ]
    }),
    image({ extensions: /\.(png|jpg|jpeg|gif)$/ })
  ],
  copy: [
    { src: './assets/fonts', dest: 'assets/fonts' },
    { src: './assets/styles/fonts.css', dest: 'assets/styles/fonts.css' },
    { src: './assets/images', dest: 'assets/images' },
    { src: '../node_modules/normalize.css/normalize.css', dest: 'assets/styles/normalize.css' }
  ],
  enableCache: false,
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
