import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { hover } from '../styles/helpers';
import UnstyledButton from './UnstyledButton';
import InlineLink from './InlineLink';

const StyledButton = styled(InlineLink)`
  display: inline-block;
  padding: ${props => props.$large ? '0 90px' : '0 30px'};
  ${props => props.$hasmargin && 'margin-top: 24px'};
  color: var(--${props => props.$isdark ? 'brand-white' : 'brand-black'});
  background-color: var(--${props => props.bgcolor ? props.bgcolor : 'brand-black'});
  font-size: ${rem(18)};
  font-family: var(--secondary-font);
  line-height: 2.5rem;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

  ${props => hover(`
    color: var(--brand-white);
    background-color: var(--${props.$isdark ? 'brand-black' : 'gold'});
  `)}
`;

const Button = ({
  children,
  href,
  isdark,
  bgcolor,
  large,
  hasmargin,
  ...props
}) => (
  href
    ?
      <StyledButton
        href={href}
        $isdark={isdark}
        $large={large}
        bgcolor={bgcolor}
        $hasmargin={hasmargin}
        {...props}
      >
        {children}
      </StyledButton>
    :
      <StyledButton
        as={UnstyledButton}
        $isdark={isdark}
        $large={large}
        bgcolor={bgcolor}
        $hasmargin={hasmargin}
        {...props}
      >
        {children}
      </StyledButton>
);

Button.propTypes = {
  children: PropTypes.node,
  textcolor: PropTypes.bool,
  bgcolor: PropTypes.string,
  hasmargin: PropTypes.bool,
  large: PropTypes.bool,
  href: PropTypes.string,
};

export default Button;
