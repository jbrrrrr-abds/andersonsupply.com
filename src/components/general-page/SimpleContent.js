import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';

const StyledSection = styled(Section)`
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 200px;

  a {
    text-decoration: underline;
    color: var(--brand-black);
  }

  .block-img img {
    float: right;
    max-width: 300px;
    clear: both;
    padding-left: 60px;
  }

  h3, h4, h5, h6 {
    font-size: 1.5rem;
    margin-top: 60px;
  }

  ${screen.below(bp.desktopSm, `
  `)}

  ${screen.below(bp.laptopSm, `
  `)}

  ${screen.below(bp.portrait, `
    .block-img {
      margin: 0 auto;
      text-align: center;
    }

    .block-img img {
      float: none;
      margin-bottom: 30px;
      padding-left: 0;
      max-width: 200px;
    }
  `)}
`;

const ImageClear = styled(Section)`
  clear: both;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const SimpleContent = ({
  content
}) => (
  <StyledSection>
    <Container>
      <Content dangerouslySetInnerHTML={{__html: content}}>
      </Content>
      <ImageClear>
      </ImageClear>
    </Container>
  </StyledSection>
);

SimpleContent.propTypes = {
  content: PropTypes.string,
};

export default SimpleContent;
