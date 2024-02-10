import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../../styles/helpers';
import ImageWithText from '../../ImageWithText';
import Section from '../../Section';
import Container from '../../Container';
import ServicesContainer from '../ServicesContainer';
import OffsetImageGrid from '../../OffsetImageGrid';
import TextBlock from '../../TextBlock';

const StyledSection = styled(Section)`
  padding-bottom: 0;
`;

const StyledImageWithText = styled(ImageWithText)`
  padding: var(--spacing) 0;

  ${screen.below(bp.laptopSm, `
    &:first-of-type {
      padding-bottom: 30px;
    }
  `)}
`;

const Intro = ({
  introTitle,
  introDescription,
  introImage,
  smallImage,
  bigImage,
}) => (
  <StyledSection bgColor="brand-white">
    <Container>
      <ServicesContainer>
        <StyledImageWithText
          imageLeft
          image={introImage}
        >

          {introTitle ?
            <h2>{introTitle}</h2>
            :
            null
          }

          {introDescription ?
            <TextBlock content={introDescription} />
            :
            null
          }

        </StyledImageWithText>
        <OffsetImageGrid
          smallImage={smallImage}
          bigImage={bigImage}
        />
      </ServicesContainer>
    </Container>
  </StyledSection>
);

Intro.propTypes = {
  introTitle: PropTypes.string,
  introDescription: PropTypes.array,
  introImage: PropTypes.object,
  smallImage: PropTypes.object,
  bigImage: PropTypes.object,
};

export default Intro;
