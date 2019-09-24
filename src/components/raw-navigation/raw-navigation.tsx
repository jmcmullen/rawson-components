import { Component, Prop, h, Listen, EventEmitter, Event, Watch, State } from '@stencil/core';
import { homeDesign, facade, notes, email, save } from '../../utils/icons';
import logo from '../../assets/images/logo.png';

@Component({
  tag: 'raw-navigation',
  shadow: true,
  styleUrl: './raw-navigation.scss'
})
export class Navigation {
  /**
   * Steps in navigation
   * @type {Array<MenuItem>}
   */
  @Prop() steps: Array<MenuItem> = [
    { uid: 'home-design', label: 'Home Design', icon: homeDesign },
    { uid: 'facade', label: 'Facade', icon: facade }
  ];

  /**
   * Navigation links
   * @type {Array<MenuItem>}
   */
  @Prop() links: Array<MenuItem> = [
    { uid: 'notes', label: 'Notes', icon: notes },
    { uid: 'contact-us', label: 'Contact Us', icon: email }
  ];

  /**
   * Currently selected step in navigation
   */
  @State() selectedStep: string = 'home-design';

  /**
   * Event fires when selected step changes
   */
  @Event() onSelectedStep: EventEmitter;

  /**
   * Set selected step of navigation
   * @param {MenuItem} - step
   */
  setSelectedStep = (step: MenuItem) => {
    this.selectedStep = step.uid;
    this.onSelectedStep.emit({ step: step.uid });
  };

  /**
   * Render steps of navigation
   */
  renderSteps = () => {
    return this.steps.map(step => (
      <button
        key={step.uid}
        onClick={this.setSelectedStep.bind(this, step)}
        class={{
          step: true,
          selected: this.selectedStep == step.uid
        }}
      >
        <i class="step-icon" innerHTML={step.icon.src} />
        <span class="step-text">
          <span class="step-label">{step.label}</span>
          <span class="step-subtext">{step.subtext}</span>
        </span>
      </button>
    ));
  };

  /**
   * Render links of navigation
   */
  renderLinks = () => {
    return this.links.map(link => (
      <button class="link" key={link.uid}>
        <span class="link-text">
          <i class="link-icon" innerHTML={link.icon.src} />
          <span class="link-label">{link.label}</span>
        </span>
      </button>
    ));
  };

  /**
   * Render navigation
   */
  render = () => {
    return (
      <div class="navigation">
        <div class="brand">
          <img class="logo" src={logo} />
          <div class="divider" />
          <h2 class="title">DreamBuilder</h2>
        </div>
        <div class="step-list">{this.renderSteps()}</div>
        <div class="link-list">
          {this.renderLinks()}
          <button class="save">
            <i class="link-icon" innerHTML={save.src} />
            <span class="save-label">Save</span>
          </button>
        </div>
      </div>
    );
  };
}
