import { css } from 'lit-element';

export const BeachButtonCss = css`
button {
  background: #fff;
  color: #959595;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
button:hover {
  color: #8b8b8b;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.36);
  background: #e1e1e1;
}
button[primary] {
  background: #2196f3;
  color: #bce0fb;
}
button[primary] {
  background: #0d8aee;
  color: #deeffd;
}
button[secondary] {
  background: #eee;
}
`;