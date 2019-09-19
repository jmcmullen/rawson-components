'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-933677de.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["raw-navigation.cjs",[[1,"raw-navigation",{"steps":[16],"links":[16],"selectedStep":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
