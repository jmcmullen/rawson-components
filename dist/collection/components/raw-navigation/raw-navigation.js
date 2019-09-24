import { h } from "@stencil/core";
import { homeDesign, facade, notes, email, save } from '../../utils/icons';
import logo from '../../assets/images/logo.png';
export class Navigation {
    constructor() {
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
        this.setSelectedStep = (step) => {
            this.selectedStep = step.uid;
            this.onSelectedStep.emit({ step: step.uid });
        };
        /**
         * Render steps of navigation
         */
        this.renderSteps = () => {
            return this.steps.map(step => (h("button", { key: step.uid, onClick: this.setSelectedStep.bind(this, step), class: {
                    step: true,
                    selected: this.selectedStep == step.uid
                } },
                h("i", { class: "step-icon", innerHTML: step.icon.src }),
                h("span", { class: "step-text" },
                    h("span", { class: "step-label" }, step.label),
                    h("span", { class: "step-subtext" }, step.subtext)))));
        };
        /**
         * Render links of navigation
         */
        this.renderLinks = () => {
            return this.links.map(link => (h("button", { class: "link", key: link.uid },
                h("span", { class: "link-text" },
                    h("i", { class: "link-icon", innerHTML: link.icon.src }),
                    h("span", { class: "link-label" }, link.label)))));
        };
        /**
         * Render navigation
         */
        this.render = () => {
            return (h("div", { class: "navigation" },
                h("div", { class: "brand" },
                    h("img", { class: "logo", src: logo }),
                    h("div", { class: "divider" }),
                    h("h2", { class: "title" }, "DreamBuilder")),
                h("div", { class: "step-list" }, this.renderSteps()),
                h("div", { class: "link-list" },
                    this.renderLinks(),
                    h("button", { class: "save" },
                        h("i", { class: "link-icon", innerHTML: save.src }),
                        h("span", { class: "save-label" }, "Save")))));
        };
    }
    static get is() { return "raw-navigation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./raw-navigation.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["raw-navigation.css"]
    }; }
    static get properties() { return {
        "steps": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Array<MenuItem>",
                "resolved": "MenuItem[]",
                "references": {
                    "Array": {
                        "location": "global"
                    },
                    "MenuItem": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{Array<MenuItem>}",
                        "name": "type"
                    }],
                "text": "Steps in navigation"
            },
            "defaultValue": "[\n    { uid: 'home-design', label: 'Home Design', icon: homeDesign },\n    { uid: 'facade', label: 'Facade', icon: facade }\n  ]"
        },
        "links": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Array<MenuItem>",
                "resolved": "MenuItem[]",
                "references": {
                    "Array": {
                        "location": "global"
                    },
                    "MenuItem": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [{
                        "text": "{Array<MenuItem>}",
                        "name": "type"
                    }],
                "text": "Navigation links"
            },
            "defaultValue": "[\n    { uid: 'notes', label: 'Notes', icon: notes },\n    { uid: 'contact-us', label: 'Contact Us', icon: email }\n  ]"
        }
    }; }
    static get states() { return {
        "selectedStep": {}
    }; }
    static get events() { return [{
            "method": "onSelectedStep",
            "name": "onSelectedStep",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event fires when selected step changes"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
