import { h } from "@stencil/core";
import icons from '../../utils/icons';
export class RawIcon {
    /**
     * Find our icon if a string is provided on load.
     */
    componentWillLoad() {
        if (this.icon && typeof this.icon === 'string') {
            this.foundIcon = icons.find(i => i.name === this.icon);
        }
        else if (this.icon) {
            // @ts-ignore
            this.foundIcon = this.icon;
        }
    }
    render() {
        return this.foundIcon ? h("i", { class: "icon", innerHTML: this.foundIcon.src }) : null;
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
    static get states() { return {
        "foundIcon": {}
    }; }
}
