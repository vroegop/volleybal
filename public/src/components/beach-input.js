import { css, html } from 'lit-element';

export const BeachInputCss = css`
.group {
    --input-width: 320px;
    position: relative;
    margin: 20px 0;
  }

  textarea {
    resize: none;
  }

  input,
  textarea {
    background: none;
    color: #c6c6c6;
    font-size: 18px;
    padding: 10px 0px 10px 0px;
    display: block;
    width: var(--input-width);
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #c6c6c6;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }
  input:focus ~ label, input:valid ~ label,
  textarea:focus ~ label,
  textarea:valid ~ label {
    top: -14px;
    font-size: 12px;
    color: #2196F3;
  }
  input:focus ~ .bar:before,
  textarea:focus ~ .bar:before {
    width: var(--input-width);
  }

  input[type="password"] {
    letter-spacing: 0.3em;
  }

  label {
    color: #c6c6c6;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
  }

  .bar {
    position: relative;
    display: block;
    width: 320px;
  }
  .bar:before {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: #2196F3;
    transition: 300ms ease all;
    left: 0%;
  }
`;

export const BeachInputHtml = (type, title) => html`
<div class="group">
    <input type="${type}" required="required"/>
    <span class="bar"></span>
    <label>${title}</label>
</div>
`;