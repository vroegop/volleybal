/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { BeachInputCss, BeachInputHtml } from './beach-input';
import { BeachButtonCss } from './beach-button';


class BeachLogin extends PageViewElement {
  static get styles() {
    return [
      SharedStyles,
      BeachInputCss,
      BeachButtonCss,
      css`
      form {
        max-width:500px;
        display:flex;
        flex-direction:column;
        align-items:center;
        margin: 20px auto;
      }
      
      form div {
        display: block;
        margin:20px 0;
      }`

    ];
  }

  render() {
    return html`
      <form>
        ${BeachInputHtml('text', 'Email')}
        ${BeachInputHtml('password', 'Wachtwoord')}

        <div>
          <button type="submit" primary>Login</button>
          <button type="submit" secondary>Registreer</button>
        </div>
      </form>
    `;
  }
}

window.customElements.define('beach-login', BeachLogin);
