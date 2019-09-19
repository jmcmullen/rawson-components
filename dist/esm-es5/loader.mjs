import { a as patchEsm, b as bootstrapLazy } from './core-405cba99.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["raw-navigation", [[1, "raw-navigation", { "steps": [16], "links": [16], "selectedStep": [32] }]]]], options);
    });
};
export { defineCustomElements };
