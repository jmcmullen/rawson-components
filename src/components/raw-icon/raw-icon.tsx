import { Component, h, Prop } from '@stencil/core';
import icons from '../../utils/icons';

@Component({
  tag: 'raw-icon',
  styleUrl: 'raw-icon.scss',
  shadow: true
})
export class RawIcon {
  @Prop() icon?: Icon;
  @Prop() name?: string;

  componentWillLoad() {
    if (this.name && !this.icon) {
      this.icon = icons.find(i => i.name === this.name);
    }
  }

  render() {
    return <i class="icon" innerHTML={this.icon.src} />;
  }
}
