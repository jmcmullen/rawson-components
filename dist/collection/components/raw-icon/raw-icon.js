import { h } from "@stencil/core";
import icons from '../../utils/icons';
export class RawIcon {
    componentWillLoad() {
        if (this.name && !this.icon) {
            this.icon = icons.find(i => i.name === this.name);
        }
    }
    render() {
        return h("i", { class: "icon", innerHTML: this.icon.src });
    }
    static get is() { return "raw-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["raw-icon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["raw-icon.css"]
    }; }
    static get properties() { return {
        "icon": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Icon",
                "resolved": "{ name: string; src: string; }",
                "references": {
                    "Icon": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "name": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "name",
            "reflect": false
        }
    }; }
}
