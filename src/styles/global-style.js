import { createGlobalStyle } from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../styles/helpers';

const GlobalStyle = createGlobalStyle`

  :root {
    --container-width: 1680px;
    --container-gutter: calc((100vw - var(--container-width)) / 2);
    --customer-container-width: 1396px;
    --customer-container-gutter: calc(((100vw - var(--customer-container-width)) / 2) - var(--container-gutter));
    --white: #fff;
    --black: #16191a;
    --brand-black: #282829;
    --brand-white: #f0eee3;
    --gold: #b48645;
    --light-gray: #f4f4f4;
    --border-color: rgba(240, 238, 227, .2);
    --spacing: 170px;
    --primary-font: "GothamSS", sans-serif;
    --secondary-font: "Anton", sans-serif;
    --tertiary-font: "Knockout-HTF49-Liteweight", sans-serif;
    --focus-outline: 1px solid var(--gold);

    ${screen.below(
      bp.desktopLg,
      `
      --container-width: 1440px;
      --spacing: 128px;
    `,
    )}

    ${screen.below(
      bp.desktop,
      `
      --container-width: 1280px;
      --spacing: 85px;
    `,
    )}

    ${screen.below(
      bp.laptop,
      `
      --container-width: 1080px;
    `,
    )}

    ${screen.below(
      bp.laptopSm,
      `
      --container-width: 940px;
    `,
    )}

    ${screen.below(
      bp.tablet,
      `
      --container-width: 768px;
    `,
    )}

    ${screen.below(
      bp.portrait,
      `
      --container-width: 700px;
    `,
    )}

    ${screen.below(
      bp.mobile,
      `
      --container-width: 600px;
    `,
    )}

    ${screen.below(
      bp.mobileMid,
      `
      --container-width: 500px;
    `,
    )}

    ${screen.below(
      bp.mobileSm,
      `
      --container-width: 335px;
    `,
    )}
  }

  *,
  *::before,
  *::after { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: var(--primary-font);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.75;
    color: var(--brand-black);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: var(--secondary-font);
    font-weight: 400;
    line-height: 1;
    text-transform: uppercase;
    color: inherit;
  }

  h2 { margin-bottom: 36px; }

  img { max-width: 100%; }

  blockquote,
  figure { margin: 0; }

  form { position: relative; }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  a {
    outline: none;

    &::-moz-focus-inner { border: 0; }

    &:not(:disabled) { cursor: pointer; }
  }

  /* for page transitions */

  .transitioning {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    background: var(--gold);
  }
`;

export default GlobalStyle;
