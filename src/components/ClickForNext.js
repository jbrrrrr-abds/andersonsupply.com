import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(-360deg);
  }
`;

const RotatingSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
  animation: 12s ${spin} infinite linear;
`;

const ClickForNext = () => (
  <RotatingSVG xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 98 98">
    <defs />
    <circle cx="49" cy="49" r="26" stroke="#B48645" fill="rgba(255,255,255,.69)" strokeWidth="2" />
    <circle cx="49" cy="49" r="33.5" stroke="currentColor" />
    <path fill="currentColor" d="M21.6 78.3h.1v.2h.1l.2.2v.1h.1v.1l.1.1v.1h.1v.2l.1.1v.1h.1v.4h.1v.4l.1.2v1h-.1V81.9l-.1.1v.1l-.1.2-.1.1v.1l-.1.2-.1.1-.1.2h-.1v.1h-.1l-.1.1v.1h-.1l-.1.1v.1h-.1l-.1.1-.2.1-.1.1-.2.1h-.1l-.1.1h-.1v.1H20v.1h-.4l-.2.1H18.3V84h-.2L18 84h-.2v-.1h-.2l-.1-.1h-.1v-.1h-.2v-.1l-.1-.1-.2-.1-.1-.2-.1-.1h-.1V83l-.1-.1-.1-.1v-.1h-.1v-.2h-.1v-.1l-.1-.1-.1-.1V82l-.1-.1v-.2l-.1-.2V81l-.1-.1v-.2h.8V81.1l.1.2v.2l.1.1v.1l.1.2v.1h.1v.2h.1v.1h.1v.1l.1.1.1.2h.1l.2.2h.1v.1h.2v.1h.2v.1H18.6l.1.1H20l.1-.1h.2V83h.2V83h.2v-.1h.1v-.2h.2l.1-.1v-.1l.1-.1h.1v-.1l.1-.1.1-.2.1-.1v-.2h.1v-.1l.1-.2v-.2l.1-.1V79.9l-.1-.1v-.1l-.1-.2-.1-.1-.1-.2-.1-.1h-.1V79l-.1-.1H21v-.1h-.1l-.1-.1-.1-.1h-.1l-.1-.1-.2-.1h-.1l-.1-.1H19.8l-.2-.1h-.7V77.4H20.3l.1.1h.2v.1h.2l.1.1.2.1.1.1.2.1.1.1.2.2zM12.2 78v-.1H12v-.1l-.1-.1v-.1h-.1v-.1l-.1-.1v-.1l.2-.1.1-.1.1-.1.1-.1.2-.1.1-.1.2-.1.1-.1.2-.1.1-.1.2-.1.1-.1V76h.1l.1-.1.2-.1.1-.1.2-.1.1-.1.2-.1.1-.1.2-.1V75h.1V75h.1l.1-.1h.1v-.1h.1l.1-.1.2-.1.1-.1.2-.1.1-.1v-.1h.2V74h.1V74h.1v-.2h-.1v-.2h-.1v-.1H16v-.2H16v-.1h-.1V73h-.1l-.1-.1-.1-.2-.1-.1-.1-.1v-.1h-.1v-.2h-.1V72H15v-.2H15v-.1h-.1l-.1-.2-.1-.1-.1-.2-.1-.1-.1-.2v-.1h.1l.1-.1.2-.1.1-.1h.1l.1.1v.1h.1v.1l.1.1v.1h.1l.1.1v.1h.1v.2h.1v.1h.1v.2h.1v.1h.1v.1l.1.1.1.2.1.1.1.2h.1v.1h.1v.2h.1v.1h.1v.2h.1l.1.2.1.1.1.2.1.1.1.2h.1v.1h.1v.1h-.1l-.1.1-.2.1v.1H17v.1h-.2v.1h-.1v.1h-.2v.1h-.1v.1h-.1l-.1.1-.2.1-.1.1-.2.1v.1h-.1v.1h-.2v.1h-.1v.1h-.1l-.1.1-.2.1-.1.1-.2.1-.1.1v.1h-.2v.1h-.1v.1H14v.1H14v.1h-.1l-.1.1-.2.1-.1.1-.2.1-.1.1v.1H13v.1h-.1v.1h-.1l-.1.1-.2.1-.1.1-.2.1zM7.6 70.7l-.1-.2-.1-.1v-.1l-.1-.2-.1-.1v-.1h.1l.1-.1h.2v-.1h.1l.1-.1.2-.1h.1l.1-.1h.1v-.1h.2l.1-.1.2-.1H9L9 69h.1v-.1h.2l.1-.1h.1v-.1h.2l.1-.1h.1v-.1h.2v-.1h.2v-.1h.2v-.1h.2l.1-.1.2-.1h.1l.1-.1.2-.1h.1l.1-.1.2-.1h.1l.1-.1.2-.1.1-.1h.1l.2-.1.1-.1h.2V67h.2v.2h.1v.1l.1.1v.2h.1v.1l-.1.1H13v.1H13l-.1.1h-.2v.1h-.1l-.1.1h-.1l-.2.1-.1.1H12l-.2.1-.1.1h-.1v.1h-.2l-.1.1h-.1v.1H11l-.1.1h-.1v.1h-.2l-.1.1h-.1v.1h-.2l-.1.1H10l-.1.1-.2.1h-.1l-.1.1-.2.1h-.1L9 70l-.2.1h-.1l-.1.1-.2.1h-.1l-.1.1-.2.1H8l-.1.1h-.1v.1h-.2v.1zM10.6 60.5v.1l.1.1v1.8l-.1.1v.1l-.1.2-.1.1v.1h-.1v.2h-.1v.1H10v.2h-.2v.2h-.1l-.2.1v.1h-.1v.1h-.2v.1h-.1v.1H9l-.1.1h-.1v.1h-.2l-.2.1h-.2l-.1.1H7.5v.1H6.6l-.1-.1H6.2v-.1H6l-.2-.1-.1-.1-.2-.1h-.1l-.1-.1V64h-.1L5 64l-.2-.2-.1-.2h-.1v-.1h-.1v-.1l-.1-.1v-.1h-.1V63l-.1-.1v-.1l-.1-.1v-.1l-.1-.2v-.2L4 62v-1.7l.1-.1V60h.1v-.2l.1-.1H4.6v.1h.2v.1H5l.1.1v.1l-.1.2v.2l-.1.1v.2h-.1V62.3l.1.2.1.1v.2h.1v.2h.1v.1h.1l.1.1.1.2h.2v.1l.2.1.1.1h.2v.1h.2l.1.1H7l.1.1H8v-.1H8.3l.1-.1h.1v-.1h.2l.1-.1.2-.1v-.1h.2v-.1h.1V63l.1-.1.1-.2h.1l.1-.2v-.1l.1-.1.1-.2V62h.1V60.5l-.1-.1v-.2h-.1v-.1l-.1-.2-.1-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.2h-.1l-.1-.1h-.1V59h-.2l-.1-.1v-.1l.1-.2v-.1l.1-.1.1-.2H9l.2.1.1.1.2.1.1.1.1.1.1.1.1.1v.1h.2v.2h.1v.1l.1.1v.1h.1v.2h.1v.2h.1v.2l.1.2zM2.6 55.4v-.8h.6l.2-.1h1.2v-.1h1.2l.1-.1h.4l-.1-.1L6 54 6 54h-.1v-.1h-.2v-.2h-.1l-.1-.1h-.1v-.1h-.2v-.1l-.1-.1-.1-.1h-.1V53l-.2-.1v-.1h-.2v-.1h-.1v-.1l-.2-.1v-.1H4v-.1h-.1v-.1l-.1-.1h-.1V52h-.2V52h-.1v-.2h-.2v-.1H3v-.1h-.1v-.1l-.1-.1h-.1v-.1h-.1l-.1-.1V51h-.2V50.1h-.1V49.9h.1l.1.1v.1h.1l.1.1.1.1.1.1.2.1v.1l.2.1.1.1.1.1h.1v.1l.2.1v.1H4v.1H4v.2h.2v.1h.2v.2h.2v.1h.1v.1l.1.1H5v.1h.2v.1h.1v.2l.1-.1h.1v-.1l.1-.1h.1V52h.1l.1-.1v-.1H6l.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1V51H7l.1-.2h.1l.1-.1v-.1h.2v-.1l.1-.2h.1l.2-.1V50L8 50v-.2h.2v-.1l.2-.1v-.1h.2v-.2h.2v1.1h-.2v.2h-.2v.2h-.2v.1L8 51v.1l-.2.1v.1l-.2.1v.1h-.2v.2h-.1l-.1.1v.1H7v.1l-.1.1-.1.1-.2.1v.2h-.2v.1h-.2v.2H6L6 53v.2h.1l.1.1v.1h.1l.1.1.2.1.1.2h.1l.1.1.2.1v.1l.2.1H9.1V54.7h.1v.2h-1v.1H7l-.1.1H5.7l-.1.1H4.4l-.2.1H3.2l-.1.1h-.4zM3.2 39.5V39.1l.1-.1v-.4h.1V38.3l.1-.1V38l.1-.2v-.2l.1-.1V37.2l.1-.1V36.8H4v-.4H4V36l.1-.2v-.2l.1-.1V35.3l.1-.2v-.2h.5l.1.1h.2v.5l-.1.2v.2l-.1.1V36.3l-.1.2v.2l-.1.1V37.1l-.1.2v.2l-.1.1v.2l-.1.2V38.4l-.1.1v.2l-.1.2.2.1h.2l.1.1h.4v.1H5.4l.1.1h.2l.2.1H6.2l.1.1V39l.1-.1V38.7h.1v-.4l.1-.1V38l.1-.2V37.5h.1V37.1L7 37V36.8l.1-.2v-.2l.1-.1V36H7.5l.1.1H7.8v.1H8v.5l-.1.1v.2l-.1.2V37.6l-.1.1V38h-.1V38.3l-.1.1v.4h-.1V39h-.1v.4l-.1.1v.1h.2l.1.1h.4v.1H8.2l.1.1H8.5v.1H9l.1.1H9.3v.1h.4l.1.1V40.6l-.1.1v.4H9L9 41h-.4v-.1H8.2l-.1-.1h-.4v-.1H7.4l-.1-.1H7v-.1H6.7v-.1h-.4v-.1h-.4v-.1H5.5l-.1-.1H5.2L5 40h-.2l-.1-.1h-.4v-.1H4l-.1-.1H3.6v-.1h-.4zM13.3 31l-.1.2-.1.1-.1.1v.1h-.1l-.1.1v.1h-.1v.1l-.1.1h-.1v.1h-.1l-.1.1h-.1v.1l-.2.1h-.1v.1h-.2v.1h-.2l-.1.1H11v.1H9.2l-.1-.1H9l-.1-.1-.2-.1-.1-.1h-.1v-.1h-.2V32h-.1V32H8l-.1-.1-.1-.1-.1-.1-.1-.1v-.1h-.1l-.1-.1v-.1l-.1-.1-.1-.2-.1-.1v-.1l-.1-.2v-.2H7V30h-.1V28.3H7v-.2l.1-.1v-.2l.1-.1.1-.2.1-.1v-.1h.1v-.1l.1-.1.1-.1V27h.1l.1-.1.1-.1v-.1h.2v-.1h.1l.1-.1.2-.1.1-.1h.1l.2-.1.1-.1H9.4l.2-.1h1.6v.1h.2l.1.1h.2v.1h.1l.2.1.1.1.2.1.1.1.1.1h.1v.1l.1.1.2.1v.1l.1.2.1.1.1.2.1.1v.1l.1.1v.2h.1V28.5l.1.2V30.5h-.1v.2l-.1.1v.1l-.1.1zm-.7-.5v-.1l.1-.1V30h.1V28.5h-.1v-.2l-.1-.1v-.1h-.1V28h-.1v-.1h-.1v-.1l-.2-.1v-.1l-.1-.1h-.1v-.1h-.2v-.1h-.1l-.1-.1h-.1l-.1-.1H11V27H10.7l-.1-.1H9.3l-.1.1H9l-.2.1-.1.1-.2.1-.1.1v.1h-.1l-.1.1v.1h-.1v.2H8v.1H8v.2h-.1v.2l-.1.1v.2l-.1.1V30l.1.1v.1l.1.2v.1H8v.2h.1v.1h.1l.1.1v.1h.1l.1.1v.1h.1l.1.1.2.1.1.1h.1l.1.1h.2v.1h.2l.2.1H11.3v-.1h.2v-.1h.2v-.1h.1v-.1h.2v-.1l.1-.1.1-.1V31h.1l.1-.1v-.1l.1-.1.1-.2zM11.5 21v-.1l.1-.1h.1v-.2h.1l.1-.2.1-.1h.1v-.1l.1-.1.1-.1v-.1h.1l.1-.1v-.1h.1v-.2h.1l.2-.2v-.1h.1V19l.1-.1h.1v-.1l.1-.1.2-.2v-.1h.2v-.2h.2v-.1h.1V18h.2V18h.2l.1-.1h.2v-.1h1.1l.1.1.2.1.1.1h.1v.1h.1l.2.2v.1h.1v.1l.1.1v.1h.1v.2h.1V19.4l.1.1V20.2l-.1.2v.2h-.1v.1l-.1.1h1.5l.1.1H19.8l.2.1v.2h-.2v.2h-.1v.1l-.1.1-.1.1-.1.1h-1.5l-.1-.1h-1.5l-.2.1v.1l-.1.1v.1h-.2v.2l-.1.1-.2.1v.1l-.1.2-.2.1v.1h.1l.1.1v.1h.1l.1.1.2.1v.1l.2.1.1.1.2.2h.1v.1h.1l.1.1v.1h.1l.1.1.2.1v.1h.1v.1H17v.2h-.1v.1h-.1v.1l-.1.1h-.1v.1h-.2V25l-.1-.1h-.1v-.1H16l-.1-.1-.2-.2h-.1v-.1h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.1H15V24l-.2-.1v-.1h-.2v-.1h-.1v-.2h-.2v-.1h-.2v-.2H14V23h-.1V23h-.1l-.1-.2h-.1l-.1-.1-.2-.1v-.1l-.2-.1-.1-.1-.1-.2h-.1l-.1-.1h-.1v-.1h-.2v-.2h-.2v-.1H12v-.1l-.1-.1h-.1v-.1h-.2v-.1l-.2-.2zm4.3 0h.1v-.2h.1v-.1l.1-.1v-.2h.1V20l.1-.1v-.6l-.1-.1-.1-.2-.1-.1h-.1l-.1-.1-.2-.1-.1-.1h-.9v.1h-.2v.1l-.2.1-.1.1v.1H14l-.1.2h-.1v.2h-.2v.1l-.1.1v.1h-.1l-.1.2-.1.1-.1.1-.1.1-.1.1v.1l-.1.1h-.1V21h.2v.1h.2v.1l.1.1.1.1h.1v.1h.1l.1.1v.1h.2v.1h.1v.1l.1.1h.1v.1h.1l.1.1.2.1v.1h.2v-.1l.1-.1.1-.2h.1v-.1h.1v-.1l.1-.1h.1v-.2h.1l.1-.2.2-.1V21l.1-.1zM47.3 2v.2l-.1.1-.1.2-.1.1v.2h-.1V3l-.1.1-.1.2-.1.1v.1h-.1v.2h-.1v.1h-.1V4l-.1.1v.1H46v.2H46v.1l-.1.1-.1.2-.1.1-.1.2-.1.1v.1l-.1.2-.1.1v.2h.2V6h.2v.2h.1l.1.2.2.1v.1l.1.1h.1v.1l.1.1.1.1.1.1.1.1v.1h.2v.2h.1l.1.2h.1v.2h.2V8h.1l.1.2h.1v.1h.1v.1l.1.1h.1v.1h-.5v.1H47v-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1-.1-.1-.1-.1-.1-.1v-.1h-.1l-.1-.1v-.1H46v-.1l-.1-.1h-.1v-.1l-.1-.1-.1-.1-.1-.1-.1-.1v-.1h-.1v-.1l-.2-.1v-.1l-.1-.1-.2-.1v-.1l-.1.1v.1l-.1.1-.1.2v.1l-.1.1-.1.2-.1.1v.1H44v.2H44v.1l-.1.1V8h-.1V8l-.1.1-.1.2-.1.1-.1.2-.1.1v.1l-.1.2-.1.1h-.7v.1H42V9l.1-.1.1-.2v-.1l.1-.1.1-.2.1-.1.1-.2.1-.1v-.1h.1v-.2h.1v-.1l.1-.2.1-.1v-.1h.1V7h.1v-.1l.1-.1.1-.2v-.1h.1v-.2h.1v-.1L44 6l.1-.2.1-.1.1-.2-.1-.1-.1-.1-.1-.1-.1-.1V5h-.1l-.1-.1v-.1h-.1v-.1l-.2-.1v-.2H43v-.2H43l-.1-.2h-.1V4h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1h-.1v-.1l-.1-.1-.1-.1-.1-.1-.1-.1V3h-.1l-.1-.2h-.1v-.2H42.6l.1.1v.1h.1l.1.1V3h.1v.1l.1.1.2.1v.1l.1.1v.1h.2v.2h.1l.1.2h.1v.2h.2v.2h.1l.1.2h.2v.2h.1V5l.1-.1.1-.2.1-.1v-.1h.1v-.2h.1v-.1l.1-.2.1-.1v-.1h.1v-.2h.1v-.1l.1-.1v-.2h.1V3h.1v-.2h.1v-.1h.1v-.2h.1v-.1l.1-.1v-.2H46.9L47 2H47.4zM23 10h.1l.1-.1.2-.1.1-.1.2-.1H24l.2.1h.1l.1.1h.1l.2.1h.1l.1.1h.2v.1h.2l.1.1h.2v.1h.2l.1.1h.2v.1h.2l.1.1h.2l.1.1h.2v.1h.2l.1.1.2.1h.2l.1.1.2.1h.2l.1.1h.1v.1h.2l.1.1h.2v.1h.2l.1.1h.2l.1.1h.2v.1h.1v-.1l-.1-.1v-.2h-.1v-.1h-.1v-.2h-.1V11l-.1-.1-.1-.2-.1-.1v-.1l-.1-.2-.1-.1-.1-.2-.1-.1v-.1h-.1v-.2l-.1-.1-.1-.2-.1-.1v-.1H28V9H28v-.1l-.1-.2-.1-.1v-.1h-.1v-.2h-.1v-.1l-.1-.1v-.2h-.1v-.1h-.1v-.2h-.1v-.1h.2v-.1h.2v-.1h.1v-.1H28v.2h.1v.1h.1v.2l.1.1V8h.1v.2h.1v.1h.1v.2h.1v.2h.1v.2h.1V9h.1v.2h.1v.1l.1.1v.2h.1v.1l.1.1.1.2.1.1.1.2v.1l.1.1.1.2.1.1.1.2.1.1v.1h.1v.2l.1.1.1.2.1.1v.1h.1v.2l.1.1v.1h.1v.2h.1v.1h.1v.2h.1v.1l-.1.1-.2.1-.1.1h-.5L30 13H30l-.1-.1h-.1l-.2-.1h-.1l-.1-.1h-.2v-.1H29l-.1-.1h-.2v-.1h-.2l-.1-.1h-.2v-.1H28l-.1-.1h-.2V12h-.2l-.1-.1h-.2l-.1-.1h-.2v-.1h-.2l-.1-.1h-.2v-.1h-.2l-.1-.1h-.2v-.1h-.2l-.1-.1h-.1l-.2-.1h-.1L25 11H25l-.2-.1h-.1l-.1-.1h-.1v.1h.1v.2h.1v.1h.1v.2h.1v.1l.1.1v.2h.1v.1l.1.1.1.2.1.1v.1h.1v.2l.1.1.1.2.1.1v.1h.1v.2h.1v.1l.1.1v.2h.1v.1l.1.1.1.2.1.1.1.2.1.1v.1l.1.2.1.1v.1h.1v.2h.1l-.2.1-.1.1h-.1v.1h-.2v.1h-.2v-.2h-.1v-.1l-.1-.1V15H26v-.1h-.1v-.2h-.1v-.1l-.1-.1-.1-.2v-.1h-.1V14h-.1v-.1l-.1-.1-.1-.2-.1-.1v-.1l-.1-.2-.1-.1-.1-.2-.1-.1v-.1h-.1v-.2h-.1v-.2h-.1V12h-.1V12h-.1v-.2H24v-.1l-.1-.1v-.2h-.1v-.1h-.1V11h-.1V11l-.1-.1-.1-.2v-.1h-.1v-.2h-.1v-.1l-.1-.1-.1-.2zM32.5 5.1H32.8V5H33.2l.1-.1h.2v-.1H33.8l.1-.1h.1l.2-.1h.2l.1-.1H34.7v-.1h.2l.1-.1h.2l.2-.1h.1l.1-.1h.2L36 4h.2l.1-.1h.1l.2-.1h.2l.1-.1h.2v.1l.1.2v.2l.1.1v.1H37l-.1.1h-.2l-.2.1h-.2l-.1.1H36v.1H35.7l-.1.1h-.1l-.2.1h-.2l-.1.1h-.2v.1h-.4v.1H34.2v.1H34l-.2.1h-.2V5.9l.1.1v.2l.1.2v.2l.1.1v.2h.1v.4h.1v.2l.1.1h.5l.1-.1h.2l.2-.1h.1l.1-.1h.2l.2-.1h.2l.1-.1h.1l.2-.1h.2l.1-.1h.1l.2-.1h.2l.1-.1H37.6v.2l.1.1v.2l.1.2H37.4l-.1.1H37v.1H36.7l-.1.1h-.2v.1H36.1l-.1.1h-.2V8H35.5l-.1.1h-.2l-.1.1H35l-.1.1h-.2l-.1.1h-.1v.4h.1V9l.1.1v.2h.1V9.7h.1v.4h.1v.2h.1v.2h.2v-.1H35.7l.1-.1h.2V10H36.3l.1-.1h.2l.2-.1h.2v-.1h.2l.2-.1h.1l.1-.1h.2l.2-.1h.2l.1-.1h.2v-.1H38.8l.1-.1h.1v.1l.1.1V9.7h.1v.2H39l-.1.1h-.2l-.1.1H38.3v.1H38l-.1.1h-.2l-.2.1h-.2l-.1.1H37v.1H36.7l-.1.1H36.4v.1h-.2l-.1.1H35.8v.1H35.4l-.1.1h-.1l-.2.1h-.2l-.1.1h-.2v.1l-.1-.2V11l-.1-.1V10.7h-.1v-.2l-.1-.1V10H34V9.7l-.1-.1v-.2h-.1V9.1l-.1-.1v-.2l-.1-.2v-.1l-.1-.1v-.2l-.1-.2v-.2h-.1V7.6h-.1V7.2l-.1-.1V7H33V6.6l-.1-.1v-.2h-.1V6l-.1-.1v-.2l-.1-.2v-.2h-.1V5zM53.7 3.1H52.6l-.1-.1H51.7l-.1-.1h-.1V2h1v.1H53.5v.1H54.3l.1.1h.8l.1.1h.8l.1.1H56.8v.7h-.1v.2h-.5v-.1H55.3v-.1h-.8v.9l-.1.1V5.1l-.1.1V6l-.1.1V7L54 7V8L54 8V8.9l-.1.1H53v-.6l.1-.1V7.4l.1-.1V6.5l.1-.1V5.5l.1-.1V4.6l.1-.1v-.8l.1-.1v-.4zM67.9 6.9l-.2-.1h-.1l-.1-.1h-.1l-.2-.1-.1-.1H67l-.2-.1h-.2v-.1h-.1l-.1-.1h-.2V6H66L66 6v-.4l.1-.1v-.1h.1v-.2h.1l.1.1h.2v.1h.1l.1.1h.1l.2.1h.1l.1.1h.1l.2.1.1.1h.1l.2.1.1.1h.2v.1h.2l.1.1h.1v.1h.2l.1.1h.2v.1h.2v.1h.2l.1.1h.2V7h.1l.1.1h.2v.1h.2l.1.1.2.1h.1l.1.1v.1l-.1.2v.1l-.1.1v.2h-.4V8h-.2l-.1-.1h-.2v-.1h-.1l-.1-.1h-.1l-.2-.1-.1-.1H69v-.1h-.2l-.1-.1h-.1v.1h-.1v.2h-.1v.2l-.1.1v.2h-.1v.1l-.1.1v.1l-.1.2v.1l-.1.1-.1.2v.1l-.1.1v.1l-.1.2-.1.1v.2h-.1v.2l-.1.1v.1h-.1v.2l-.1.1v.1l-.1.1v.2H67v.2h-.1v.2h-.1v.2l-.1.1v.2h-.1v.1l-.1.1v.1l-.1.2v.1l-.1.1h-.1l-.2-.1h-.1l-.1-.1h-.2v-.1h-.1V11.9h.1v-.2h.1v-.2h.1v-.2h.1V11l.1-.1v-.2h.1v-.1l.1-.1v-.1l.1-.2v-.1l.1-.1.1-.2v-.1l.1-.1v-.1l.1-.2.1-.1v-.1L67 9v-.1l.1-.1v-.1h.1v-.2l.1-.1v-.2h.1V8h.1v-.2l.1-.1v-.2h.1v-.1l.1-.1V7h.1V7l.1-.1zM74.9 9.7l.1.1h.1v.1h.2v.1h.1v.1h.2v.1h.1v.1h.1l.1.1v.1h.2v.1h.1v.1h.2v.1h.1v.1h.2v.1h.1v.1l.1.1h.1v.1h.2v.1h.1v.1h.2v.1h.1v.1h.2v.1h.1v.1l.1.1h.1v.1h.2v.1h.1v.1h.2v.1h.1V12.8l-.1.1-.1.2-.1.1H78V13h-.2v-.2h-.1l-.2-.1-.1-.1-.1-.1h-.1v-.1H77v-.1l-.1-.1-.2-.1-.1-.1-.2-.1-.1-.1-.2-.1v-.1H76v-.1h-.2v-.1h-.1v-.1h-.1l-.1-.1h-.1V11h-.1l-.1-.1v-.1H75v.1H75v.1l-.1.1-.1.2h-.1v.1h-.1v.2h-.1v.1h-.1v.2h-.1v.1h-.1v.1l-.1.1-.1.1-.1.1v.1h.1l.1.1.2.1.1.1.1.1h.1v.1h.2v.1h.1v.1h.2v.1l.1.1.1.1h.1v.1h.2v.1h.1v.1h.2v.1h.1v.1h.2v.1l.2.1v.1h.1v.1h.2V14.9h-.1v.1h-.1v.1l-.1.1-.1.2-.1-.1-.2-.1-.1-.1-.1-.1h-.1v-.1h-.2v-.1h-.1v-.1h-.2v-.1l-.1-.1-.1-.1h-.1v-.1h-.2V14h-.1V14h-.2v-.1h-.1v-.1h-.1l-.1-.1v-.1h-.2v-.1h-.1v-.1h-.2v-.1h-.1v-.1h-.1v.1h-.1v.2h-.1v.1H73v.2H73l-.1.1-.1.1v.1h-.1v.2h-.1v.1h-.1v.2h-.1l-.1.2-.1.1.1.1.2.1.1.1.2.1.1.1v.1h.1l.1.1.2.1.1.1.2.1.1.1.1.1h.1v.1l.2.1.1.1.2.1.1.1.2.1.1.1.1.1h.1v.1l.2.1.1.1v.2l-.1.1v.1H75v.2H75v.1h-.2v-.1h-.1v-.1h-.1l-.1-.1-.2-.1-.1-.1-.2-.1-.1-.1V17h-.1l-.1-.1-.2-.1-.1-.1-.2-.1-.1-.1-.1-.1h-.1v-.1h-.2v-.1l-.1-.1-.2-.1-.1-.1-.1-.1H72v-.1h-.2v-.1h-.1v-.1h-.2v-.1l-.1-.1-.1-.1h-.1v-.1H71V15H71V15l.1-.1.1-.2.1-.1.1-.2.1-.1.1-.1V14h.1l.1-.2.1-.1.1-.2.1-.1.1-.1v-.1h.1V13h.1V13h.1l.1-.2.1-.1.1-.2.1-.1.1-.1v-.1h.1V12h.1v-.1h.1l.1-.2.1-.1.1-.2.1-.1.1-.1V11h.1v-.2h.1v-.1h.1l.1-.1v-.1l.1-.1.1-.1v-.1h.1V10h.1V10h.1v-.2h.1l.1-.1zM79 22l-.1-.1-.1-.1-.1-.2h-.1v-.2h-.1v-.2h-.1V21h-.1v-.2h-.1V20.4l-.1-.1V20l-.1-.2v-.6h.8v.9l.1.1V20.6h.1v.2h.1v.2h.1v.1l.1.1.2.1v.2h.1l.1.1.1.1.1.1h.1v.1h.2l.1.1h.8l.1-.1h.1v-.1l.1-.1v-.1h.1v-1l-.1-.1v-.2h-.1V20l-.1-.1v-.1l-.1-.1H81v-.2h-.1v-.2l-.1-.1-.1-.2v-.2h-.1v-.2l-.1-.2V17.4h.1v-.2h.1V17h.1l.1-.2h.1v-.1h.2v-.1h.1l.1-.1h.2v-.1H83v.1h.2l.1.1.2.1.1.1.1.1.1.1.1.2h.1v.1h.1v.2h.2v.1l.1.2.1.1v.1l.1.2v.1h.1V18.8l.1.1V19.4h.1v.1h-.5l-.1.1H84V19l-.1-.1V18.7h-.1v-.2h-.1v-.2l-.1-.1-.1-.2-.1-.1-.2-.1v-.1l-.2-.1-.1-.1-.2-.1-.1-.1H81.7v.1l-.1.1-.1.2h-.1v1.1h.1v.1l.1.1v.1l.1.1.1.2.1.2.1.2.1.2.1.1v.2l.1.1V20.7h.1V22h-.1v.1l-.1.1H82v.1l-.2.1-.1.1v.1h-.2l-.1.1h-.1v.1h-.5l-.1.1h-.5l-.2-.1H80l-.1-.1h-.1v-.1h-.2l-.1-.1-.1-.1-.1-.1h-.1V22H79zM88.4 24.8v-.2h-.1v-.1h-.1v-.2l-.1-.1V24H88v-.2h-.1v-.1h-.1v-.2h-.1v-.1l-.1-.1-.1-.2-.1-.1v-.2l.1-.1h.1v-.1h.2l.1-.1h.1l.1.1v.1l.1.1.1.2.1.1.1.2.1.1v.1h.1v.2l.1.1.1.2.1.1v.1h.1v.2h.1v.1h.1v.2h.1v.2h.1v.2h.1v.1h.1v.2h.1v.1l.1.1.1.2.1.1v.2h.1v.1h.1v.2h.1v.1l.1.1.1.2.1.1-.2.1-.1.1h-.2v.1H90v.1H90v-.1l-.1-.1-.1-.2-.1-.1v-.1h-.1v-.2h-.1v-.1h-.1v-.2l-.1-.1V26h-.1v-.2H89v-.1H89v-.2H88.6l-.1.1h-.1v.1h-.2v.1h-.1v.1H88v.1h-.1l-.1.1-.2.1h-.1v.1h-.2v.1h-.1l-.1.1-.2.1-.1.1-.2.1-.1.1h-.1l-.2.1-.1.1-.2.1-.1.1h-.1v.1h-.2v.1h-.1v.1h-.2l-.1.1H85v.1h-.2v.1h-.1v.1h-.2v.1h-.1l-.1.1-.2.1H84v.1h-.1v-.1h-.1v-.2h-.1V28h-.1v-.2l-.1-.1.1-.1h.1l.2-.1.1-.1.2-.1.1-.1h.1v-.1h.2V27h.1V27h.2l.1-.1h.1v-.1h.2v-.1h.1v-.1h.2v-.1h.1l.1-.1.2-.1h.1v-.1h.2V26h.1V26h.2v-.1h.1l.1-.1.2-.1.1-.1h.2v-.1h.1l.1-.1.2-.1.1-.1.2-.1.1-.1h.1v-.1h.2zM92.5 31v.1l.1.1v.2h.1v.2l.1.1v.2h-.1l-.2.1h-.1l-.1.1h-.1l-.2.1h-.1l-.1.1h-.2v.1h-.2l-.1.1h-.1l-.2.1h-.1l-.1.1h-.2v.1h-.2l-.1.1H90v.1h-.2l-.1.1h-.2l-.1.1h-.2v.1H89l-.1.1h-.2v.1h-.2l-.1.1h-.2v.1H88l-.1.1h-.2v.1h-.2l-.1.1h-.2v.1H87l-.1.1h-.1l-.2.1V34l-.1-.1v-.2h-.1v-.2h-.1v-.1h.2v-.1h.2l.1-.1h.2v-.1h.2l.1-.1h.1l.2-.1h.1l.1-.1h.1l.2-.1h.1l.1-.1h.1l.2-.1h.1l.1-.1h.1l.2-.1h.1l.1-.1h.2v-.1h.2l.1-.1h.2V32h.2l.1-.1h.2v-.1h.2l.1-.1h.2v-.1h.2l.1-.1h.2l.1-.1h.2v-.1h.2l.1-.1h.2V31h.1zM94.6 36.7v.4l.1.2v.4h-.2v.1l-.1.1h-.1v.1l-.1.1-.2.1v.2h-.2v.1l-.1.1h-.1v.1l-.1.1-.2.1v.1l-.1.1H93v.1l-.1.1h-.1v.1l-.1.1h-.1v.1h-.1v.2h-.2v.1l-.1.1h-.1v.1H92l-.1.2h-.1l-.1.1.2.1h.1l.1.1h.1l.2.1h.1l.1.1h.1l.2.1.1.1h.2v.1h.2l.1.1h.2v.1h.2l.1.1h.2v.1h.2l.1.1h.2v.1h.2l.1.1h.2v.1h.2l.1.1v.2l.1.2V42.8l.1.1v.1H95.4l-.1.1h-.5v.1h-.5l-.1.1H94l-.1.1h-.5v.1h-.5l-.1.1h-.4v.1H92l-.2.1h-.4l-.1.1h-.4l-.1.1h-.4v.1h-.5l-.1.1h-.5v-.5h-.1v-.2l.1-.1h.4l.2-.1h.4l.1-.1H90.7l.2-.1h.4v-.1h.5l.1-.1h.4v-.1h.5l.1-.1h.4l.1-.1H93.7l.2-.1H94.3v-.1H94v-.1h-.2l-.1-.1h-.2l-.1-.1-.2-.1H93l-.1-.1h-.1l-.2-.1h-.1l-.1-.1h-.2v-.1H92l-.1-.1h-.1l-.1-.1h-.2v-.1h-.2l-.1-.1h-.1L91 41l-.1-.1h-.2v-.1h-.2v-.2l.1-.1.2-.1v-.1l.1-.1.1-.1.1-.1h.1v-.2h.2v-.1l.1-.1.2-.1v-.1l.1-.1.1-.1.1-.1.1-.1.1-.1v-.1h.2v-.1l.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1v-.1h.2v-.1h-.6v.1h-.4l-.1.1h-.5v.1h-.5l-.1.1h-.4l-.1.1H90.3l-.2.1h-.4l-.1.1h-.4l-.1.1H88.8l-.2.1H88.2v-.2l-.1-.1V38l-.1-.2h.6l.1-.1H89.1l.2-.1h.4v-.1h.5l.1-.1H90.6l.2-.1h.4v-.1h.5l.1-.1h.5V37h.4l.1-.1h.4l.1-.1h.5v-.1h.4l.1-.1H94.6zM89.4 51V50h.1V49.8h.1v-.1l.1-.1v-.2h.1v-.2h.1V49h.1l.1-.2.1-.1.1-.1.1-.1.1-.1h.1l.1-.1.1-.1h.1l.1-.1.2-.1h.1l.1-.1h.1v-.1h.4l.1-.1h1.8v.1h.2l.1.1h.2v.1h.2v.1h.1l.1.1.2.1.1.1.1.2h.1l.1.1v.1h.1v.1l.2.1v.2l.1.1.1.2.1.1V50h.1v.2l.1.1V52.3H96V52.6h-.1v.1l-.1.1v.1l-.1.1-.1.2-.1.1-.1.2h-.1l-.1.2H95l-.1.1v.1h-.2v.1h-.1v.1h-.2v.1h-.2l-.1.1H94v.1h-.2l-.1.1h-.5l-.1.1H92l-.1-.1h-.2l-.1-.1h-.2v-.1h-.2V54H91l-.1-.1-.2-.1-.1-.2h-.1l-.1-.1v-.1h-.1l-.1-.1-.1-.2-.1-.1-.1-.1v-.1h-.1v-.2l-.1-.1v-.1h-.1V52.1l-.1-.1V51.8l-.1-.1V51zm.8 0v.9l.1.1v.2h.1v.1l.1.1.1.1v.1h.1v.1l.1.1.2.1v.1l.2.1h.1v.1h.2v.1h.1l.1.1H92v.1h.6l.1.1h.8v-.1h.2l.1-.1h.2v-.1h.2v-.1h.1V53h.2V53l.2-.1v-.1l.1-.1v-.1h.1v-.2h.1v-.1h.1V52h.1V51.7l.1-.1V50.2l-.1-.2V50l-.1-.1-.1-.2-.1-.1-.1-.1h-.1v-.2h-.1l-.2-.1-.1-.1-.2-.1-.1-.1h-.1l-.2-.1h-.2l-.1-.1h-1.6l-.1.1-.2.1h-.1l-.1.1-.1.1H91v.1l-.2.1v.1l-.1.1-.2.1v.1l-.1.1v.2h-.1v.2h-.1V50.6l-.1.1v.4zM95 59.3v.5l-.1.1v.1h-.1l-.1.1h-.1l-.2.1h-.1l-.1.1H94l-.2.1h-.1l-.1.1h-.1l-.2.1h-.1l-.1.1H93l-.2.1h-.1l-.1.1h-.1l-.2.1h-.1l-.1.1H92v.1h-.2l-.1.1h-.1l-.1.1h-.2l-.1.1H91l-.1.1h-.1l-.2.1h-.1l-.1.1h-.1l-.2.1H90l-.1.1h-.1l-.2.1h-.1l-.1.1h-.2v.1H89l-.1.1h-.1l.2.1h.2l.1.1h.2l.2.1h.2l.1.1h.2l.2.1h.2l.1.1h.2l.2.1h.2v.1h.4v.1H92.1v.1h.4v.1H92.8v.1H93.2l.1.1H93.5v.1h.2v.5l-.1.1v.2H93l-.2-.1h-.2l-.1-.1h-.2l-.2-.1h-.2l-.1-.1H91.5V64H91.1L91 64H90.8v-.1h-.2l-.1-.1h-.2l-.2-.1h-.2l-.1-.1h-.2l-.2-.1h-.2l-.1-.1H88.8v-.1H88.4l-.1-.1H88V63H87.7l-.1-.1h-.2l-.2-.1h-.1v-.5h.1v-.2h.2V62h.2V62h.2l.1-.1h.2v-.1h.2l.1-.1h.2v-.1h.2l.1-.1h.2l.1-.1h.2v-.1h.2l.1-.1h.2V61h.2l.1-.1.2-.1h.2l.1-.1h.1l.2-.1.1-.1h.2l.2-.1.1-.1h.2v-.1h.2l.1-.1h.2V60h.2l.1-.1h.2v-.1h.2l.1-.1h.2l.1-.1h-.2l-.2-.1h-.2l-.1-.1h-.2l-.2-.1h-.2l-.1-.1h-.2l-.2-.1h-.2l-.1-.1h-.2L91 59h-.1l-.1-.1h-.2l-.2-.1h-.2l-.1-.1h-.2l-.2-.1h-.2l-.1-.1h-.2l-.2-.1h-.2l-.1-.1h-.2V58l.1-.1v-.2l.1-.2h.5l.1.1H89.6l.1.1h.2l.1.1H90.3v.1H90.7l.1.1H91v.1H91.4l.1.1h.2l.2.1h.2l.1.1h.2l.2.1h.2l.1.1h.2l.2.1h.2l.1.1H93.8v.1H94.2l.1.1H94.5v.1H94.9l.1.1h.1zM91.6 69.2v.1h-.1v.2h-.1v.2h-.1v.2l-.1.1H91l-.2-.1h-.1l-.1-.1h-.1v-.1h-.2l-.1-.1h-.1v-.1H90l-.1-.1h-.1v-.1h-.2l-.1-.1h-.1V69h-.2L89 69H89l-.1-.1h-.2v-.1h-.1l-.1-.1h-.2v-.1h-.1l-.1-.1H88l-.2-.1-.1-.1h-.1l-.2-.1-.1-.1h-.1L87 68l-.1-.1h-.1l-.2-.1-.1-.1h-.2v-.1H86v-.1h-.2v-.1h-.2v-.1h-.2l-.1-.1-.2-.1.1-.2.1-.1v-.2h.1v-.2h.4l.1.1h.2v.1h.2v.1h.2v.1h.2v.1h.2l.1.1.2.1h.1l.1.1.2.1h.1l.1.1.2.1h.1l.1.1.2.1h.1l.1.1h.1v.1h.2l.1.1h.1v.1h.2l.1.1h.1v.1h.2l.1.1h.1v.1h.2l.1.1h.1l.1.1h.2v.1h.1l.1.1h.2v.1h.1l.1.1h.1l.2.1zM87.4 76.4l-.1.2h-.1v.1H87v.2H87v.1H86l-.1-.1H85.7l-.2-.1H85.1l-.1-.1h-.4v-.1h-.4v-.1h-.5l-.1-.1h-.4v-.1h-.4l-.1-.1h-.4V76h-.5l-.1-.1h-.4v-.1H81v-.1h-.4l-.1-.1H80.2l-.2-.1h-.2v-.2h.1v-.2h.1V75h.1v-.2h.1l.1-.1h.4l.1.1h.4v.1h.4v.1h.4l.1.1.1-.1V75h.1v-.2h.1l.1-.1.1-.2.1-.1.1-.2.1-.1.1-.1v-.1h.1l.1-.2.1-.1.1-.2.1-.1.1-.2.1-.1.1-.1v-.1h.1l.1-.2.1-.1V72.1H84V72h-.1v-.2h-.1v-.2h-.1v-.1h-.1v-.2h-.1v-.1l-.1-.2-.1-.1V70.6h.1v-.2h.1l.1-.1.1-.2h.1v.1l.1.1v.2h.1v.1l.1.1.1.2.1.1v.1l.1.2.1.1v.1h.1v.2h.1v.1l.1.1v.2h.1v.1l.1.1.1.2.1.1.1.2v.1l.1.1.1.2.1.1v.1h.1v.2l.1.1v.1h.1v.2h.1v.1l.1.1v.2h.1v.1h.1v.2h.1v.1l.1.1.1.2v.1l.1.1.1.2.1.1v.1h.1v.2l.1.1v.1h.1v.2h.1v.1zm-4.5-1h.4v.1h.5l.1.1h.4v.1h.4l.1.1h.4v.1h.4l.2.1H86.2l.1.1h.1V76l-.1-.1-.1-.2-.1-.1-.1-.2v-.1l-.1-.1-.1-.2-.1-.1v-.1h-.1v-.2l-.1-.1v-.1h-.1v-.2h-.1V74H85v-.2l-.1-.1v-.1h-.1v-.2h-.1v-.1l-.1-.1-.1-.2v.1h-.1v.2h-.1v.1h-.1v.2h-.1l-.1.2-.1.1-.1.2h-.1v.1h-.1v.2h-.1v.1h-.1v.1l-.1.1-.1.2-.1.1-.1.2H83v.1zM82 82.6v.1h-.1v.1h-.1l-.1.1-.1.1-.1.1-.1.1h-.1V83h-.1v-.2H81v-.2h-.1l-.1-.2h-.1l-.1-.2h-.1l-.1-.2-.1-.1-.1-.1-.1-.1-.1-.1v-.1h-.1l-.1-.1v-.1h-.1v-.1l-.2-.1V81l-.1-.1h-.1v-.1l-.1-.1-.1-.1-.1-.1-.1-.2h-.1l-.1-.2h-.1V80h-.2v-.2h-.1l-.1-.2H78v-.1H78v-.1l-.1-.1h-.1v-.1l-.1-.1-.2-.1v-.1l-.1.1h-.1v.1l-.2.1v.1h-.2v.1l-.1.1-.1.1h-.1v.1l-.1.1h-.1v.1h-.1l-.1.2H76l-.1.1-.1.2h-.1l-.1.1-.1.1-.2.1v.1l-.2.1v.1H75v.1l-.1.1-.1.1-.2-.1V81l-.1-.1-.1-.1-.1-.1v-.1l.1-.1.1-.1.1-.1h.1v-.1l.1-.1h.1V80h.1l.1-.1v-.1h.1l.1-.1.1-.1.1-.1.1-.1h.1v-.2h.2v-.1h.2V79h.2v-.2h.2v-.1h.1v-.1l.1-.1.2-.1v-.1l.2-.1.1-.1.1-.1.1-.1.1-.1h.2v.1h.1l.1.2h.1v.2h.2v.2h.1v.1h.2v.2h.1v.1h.1l.1.2.1.1.2.1v.1l.1.1v.1h.2v.2h.1l.1.1v.1h.1v.1l.1.1h.1v.1l.1.1.1.1.1.1.1.2h.1l.1.2h.1v.2h.2v.2h.1l.1.2h.1l.1.2h.1l.1.2.1.1.2.1v.1l.1.1v.1h.2v.1z" />
  </RotatingSVG>
);

export default ClickForNext;
