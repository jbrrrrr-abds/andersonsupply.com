import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import { rem } from 'polished';
import { bp } from 'styles/helpers';
import Container from '../Container';
import { Ninety } from '../Jumbo';
import AbsoluteImage from '../AbsoluteImage';

const Section = styled.section`
  position: relative;
  padding: 244px 0 46px;
  color: var(--brand-white);
  text-align: center;

  img {
    z-index: -1;
  }

  ${screen.below(bp.laptopSm, `
    padding-top: 184px;
  `)}

  ${screen.below(bp.mobile, `
    padding-top: 122px;
  `)}
`;

const Heading = styled(Ninety)`
  ${screen.below(bp.mobile, `
    font-size: ${rem(40)};
  `)}
`;

const Subheading = styled.span`
  display: block;
  margin: 32px 0 18px;
  font-size: ${rem(18)};
  font-family: var(--secondary-font);
  text-transform: uppercase;
`;

const Arrow = styled.svg`
  width: 16px;
  height: 36px;
`;

const Hero = ({
  title,
  image,
}) => (
  <Section>
    <Container>

      {title ?
        <Heading as="h1">{title}</Heading>
        :
        null
      }

      <Subheading>Tell Us More</Subheading>
    </Container>
    <AbsoluteImage
      src={`${image?.url}&w=1800&h=490&fit=crop&q=85&f=center`}
      alt={image?.alt || ''}
    />
    <Arrow viewBox="0 0 16 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 27.5l-1.41-1.41L9 31.67V0H7v31.67l-5.58-5.59L0 27.5l8 8 8-8z" fill="#F0EEE3" />
    </Arrow>
  </Section>
);

export default Hero;
