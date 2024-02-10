import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../styles/helpers';
import ImageWithText from '../ImageWithText';
import { linkResolver } from '../../util/prismicHelpers';
import Section from '../Section';
import Container from '../Container';
import ServicesContainer from './ServicesContainer';
import { Ninety } from '../Jumbo';
import Button from '../Button';
import TextBlock from '../TextBlock';

const StyledSection = styled(Section)`
  overflow: hidden;

  ${screen.below(bp.tablet, `
    padding-top: 150px;
  `)}
`;

const Wrapper = styled.div`
  position: relative;
  margin: auto;

  ${screen.below(bp.tablet, `
    max-width: 60ch;
    text-align: center;

    span {
      max-width: 500px;
      margin: auto;
    }
  `)}
`;

const Graphic = styled.img`
  position: absolute;
  top: -150px;
  right: -68px;
  pointer-events: none;
  transform: rotate(-3.8deg);

  ${screen.below(bp.desktopLg, `
    top: -120px;
    right: -120px;
  `)}

  ${screen.below(bp.desktop, `
    top: -75px;
    right: -160px;
  `)}

  ${screen.between(bp.tablet, bp.desktopSm, `
    right: -68px;
  `)}

  ${screen.below(bp.tablet, `
    top: -140px;
    right: unset;
    left: 50%;
    transform: translateX(-50%);
  `)}
`;

const TextWithImage = ({
  title,
  description,
  linkUrl,
  linkText,
  image,
  graphic,
}) => (
  <StyledSection hasPadding bgColor="brand-white">
    <Container>
      <ServicesContainer>
        <ImageWithText
          imageLeft
          image={image}
        >
          <Wrapper>

            {title ?
              <Ninety>{title}</Ninety>
              :
              null
            }

            {description ?
              <TextBlock content={description} />
              :
              null
            }

            {linkUrl ?
              <Button
                large
                bgcolor="gold"
                isdark
                hasmargin
                href={linkResolver(linkUrl)}
              >
                {linkText}
              </Button>
              :
              null
            }

            {graphic ?
              <Graphic
                src={graphic?.url}
                alt={graphic?.alt}
              />
              :
              null
            }

          </Wrapper>
        </ImageWithText>
      </ServicesContainer>
    </Container>
  </StyledSection>
);

TextWithImage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  linkUrl: PropTypes.object,
  linkText: PropTypes.string,
  image: PropTypes.object,
  graphic: PropTypes.object,
};

export default TextWithImage;
