import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { hover } from '../styles/helpers';
import { linkResolver } from '../util/prismicHelpers';
import InlineLink from './InlineLink';

const StyledLink = styled(InlineLink)`
  color: var(--gold);
  text-decoration: none;
  position: relative;
  transition: color 300ms ease;

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: var(--brand-black);
    position: absolute;
    left: 0;
    bottom: -1px;
    transition: color 300ms ease;
  }

  ${hover(`
    color: var(--brand-black);

    &::after {
      color: var(--gold);
    }
  `)}
`;

const RichTextLink = (type, element, content) => (
  <StyledLink key={`${element.data.link_type}${element.start}`} href={linkResolver(element.data)}>
    {content}
  </StyledLink>
);

const TextBlock = ({ content, ...rest }) => {
  if (!content) return null;

  return (
    <RichText
      render={content}
      serializeHyperlink={RichTextLink}
      {...rest}
    />
  );
};

TextBlock.propTypes = {
  content: PropTypes.array,
};

export default TextBlock;
