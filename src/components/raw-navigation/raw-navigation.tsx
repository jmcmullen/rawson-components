import { Component, Prop, h, Listen, EventEmitter, Event, Watch, State } from '@stencil/core';

import homeDesignIcon from '../../assets/images/icons/home-design.svg';
import facadeIcon from '../../assets/images/icons/facade.svg';
import notesIcon from '../../assets/images/icons/notes.svg';
import emailIcon from '../../assets/images/icons/email.svg';
import saveIcon from '../../assets/images/icons/save.svg';
import logo from '../../assets/images/logo.png';

@Component({
  tag: 'raw-navigation',
  shadow: true,
  styleUrl: './raw-navigation.scss'
})
export class Navigation {
  @Prop() steps: Array<any> = [
    { uid: 'home-design', label: 'Home Design', icon: homeDesignIcon },
    { uid: 'facade', label: 'Facade', icon: facadeIcon }
  ];

  @Prop() links: Array<any> = [
    { uid: 'notes', label: 'Notes', icon: notesIcon },
    { uid: 'contact-us', label: 'Contact Us', icon: emailIcon }
  ];

  @State() selectedStep: string = 'home-design';

  @Event() onSelectedStep: EventEmitter;

  setSelectedStep(step) {
    this.selectedStep = step.uid;
    this.onSelectedStep.emit({ step: step.uid });
  }

  render() {
    return (
      <div class="navigation">
        <div class="navigation__brand">
          <img class="navigation__logo" src={logo} />
          <div class="navigation__divider" />
          <h2 class="navigation__title">DreamBuilder</h2>
        </div>
        <div class="navigation__step-list">
          {this.steps.map(step => (
            <button
              key={step.uid}
              class={{
                navigation__step: true,
                'navigation__step--selected': this.selectedStep == step.uid
              }}
              onClick={this.setSelectedStep.bind(this, step)}
            >
              <div class="navigation__step-icon" innerHTML={step.icon} />
              <span class="navigation__step-text">
                <span class="navigation__step-label">{step.label}</span>
                <span class="navigation__step-subtext">{step.subtext}</span>
              </span>
            </button>
          ))}
        </div>
        <div class="navigation__link-list">
          {this.links.map(link => (
            <button class="navigation__link" key={link.uid}>
              <span class="navigation__link-text">
                <div class="navigation__link-icon" innerHTML={link.icon} />
                <span class="navigation__link-label">{link.label}</span>
              </span>
            </button>
          ))}
          <button class="navigation__save">
            <i class="navigation__save-icon" innerHTML={saveIcon}></i>
            <span class="navigation__save-label">Save</span>
          </button>
        </div>
      </div>
    );
  }
}
