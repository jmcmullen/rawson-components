import { a as patchEsm, b as bootstrapLazy } from './core-405cba99.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["raw-navigation",[[1,"raw-navigation",{"steps":[16],"links":[16],"selectedStep":[32]}]]]], options);
  });
};

export { defineCustomElements };
