/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import screen from 'superior-mq';
import styled from 'styled-components';
import { rem } from 'polished';
import { bp, hover } from 'styles/helpers';
import { ErrorMessage } from '@hookform/error-message';
import Label from './Label';
import HelperText from './HelperText';

const InputWrap = styled.div`
  position: relative;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  grid-column: span ${props => props.$span || 1};

  ${screen.below(
    bp.mobile,
    `
    grid-column: span 2;
  `,
  )}

  ${hover(`
    span {
      &::before {
        background-color: var(--gold);
      }
    }
  `)}
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 0;
  height: ${props => props.type === 'file' ? '70px' : '48px'};
  font: inherit;
  line-height: 1;
  color: #000;
  border: 0;
  border-radius: 0;
  border-bottom: 1px solid var(--gold);
  background-color: transparent;
  appearance: none;
  ${props => props.type === 'file' && 'cursor: pointer'};

  ${props =>
    props.$small &&
    `
    padding: 7px 8px;
    height: 36px;
  `}

  ${props =>
    props.errors &&
    props.errors[props.name] &&
    `
    border-color: var(--gold);
  `};

  &[type="search"]::-webkit-search-decoration,
  &[type="search"]::-webkit-search-cancel-button,
  &[type="search"]::-webkit-search-results-button,
  &[type="search"]::-webkit-search-results-decoration {
    display: none;
  }

  &:-webkit-autofill,
  &:-internal-autofill-selected {
    -webkit-text-fill-color: var(--black) !important;
  }

  &:invalid,
  &:required {
    box-shadow: none;
  }

  &::placeholder {
    opacity: 1;
    color: var(--brand-black);
    font-size: ${rem(12)};
  }

  &:focus {
    border-color: var(--gold);
  }
`;

const FileSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  padding: 20px 0;
  font-size: ${rem(17)};
  font-weight: 700;
  background-color: var(--white);
  pointer-events: none;

  &::before {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 6;
    width: 125px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brand-white);
    background-color: var(--brand-black);
    font-family: var(--secondary-font);
    text-transform: uppercase;
    transition: background-color 300ms ease-in-out;
    transform: translateY(-50%);
    content: "Upload";
  }

  ${screen.below(bp.mobile, `
    font-size: ${rem(12)};
  `)}
`;

const Input = React.forwardRef(
  (
    {
      type,
      name,
      value,
      label,
      errors = {},
      hideLabel,
      required,
      placeholder,
      infoText,
      disabled,
      className,
      small,
      span,
      ...rest
    },
    ref,
  ) => {
    const id = `${type}-${name}`;
    const commonProps = {
      disabled,
      type,
      name,
      errors,
      value,
      id,
      placeholder,
      required,
      ...rest,
    };

    return (
      <InputWrap className={className} $span={span}>
        {label && (
          <Label htmlFor={id} hideLabel>
            {label}
            {required ? '*' : null}
          </Label>
        )}

        {type === 'file' ?
          <FileSpan>{label}</FileSpan>
          :
          null
        }

        <StyledInput {...commonProps} $small={small} ref={ref} />

        {(infoText || errors[name]) && (
          <HelperText>
            {!!infoText && !errors[name] && <p>{infoText}</p>}
            {errors[name] && (
              <HelperText.Error>
                <ErrorMessage errors={errors} name={name} />
              </HelperText.Error>
            )}
          </HelperText>
        )}
      </InputWrap>
    );
  },
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errors: PropTypes.any,
  hideLabel: PropTypes.bool,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  infoText: PropTypes.string,
  className: PropTypes.string,
  small: PropTypes.bool,
  span: PropTypes.number,
};

export default Input;
