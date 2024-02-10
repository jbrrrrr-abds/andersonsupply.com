import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { rem } from 'polished';
import { linkResolver } from '../../util/prismicHelpers';
import { bp } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';
import Button from '../Button';
import { OneSixty } from '../Jumbo';
import LazyImg from '../LazyImg';
import TextBlock from '../TextBlock';

const StyledSection = styled(Section)`
  text-align: center;

  img {
    display: block;
    margin: -50px auto auto;

    ${screen.below(bp.laptopSm, `
      margin-top: -25px;
    `)}
  }

  span,
  small {
    display: block;
  }
`;

const BigTextWrap = styled.div`
  max-width: 1118px;
  margin: auto;

  ${screen.below(bp.desktop, `
    max-width: 840px;
  `)}

  ${screen.below(bp.portrait, `
    max-width: 500px;
  `)}
`;

const Description = styled.div`
  max-width: 520px;
  margin: 60px auto auto;
`;

const ImageWrap = styled.figure`
  position: relative;
  text-align: left;
`;

const ImageCaption = styled.figcaption`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);

  span {
    line-height: 1;
  }

  small {
    font-size: ${rem(12)};
  }

  ${screen.below(bp.mobile, `
    left: calc(50% + 25px);
    bottom: -25px;
  `)}
`;

const TheDuke = ({
  title,
  image,
  caption,
  subCaption,
  description,
  linkUrl,
  linkText,
}) => (
  <StyledSection hasPadding bgColor="brand-white">
    <Container>

      {title ?
        <BigTextWrap>
          <OneSixty>{title}</OneSixty>
        </BigTextWrap>
        :
        null
      }

      <ImageWrap>

        {image ?
          <LazyImg
            src={`${image?.url}&w=553&h=372&fit=crop&q=85&f=center`}
            alt={image?.alt}
          />
          :
          null
        }

        <ImageCaption>

          {caption ?
            <span><strong>{caption}</strong></span>
            :
            null
          }

          {subCaption ?
            <small>{subCaption}</small>
            :
            null
          }

        </ImageCaption>
      </ImageWrap>

      {description ?
        <Description>
          <TextBlock content={description} />
        </Description>
        :
        null
      }

      {linkUrl ?
        <Button
          hasmargin
          isdark
          large
          bgcolor="gold"
          href={linkResolver(linkUrl)}
        >
          {linkText}
        </Button>
        :
        null
      }

    </Container>
  </StyledSection>
);

TheDuke.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.array,
  caption: PropTypes.string,
  subCaption: PropTypes.string,
  linkUrl: PropTypes.object,
  linkText: PropTypes.string,
};

export default TheDuke;
