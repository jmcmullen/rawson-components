import { Component, Host, h, Prop, State } from '@stencil/core';
import icons from '../../utils/icons';

@Component({
  tag: 'raw-button',
  styleUrl: 'raw-button.scss',
  shadow: true
})
export class RawButton {
  @Prop() type: ButtonType = 'secondary';
  @Prop() icon: string | Icon;

  /**
   * Render our button
   */
  render() {
    return (
      <button class={{ button: true, [this.type]: true }}>
        <slot></slot>
        {this.icon ? <raw-icon icon={this.icon} /> : null}
      </button>
    );
  }
}
