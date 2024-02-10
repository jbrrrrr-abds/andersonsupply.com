import styled, { keyframes } from 'styled-components';
import GullsModal from './GullsModal';

const fade = keyframes`
  0%   {
    background-color: rgba(0, 0, 0, 0);
  }

  100% {
    background-color: rgba(0, 0, 0, .75);
  }
`;

const Modal = styled(GullsModal)`
  .Overlay {
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .75);
    animation: 1.2s ${fade} ease-in;
  }

  .Modal {
    position: relative;
    width: 100%;
    border: 0;
    outline: none;
    text-align: center;

    /** Allows parent to determine width and not affect
        clickable area to close modal. Questions? Ask Brett 😑
     */
    pointer-events: none;

    > div { pointer-events: auto; }
  }
`;

export default Modal;
