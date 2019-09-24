'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5d042a65.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["raw-button_3.cjs",[[1,"raw-button",{"type":[1],"icon":[1]}],[1,"raw-navigation",{"steps":[16],"links":[16],"selectedStep":[32]}],[1,"raw-icon",{"icon":[1],"foundIcon":[32]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
