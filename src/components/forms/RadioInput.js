/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import styled from 'styled-components';

const RadioWrap = styled.div`
  position: relative;
  text-align: left;
`;

const StyledRadio = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  + label {
    position: relative;
    cursor: pointer;
    display: block;
    color: inherit;
    padding: 28px 24px 28px 82px;
    transition: color .3s ease;
    line-height: 1.2;
    z-index: 1;
  }

  + label div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 4px solid var(--brand-black);
    transition: border .3s ease;
  }

  + label::before {
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid var(--brand-black);
    min-width: 16px;
  }

  + label::after {
    top: 50%;
    width: 8px;
    height: 8px;
    transform: translateY(-50%);
    border: 4px solid var(--gold);
    transition: all .3s ease;
    z-index: 1;
  }

  + label::before,
  + label::after {
    content: "";
    position: absolute;
    left: 20px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }

  ${'' /* &:focus + label::before {
    box-shadow: 0 0 6px var(--brand-black);
  } */}

  &:checked + label {
    color: inherit;
  }

  &:checked + label div {
    border: 4px solid var(--gold);
  }

  &:not(:checked) + label::after {
    opacity: 0;
  }

  &:checked + label::after {
    opacity: 1;
  }
`;

const RadioInput = React.forwardRef(({
  name,
  id,
  value,
  optionValue,
  label,
  ...props
}, ref) => (
  <RadioWrap ref={ref}>
    <StyledRadio
      name={name}
      id={id}
      type="radio"
      value={optionValue}
      checked={optionValue === value}
      {...props}
    />
    <label htmlFor={id}>
      {label}
      <div />
    </label>
  </RadioWrap>
));

RadioInput.displayName = "RadioInput";

export default RadioInput;
