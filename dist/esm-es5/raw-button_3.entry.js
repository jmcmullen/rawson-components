import { r as registerInstance, h, c as createEvent } from './core-f227acf0.js';
var RawButton = /** @class */ (function () {
    function RawButton(hostRef) {
        registerInstance(this, hostRef);
        this.type = 'secondary';
    }
    /**
     * Render our button
     */
    RawButton.prototype.render = function () {
        var _a;
        return (h("button", { class: (_a = { button: true }, _a[this.type] = true, _a) }, h("slot", null), this.icon ? h("raw-icon", { icon: this.icon }) : null));
    };
    Object.defineProperty(RawButton, "style", {
        get: function () { return ".button{display:block;cursor:pointer;outline:none;border-radius:5px;width:108px;height:40px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;font-size:12px;font-weight:700;-ms-flex-align:center;align-items:center;vertical-align:sub;-webkit-transition:all .3s;transition:all .3s}.primary{border:1px solid #e4541b;background:#e4541b;color:#fff;margin:10px 16px}.primary:hover{border-color:#cd4c18;background-color:#cd4c18}.primary svg{margin-top:3px;margin-right:6px}.primary svg path{fill:#fff}.secondary{border:1px solid rgba(73,101,117,.2);-webkit-box-shadow:0 1px 0 0 rgba(73,101,117,.2);box-shadow:0 1px 0 0 rgba(73,101,117,.2)}"; },
        enumerable: true,
        configurable: true
    });
    return RawButton;
}());
var bedroom = {
    name: 'bedroom',
    src: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <defs>\n      <path d=\"M4.4 8.05c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 012.4 6.05c0-.55.196-1.02.587-1.412A1.926 1.926 0 014.4 4.05c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412 0 .55-.196 1.02-.588 1.413A1.926 1.926 0 014.4 8.05zm8.8-3.2c.5 0 .967.125 1.4.375.433.25.775.592 1.025 1.025.25.433.375.9.375 1.4v4.8a.39.39 0 01-.113.288.39.39 0 01-.287.112h-.8a.39.39 0 01-.288-.112.39.39 0 01-.112-.288v-1.2H1.6v1.2a.39.39 0 01-.113.288.39.39 0 01-.287.112H.4a.39.39 0 01-.288-.112A.39.39 0 010 12.45v-8.8a.39.39 0 01.113-.287A.39.39 0 01.4 3.25h.8a.39.39 0 01.288.113.39.39 0 01.112.287v5.2h5.6v-3.6a.39.39 0 01.112-.287.39.39 0 01.288-.113h5.6z\" id=\"a\"/>\n  </defs>\n  <use fill=\"#5C5C5D\" xlink:href=\"#a\" fill-rule=\"evenodd\"/>\n</svg>"
};
var email = {
    name: 'email',
    src: "<svg width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <g id=\"atoms-/-icons-/-small-/-email\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n      <path d=\"M14.5,2 C14.9166665,2 15.2708335,2.14583349 15.5625,2.4375 C15.8541665,2.72916651 16,3.08333349 16,3.5 L16,12.5 C16,12.9166665 15.8541665,13.2708335 15.5625,13.5625 C15.2708335,13.8541665 14.9166665,14 14.5,14 L1.5,14 C1.08333349,14 0.729166508,13.8541665 0.4375,13.5625 C0.145833492,13.2708335 0,12.9166665 0,12.5 L0,3.5 C0,3.08333349 0.145833492,2.72916651 0.4375,2.4375 C0.729166508,2.14583349 1.08333349,2 1.5,2 L14.5,2 Z M14.5,3.5 L1.5,3.5 L1.5,4.78125 C2.22916651,5.36458349 3.63541651,6.46875 5.71875,8.09375 L6,8.34375 C6.41666651,8.69791651 6.75,8.94791651 7,9.09375 C7.39583349,9.36458349 7.72916651,9.5 8,9.5 C8.27083349,9.5 8.60416651,9.36458349 9,9.09375 C9.25,8.94791651 9.58333349,8.69791651 10,8.34375 L10.28125,8.09375 C12.3645835,6.48958349 13.7708335,5.38541651 14.5,4.78125 L14.5,3.5 Z M1.5,12.5 L14.5,12.5 L14.5,6.6875 L10.875,9.5625 C10.3541665,10 9.92708349,10.3125 9.59375,10.5 C9.03125,10.8333335 8.5,11 8,11 C7.5,11 6.95833349,10.8333335 6.375,10.5 C6.0625,10.3125 5.63541651,10 5.09375,9.5625 L1.5,6.6875 L1.5,12.5 Z\" id=\"\uF0E0\" fill=\"#5C5C5D\"></path>\n  </g>\n</svg>"
};
var facade = {
    name: 'facade',
    src: "<svg id=\"f03db773-26c0-4269-a29d-6e954ec9b03a\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\">\n  <g id=\"f33ecb05-fcef-4b55-9f1a-56ada4cd108b\" data-name=\"background\">\n    <path d=\"M29,11H20L16,9l-4,2H3a1,1,0,0,0,0,2h7v1l2-1v1H3V24H29V14H20V13l2,1V13h7a1,1,0,0,0,0-2Z\" fill=\"#fff\"/>\n  </g>\n  <g id=\"aa9f35f5-7334-45ee-a1cb-e6d8bad0c536\" data-name=\"foreground\">\n    <path d=\"M8,15a2,2,0,0,0-2,2v4h4V17A2,2,0,0,0,8,15Zm1,5H7V19H9ZM7,18V17a.94.94,0,0,1,1-1,.94.94,0,0,1,1,1v1Z\" fill=\"#5c5c5d\"/>\n    <path d=\"M24,15a2,2,0,0,0-2,2v4h4V17A2,2,0,0,0,24,15Zm1,5H23V19h2Zm-2-2V17a1,1,0,0,1,2,0v1Z\" fill=\"#5c5c5d\"/>\n    <path d=\"M17,21H15V18a.94.94,0,0,1,1-1h0a.94.94,0,0,1,1,1Z\" fill=\"#5c5c5d\" opacity=\"0.5\" style=\"isolation: isolate\"/>\n    <rect x=\"14\" y=\"22\" width=\"4\" height=\"1\" fill=\"#5c5c5d\" opacity=\"0.05\" style=\"isolation: isolate\"/>\n    <polygon points=\"16 9 10 12 10 14 16 11 22 14 22 12 16 9\" fill=\"#5c5c5d\" opacity=\"0.5\" style=\"isolation: isolate\"/>\n    <path d=\"M32,13V11a2,2,0,0,0-2-2H18.2l-1.8-.9C16.3,8,16.2,8,16,8s-.3,0-.4.1L13.8,9H2a2,2,0,0,0-2,2v2a2,2,0,0,0,2,2v8H1a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2H30V15A2,2,0,0,0,32,13ZM2,12a.94.94,0,0,1,1-1H9.8l-.2.1A1,1,0,0,0,9,12v1H3A.94.94,0,0,1,2,12Zm9,11H4V14H9a1.19,1.19,0,0,0,.5.9,4.33,4.33,0,0,0,.5.1c.2,0,.3,0,.4-.1l.6-.3Zm6-1h1v1H14V22h3Zm-2-1V18a1,1,0,0,1,2,0v3Zm5,2H19V21H18V18a2,2,0,0,0-4,0v3H13v2H12V14.1l4-2,4,2ZM16,11l-4,2-1,.5L10,14V12l2-1,4-2,4,2,2,1v2l-1-.5L20,13ZM28,23H21V14.6l.6.3c.1.1.2.1.4.1a4.33,4.33,0,0,0,.5-.1A1.05,1.05,0,0,0,23,14h5Zm1-10H23V12a1,1,0,0,0-.6-.9l-.2-.1H29a1,1,0,0,1,0,2Z\" fill=\"#5c5c5d\"/>\n    <path d=\"M10,12l2-1H3a1,1,0,0,0,0,2h7Z\" fill=\"#5c5c5d\" opacity=\"0.5\" style=\"isolation: isolate\"/>\n    <path d=\"M29,11H20l2,1v1h7a1,1,0,0,0,0-2Z\" fill=\"#5c5c5d\" opacity=\"0.5\" style=\"isolation: isolate\"/>\n    <polygon points=\"16 11 12 13 12 23 20 23 20 13 16 11\" fill=\"#5c5c5d\" opacity=\"0.05\" style=\"isolation: isolate\"/>\n    <polygon points=\"20 14 20 23 12 23 12 14 3 14 3 24 29 24 29 14 20 14\" fill=\"#5c5c5d\" opacity=\"0.05\" style=\"isolation: isolate\"/>\n  </g>\n</svg>"
};
var homeDesign = {
    name: 'home-design',
    src: "<svg data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\">\n  <path fill=\"#fff\" d=\"M7 6h19v19H7z\" data-name=\"background\"/>\n  <g data-name=\"foreground\" fill=\"#5c5c5d\">\n      <path d=\"M7 6v19h19V6zm6 6H8V7h5z\" opacity=\".05\" style=\"isolation:isolate\"/>\n      <path d=\"M24 5H9a3 3 0 00-3 3v15a3 3 0 003 3h9a1 1 0 000-2h-1v-7h-4v3.5a3.47 3.47 0 01-3-3.5H8v-4h6V7h4v2h3.5a3.47 3.47 0 01-3.5 3v4h7v7a.94.94 0 01-1 1h-1a1 1 0 000 2h1a3 3 0 003-3V8a3 3 0 00-3-3zM12.3 7l-1.8 1.8-1.7-1.7c0-.1.1-.1.2-.1zm-4.2.8l1.7 1.7L8 11.3V8c0-.1 0-.2.1-.2zM9.5 19a4.57 4.57 0 004 2.5h.5V19h1v5H9a.94.94 0 01-1-1v-4zm-.8-7l1.8-1.8 1.8 1.8zm4.3-.7l-1.8-1.8L13 7.7zM25 14h-5v-1.5a4.57 4.57 0 002.5-4V8H20V7h4a.94.94 0 011 1z\"/>\n  </g>\n</svg>"
};
var notes = {
    name: 'notes',
    src: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M13.01 4.621l.744-.744a.173.173 0 00.05-.129.175.175 0 00-.05-.13l-1.125-1.124a.174.174 0 00-.13-.05.17.17 0 00-.129.05l-.743.744 1.382 1.383zM5.807 9.056l-.145 1.527 1.584-.17 4.741-4.77-1.384-1.382-4.796 4.795zm-.457 3.015a1.13 1.13 0 01-.826-.348 1.147 1.147 0 01-.341-.964l.26-2.355 6.904-6.932c.313-.313.7-.472 1.151-.472.452 0 .839.159 1.152.472l1.124 1.125c.313.313.472.7.472 1.151 0 .45-.159.839-.472 1.152L7.9 11.775l-2.41.29a1.42 1.42 0 01-.14.006zm-4.002 2.503c-.373 0-.694-.132-.955-.393A1.305 1.305 0 010 13.226V4.023c0-.373.132-.695.394-.956.261-.261.582-.394.955-.394h6.222a.28.28 0 01.271.191c.048.12.023.24-.073.336l-.837.837a.272.272 0 01-.198.08h-5.29v9.014h9.014v-1.945a.27.27 0 01.08-.198l.836-.836a.303.303 0 01.218-.097h.018l.101.024c.122.05.19.155.19.297v2.85c0 .372-.132.693-.394.955a1.31 1.31 0 01-.955.393H1.349z\" fill=\"#5C5C5D\" fill-rule=\"evenodd\"/>\n</svg>"
};
var parking = {
    name: 'parking',
    src: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <defs>\n      <path d=\"M14.664 5.844a.3.3 0 01.26.136.32.32 0 01.041.301l-.219.656c-.036.146-.136.22-.3.22h-.793c.273.163.492.377.656.642.164.264.246.56.246.888V10c0 .437-.146.82-.437 1.148v1.696a.633.633 0 01-.192.465.633.633 0 01-.465.191H12.15a.633.633 0 01-.465-.191.633.633 0 01-.191-.465V11.75h-7v1.094a.633.633 0 01-.192.465.633.633 0 01-.465.191H2.524a.633.633 0 01-.465-.191.633.633 0 01-.191-.465v-1.696A1.675 1.675 0 011.43 10V8.687c0-.328.082-.624.246-.888.164-.265.383-.479.656-.643H1.54c-.164 0-.264-.073-.3-.219l-.22-.656a.32.32 0 01.042-.3.301.301 0 01.26-.137h1.504l.218-.574a3.447 3.447 0 011.285-1.641A3.414 3.414 0 016.325 3H9.66c.73 0 1.395.21 1.997.629.601.42 1.03.966 1.285 1.64l.218.575h1.504zm-9.98.054l-.41 1.04h7.437l-.41-1.04a1.716 1.716 0 00-.642-.834 1.706 1.706 0 00-.999-.314H6.325c-.365 0-.698.105-.998.314-.301.21-.515.488-.643.834zm-1.285 4.32h.11c.364 0 .628-.017.792-.054.274-.055.41-.182.41-.383 0-.237-.16-.515-.478-.834-.32-.319-.597-.478-.834-.478a.84.84 0 00-.615.26.84.84 0 00-.26.615.84.84 0 00.26.615.84.84 0 00.615.26zm9.187 0a.84.84 0 00.615-.259.84.84 0 00.26-.615.84.84 0 00-.26-.615.84.84 0 00-.615-.26c-.237 0-.515.16-.834.478-.319.32-.478.597-.478.834 0 .2.136.328.41.383.164.037.428.055.793.055h.11z\" id=\"a\"/>\n  </defs>\n  <use fill=\"#5C5C5D\" xlink:href=\"#a\" fill-rule=\"evenodd\"/>\n</svg>"
};
var save = {
    name: 'save',
    src: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M14.563 4.063c.291.291.437.645.437 1.062V13.5c0 .417-.146.77-.438 1.063A1.447 1.447 0 0113.5 15h-11c-.417 0-.77-.146-1.063-.438A1.447 1.447 0 011 13.5v-11c0-.417.146-.77.438-1.063A1.447 1.447 0 012.5 1h8.375c.417 0 .77.146 1.063.438l2.624 2.625zM9.5 2.5h-4V5h4V2.5zm3.813 11c.041 0 .083-.02.124-.063.042-.041.063-.083.063-.124V5.187c0-.041-.02-.083-.063-.125L11 2.626V5.75a.723.723 0 01-.219.531.723.723 0 01-.531.219h-5.5a.723.723 0 01-.531-.219A.723.723 0 014 5.75V2.5H2.687c-.041 0-.083.02-.124.063-.042.041-.063.083-.063.124v10.626c0 .041.02.083.063.124.041.042.083.063.124.063h10.626zM8 7.25c.75 0 1.396.27 1.938.813.541.541.812 1.187.812 1.937s-.27 1.396-.813 1.938c-.541.541-1.187.812-1.937.812s-1.396-.27-1.938-.813C5.521 11.396 5.25 10.75 5.25 10s.27-1.396.813-1.938C6.604 7.521 7.25 7.25 8 7.25zm0 4c.354 0 .651-.12.89-.36.24-.239.36-.536.36-.89s-.12-.651-.36-.89A1.21 1.21 0 008 8.75c-.354 0-.651.12-.89.36-.24.239-.36.536-.36.89s.12.651.36.89c.239.24.536.36.89.36z\" fill-rule=\"evenodd\"/>\n</svg>"
};
var tick = {
    name: 'tick',
    src: "<svg width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n  <g fill=\"none\">\n      <circle fill=\"#E4541B\" cx=\"12\" cy=\"12\" r=\"12\"/>\n      <path d=\"M14.934 8.418a1.152 1.152 0 011.662-.119c.49.442.542 1.21.114 1.717l-5.679 6.734-3.63-3.292a1.245 1.245 0 01-.108-1.717 1.152 1.152 0 011.662-.112l1.853 1.68 4.126-4.891z\" fill=\"#FFF\"/>\n  </g>\n</svg>"
};
var user = {
    name: 'user',
    src: "<svg width=\"16\" height=\"16\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <defs>\n      <path d=\"M9.067 10.627a3.87 3.87 0 011.959.523 3.91 3.91 0 011.44 1.43c.355.607.534 1.271.534 1.977V15h-1.714v-.443c0-.39-.096-.744-.292-1.079a2.18 2.18 0 00-.81-.803 2.183 2.183 0 00-1.117-.297H4.933c-.403 0-.77.098-1.116.297a2.179 2.179 0 00-1.103 1.882V15H1v-.443c0-.706.18-1.37.534-1.977a3.91 3.91 0 011.44-1.43 3.871 3.871 0 011.96-.523h4.133zM7 1a4.19 4.19 0 012.16.581 4.214 4.214 0 011.557 1.59c.379.672.569 1.407.569 2.205a4.41 4.41 0 01-.57 2.205 4.214 4.214 0 01-1.556 1.59A4.182 4.182 0 017 9.752a4.182 4.182 0 01-2.16-.58 4.214 4.214 0 01-1.557-1.59 4.41 4.41 0 01-.569-2.206c0-.798.19-1.533.57-2.205a4.214 4.214 0 011.556-1.59A4.182 4.182 0 017 1zm0 1.75c-.469 0-.9.117-1.296.35-.395.232-.706.55-.934.953a2.646 2.646 0 00-.341 1.323c0 .479.113.92.341 1.323.228.404.54.722.934.954A2.51 2.51 0 007 8.002c.469 0 .9-.116 1.296-.349.395-.232.706-.55.934-.954.228-.403.341-.844.341-1.323s-.113-.92-.341-1.323a2.529 2.529 0 00-.934-.954A2.51 2.51 0 007 2.75z\" id=\"a\"/>\n  </defs>\n  <use fill=\"#5C5C5D\" xlink:href=\"#a\" fill-rule=\"evenodd\"/>\n</svg>"
};
var icons = [bedroom, email, facade, homeDesign, notes, parking, save, tick, user];
var RawIcon = /** @class */ (function () {
    function RawIcon(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Find our icon if a string is provided on load.
     */
    RawIcon.prototype.componentWillLoad = function () {
        var _this = this;
        if (this.icon && typeof this.icon === 'string') {
            this.foundIcon = icons.find(function (i) { return i.name === _this.icon; });
        }
        else if (this.icon) {
            // @ts-ignore
            this.foundIcon = this.icon;
        }
    };
    RawIcon.prototype.render = function () {
        return this.foundIcon ? h("i", { class: "icon", innerHTML: this.foundIcon.src }) : null;
    };
    Object.defineProperty(RawIcon, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return RawIcon;
}());
var logo = "data:image/png;base64,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";
var Navigation = /** @class */ (function () {
    function Navigation(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        /**
         * Steps in navigation
         * @type {Array<MenuItem>}
         */
        this.steps = [
            { uid: 'home-design', label: 'Home Design', icon: homeDesign },
            { uid: 'facade', label: 'Facade', icon: facade }
        ];
        /**
         * Navigation links
         * @type {Array<MenuItem>}
         */
        this.links = [
            { uid: 'notes', label: 'Notes', icon: notes },
            { uid: 'contact-us', label: 'Contact Us', icon: email }
        ];
        /**
         * Currently selected step in navigation
         */
        this.selectedStep = 'home-design';
        /**
         * Set selected step of navigation
         * @param {MenuItem} - step
         */
        this.setSelectedStep = function (step) {
            _this.selectedStep = step.uid;
            _this.onSelectedStep.emit({ step: step.uid });
        };
        /**
         * Render steps of navigation
         */
        this.renderSteps = function () {
            return _this.steps.map(function (step) { return (h("button", { key: step.uid, onClick: _this.setSelectedStep.bind(_this, step), class: {
                    step: true,
                    selected: _this.selectedStep == step.uid
                } }, h("i", { class: "step-icon", innerHTML: step.icon.src }), h("span", { class: "step-text" }, h("span", { class: "step-label" }, step.label), h("span", { class: "step-subtext" }, step.subtext)))); });
        };
        /**
         * Render links of navigation
         */
        this.renderLinks = function () {
            return _this.links.map(function (link) { return (h("button", { class: "link", key: link.uid }, h("span", { class: "link-text" }, h("i", { class: "link-icon", innerHTML: link.icon.src }), h("span", { class: "link-label" }, link.label)))); });
        };
        /**
         * Render navigation
         */
        this.render = function () {
            return (h("div", { class: "navigation" }, h("div", { class: "brand" }, h("img", { class: "logo", src: logo }), h("div", { class: "divider" }), h("h2", { class: "title" }, "DreamBuilder")), h("div", { class: "step-list" }, _this.renderSteps()), h("div", { class: "link-list" }, _this.renderLinks(), h("button", { class: "save" }, h("i", { class: "link-icon", innerHTML: save.src }), h("span", { class: "save-label" }, "Save")))));
        };
        this.onSelectedStep = createEvent(this, "onSelectedStep", 7);
    }
    Object.defineProperty(Navigation, "style", {
        get: function () { return ".navigation{width:100%;height:75px;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:#333334;font-family:Nunito Sans,sans-serif;-webkit-box-shadow:0 0 2px 1px #dbe0e3;box-shadow:0 0 2px 1px #dbe0e3}.brand,.navigation{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.brand{margin-left:16px}.logo{width:34px;height:34px;-ms-flex-item-align:center;align-self:center}.title{font-size:20px}.divider{margin:0 16px;border-left:1px solid #dbe0e3;height:40px;-ms-flex-item-align:center;align-self:center}.step{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:10px;padding:5px;border:none;border-radius:5px;outline:none;-webkit-transition:background-color .3s;transition:background-color .3s;color:#aeaeae}.step svg [data-name=foreground] path{fill:#aeaeae}.step.selected,.step:hover{background-color:#f5f7f8;color:#e4541b}.step.selected svg [data-name=foreground] path,.step:hover svg [data-name=foreground] path{fill:#e4541b}.step-list{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.step-icon{padding:0 8px;margin-top:5px}.step-label{padding-right:5px;font-size:12px;font-weight:700}.link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:15px;background:none;border:none;outline:none;cursor:pointer}.link-list,.link-text{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}.link-text{color:#333334;font-size:12px;font-weight:700}.link-icon{padding:0 6px}.link-icon svg{margin-top:3px}.link-icon svg path{fill:#333334}.save{cursor:pointer;outline:none;border:1px solid #e4541b;border-radius:5px;background:#e4541b;color:#fff;margin:10px 16px;width:108px;height:40px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;font-size:12px;font-weight:700;-ms-flex-align:center;align-items:center;vertical-align:sub;-webkit-transition:all .3s;transition:all .3s}.save:hover{border-color:#cd4c18;background-color:#cd4c18}.save svg{margin-top:3px;margin-right:6px}.save svg path{fill:#fff}"; },
        enumerable: true,
        configurable: true
    });
    return Navigation;
}());
export { RawButton as raw_button, RawIcon as raw_icon, Navigation as raw_navigation };
