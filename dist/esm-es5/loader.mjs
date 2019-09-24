import { a as patchEsm, b as bootstrapLazy } from './core-f227acf0.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["raw-button_3", [[1, "raw-button", { "type": [1], "icon": [1] }], [1, "raw-navigation", { "steps": [16], "links": [16], "selectedStep": [32] }], [1, "raw-icon", { "icon": [16], "name": [1] }]]]], options);
    });
};
export { defineCustomElements };
