import { html, css } from 'lit-element';
import { PageViewElement } from '../app-base/page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from '../app-base/shared-styles.js';
import { BeachInputCss, BeachInputHtml } from '../form-elements/beach-input';
import { BeachButtonCss } from '../form-elements/beach-button';


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
