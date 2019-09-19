import { h } from "@stencil/core";
import homeDesignIcon from '../../assets/images/icons/home-design.svg';
import facadeIcon from '../../assets/images/icons/facade.svg';
import notesIcon from '../../assets/images/icons/notes.svg';
import emailIcon from '../../assets/images/icons/email.svg';
import saveIcon from '../../assets/images/icons/save.svg';
import logo from '../../assets/images/logo.png';
export class Navigation {
    constructor() {
        this.steps = [
            { uid: 'home-design', label: 'Home Design', icon: homeDesignIcon },
            { uid: 'facade', label: 'Facade', icon: facadeIcon }
        ];
        this.links = [
            { uid: 'notes', label: 'Notes', icon: notesIcon },
            { uid: 'contact-us', label: 'Contact Us', icon: emailIcon }
        ];
        this.selectedStep = 'home-design';
    }
    setSelectedStep(step) {
        this.selectedStep = step.uid;
        this.onSelectedStep.emit({ step: step.uid });
    }
    render() {
        return (h("div", { class: "navigation" },
            h("div", { class: "navigation__brand" },
                h("img", { class: "navigation__logo", src: logo }),
                h("div", { class: "navigation__divider" }),
                h("h2", { class: "navigation__title" }, "DreamBuilder")),
            h("div", { class: "navigation__step-list" }, this.steps.map(step => (h("button", { key: step.uid, class: {
                    navigation__step: true,
                    'navigation__step--selected': this.selectedStep == step.uid
                }, onClick: this.setSelectedStep.bind(this, step) },
                h("div", { class: "navigation__step-icon", innerHTML: step.icon }),
                h("span", { class: "navigation__step-text" },
                    h("span", { class: "navigation__step-label" }, step.label),
                    h("span", { class: "navigation__step-subtext" }, step.subtext)))))),
            h("div", { class: "navigation__link-list" },
                this.links.map(link => (h("button", { class: "navigation__link", key: link.uid },
                    h("span", { class: "navigation__link-text" },
                        h("div", { class: "navigation__link-icon", innerHTML: link.icon }),
                        h("span", { class: "navigation__link-label" }, link.label))))),
                h("button", { class: "navigation__save" },
                    h("i", { class: "navigation__save-icon", innerHTML: saveIcon }),
                    h("span", { class: "navigation__save-label" }, "Save")))));
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
                "original": "Array<any>",
                "resolved": "any[]",
                "references": {
                    "Array": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[\n    { uid: 'home-design', label: 'Home Design', icon: homeDesignIcon },\n    { uid: 'facade', label: 'Facade', icon: facadeIcon }\n  ]"
        },
        "links": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Array<any>",
                "resolved": "any[]",
                "references": {
                    "Array": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[\n    { uid: 'notes', label: 'Notes', icon: notesIcon },\n    { uid: 'contact-us', label: 'Contact Us', icon: emailIcon }\n  ]"
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
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
