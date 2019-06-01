import { html, css } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../../store.js';

// These are the actions needed by this element.
import {
    updateEmail,
    oops
} from '../../actions/app.js';

// These are the shared styles needed by this element.
import { PageViewElement } from '../app-base/page-view-element.js';
import { SharedStyles } from '../app-base/shared-styles.js';
import { BeachInputCss } from '../form-elements/beach-input';
import { BeachButtonCss } from '../form-elements/beach-button';


class BeachLogin extends connect(store)(PageViewElement) {  
  static get properties() {
    return {
      _email: { type: String },
      password: { type: String }
    }
  }

  setEmail({target}) {
    store.dispatch(updateEmail(target.value));
  }

  setPassword({target}) {
    this.password = target.value;
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this._email, this.password)
      .catch(this.handleFirebaseError);  
  }

  register() {
    firebase.auth().createUserWithEmailAndPassword(this._email, this.password)
      .catch(this.handleFirebaseError);
  }

  handleFirebaseError({code, message}) {
    if(code.indexOf('auth/invalid-email') !== -1) {
      store.dispatch(oops('Oops, dit email adres is niet geldig.'));
    } else if(code.indexOf('auth/weak-password') !== -1) {
      store.dispatch(oops('Oops, dit wachtwoord is niet sterk genoeg.'));
    } else {
      store.dispatch(oops(`${code} - ${message}`));
    }   
  }

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
        }
      `

    ];
  }

  render() {
    return html`
      <form onsubmit='return false'>
        <div class="group">
          <input type="text" required="required" @change="${this.setEmail}">
          <span class="bar"></span>
          <label>Email</label>
        </div>

        <div class="group">
          <input type="password" required="required" @change="${this.setPassword}">
          <span class="bar"></span>
          <label>Wachtwoord</label>
        </div>

        <div>
          <button @click=${this.login} primary>Login</button>
          <button @click=${this.register} secondary>Registreer</button>
        </div>
      </form>
    `;
  }

  stateChanged(state) {
    this._email = state.app.email;
  }
}

window.customElements.define('beach-login', BeachLogin);
