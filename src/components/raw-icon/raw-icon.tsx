import { Component, h, Prop, State } from '@stencil/core';
import icons from '../../utils/icons';

@Component({
  tag: 'raw-icon',
  styleUrl: 'raw-icon.scss',
  shadow: true
})
export class RawIcon {
  @Prop() icon: string | Icon;
  @State() foundIcon: Icon;

  /**
   * Find our icon if a string is provided on load.
   */
  componentWillLoad() {
    if (this.icon && typeof this.icon === 'string') {
      this.foundIcon = icons.find(i => i.name === this.icon);
    } else if (this.icon) {
      // @ts-ignore
      this.foundIcon = this.icon;
    }
  }

  render() {
    return this.foundIcon ? <i class="icon" innerHTML={this.foundIcon.src} /> : null;
  }
}
