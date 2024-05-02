import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { rem } from 'polished';
import { bp } from 'styles/helpers';
import VisuallyHidden from 'components/VisuallyHidden';

const CheckWrap = styled.div`
  position: relative;
  height: 16px;
  vertical-align: top;
  text-align: left;

  ${screen.below(
    bp.portrait,
    `
    display: block;

    &:not(:last-of-type) {
      margin-bottom: 20px;
    }
  `,
  )}

  ${screen.below(
    bp.mobileRealSm,
    `
    text-align: center;
  `,
  )};

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`;

const StyledCheck = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  + label {
    position: relative;
    cursor: pointer;
    display: block;
    color: ${props => props.isDark ? 'var(--white)' : 'var(--brand-black)'};
    padding-left: 80px;
    font-size: ${rem(15)};
    text-transform: uppercase;
    z-index: 1;

    ::before,
    ::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    ::before {
      background-color: var(--brand-white);
      border: 4px solid var(--brand-black);
      width: 65px;
      height: 65px;
      transition: background-color .3s ease, border .3s ease;
    }

    ::after {
      top: 0;
      left: 23px;
      width: 16px;
      height: 30px;
      background: url("/images/svg/check.svg");
      background-position: center;
      background-repeat: no-repeat;
      transition: opacity .3s ease;
      z-index: 1;
      transform: scale(0);
      opacity: 0;
    }

    div {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 65px;
      border: 4px solid var(--brand-black);
      transition: border .3s ease;
      transform: translateY(-50%);
    }
  }

  &:focus {
    + label::before {
      border: 4px solid var(--gold);
    }

    + label div {
      border: 4px solid var(--gold);
    }
  }

  &:checked + label {
    ::before {
      background-color: var(--gold);
      border: 4px solid var(--gold);
    }

    ::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  &:checked + label div {
    border: 4px solid var(--gold);
  }
`;

const LabelText = ({ hideLabel, children, ...props }) =>
  hideLabel ? (
    <VisuallyHidden as="span" {...props}>
      {children}
    </VisuallyHidden>
  ) : (
    <span {...props}>{children}</span>
  );

const CheckInput = React.forwardRef(
  (
    {
      name,
      onChange,
      onBlur,
      label,
      id,
      value,
      checked,
      className,
      hideLabel,
      isDark,
      ...props
    },
    ref,
  ) => (
    <CheckWrap className={className}>
      <StyledCheck
        name={name}
        id={id}
        value={value}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        isDark={isDark}
        ref={ref}
        {...props}
      />
      <label htmlFor={id}>
        <LabelText hideLabel={hideLabel}>{label}</LabelText>

        {!isDark ?
          <div />
          :
          null
        }

      </label>
    </CheckWrap>
  ),
);

CheckInput.displayName = "CheckInput";

CheckInput.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  className: PropTypes.string,
};

export default CheckInput;
