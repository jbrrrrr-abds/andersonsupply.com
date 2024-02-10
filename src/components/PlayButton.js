import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { hover } from '../styles/helpers';
import UnstyledButton from './UnstyledButton';

const StyledPlayButton = styled(UnstyledButton)`
  position: relative;
  min-width: 68px;
  min-height: 68px;
  color: var(--brand-white);
  background-color: var(--gold);
  border-radius: 50%;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 14px;
    fill: currentColor;
    transform: translate(-50%, -50%);
  }

  ${hover(`
    color: var(--brand-black);
    background-color: var(--brand-white);
  `)}
`;

const PlayButton = ({
  label,
  className,
  playing,
  ...props
}) => (
  <StyledPlayButton
    aria-label={label}
    className={className}
    aria-pressed={playing}
    {...props}
  >

    {playing ?
      <svg
        width="13"
        height="18"
        viewBox="0 0 13 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h4v18H0V0zm9 0h4v18H9V0z" fill="currentColor" />
      </svg>
      :
      <svg
        width="12"
        height="14"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="10 0 60 30 60 30 10 60" />
        <polygon points="10 20 50 30 50 30 10 40" />
      </svg>
    }
  </StyledPlayButton>
);

PlayButton.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  playing: PropTypes.bool,
};

export default PlayButton;
