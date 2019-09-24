import { Host, h } from "@stencil/core";
export class RawButton {
    constructor() {
        this.type = 'secondary';
    }
    /**
     * Render our button
     */
    render() {
        return (h("button", { class: { button: true, [this.type]: true } },
            h("slot", null),
            this.icon ? h("raw-icon", { icon: this.icon }) : null));
    }
    static get is() { return "raw-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["raw-button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["raw-button.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "ButtonType",
                "resolved": "\"primary\" | \"secondary\"",
                "references": {
                    "ButtonType": {
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
            "attribute": "type",
            "reflect": false,
            "defaultValue": "'secondary'"
        },
        "icon": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string | Icon",
                "resolved": "string | { name: string; src: string; }",
                "references": {
                    "Icon": {
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
            "attribute": "icon",
            "reflect": false
        }
    }; }
}
