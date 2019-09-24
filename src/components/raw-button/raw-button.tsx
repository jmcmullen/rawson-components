import { Component, Host, h, Prop } from '@stencil/core';

type ButtonType = 'primary' | 'secondary';

@Component({
  tag: 'raw-button',
  styleUrl: 'raw-button.scss',
  shadow: true
})
export class RawButton {
  @Prop() type: ButtonType = 'secondary';
  @Prop() icon: string;

  render() {
    return (
      <button>
        <slot></slot>
        {this.icon ? <raw-icon name={this.icon} /> : null}
      </button>
    );
  }
}
