import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../../styles/helpers';
import Container from '../../Container';
import { Ninety } from '../../Jumbo';

const StyledHero = styled.div`
  position: relative;
  padding: 380px 0 284px;
  color: var(--brand-white);
  background: linear-gradient(180deg, rgb(0 0 0 / 47%) 11.9%, rgb(0 0 0 / 0%));
  text-align: center;

  ${screen.below(bp.desktop, `
    padding: 285px 0 214px;
  `)}

  ${screen.below(bp.portrait, `
    padding: 190px 0 142px;
  `)}
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Hero = ({
  headline,
  image,
}) => (
  <StyledHero bgColor="brand-black">

    {image ?
      <HeroImage
        src={`${image?.url}&w=1800&h=740&fit=crop&q=85&f=center`}
        alt={image?.alt}
      />
      :
      null
    }

    {headline ?
      <Container>
        <Ninety as="h1">{headline}</Ninety>
      </Container>
      :
      null
    }

  </StyledHero>
);

Hero.propTypes = {
  headline: PropTypes.string,
  image: PropTypes.object,
};

export default Hero;
