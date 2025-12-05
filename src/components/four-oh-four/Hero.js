import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import { rem } from 'polished';
import { bp } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';
import VisuallyHidden from '../VisuallyHidden';
import { Forty } from '../Jumbo';
import UnstyledList from '../UnstyledList';
import Grid from '../Grid';
import Button from '../Button';
import RatioImg from '../RatioImg';

const StyledSection = styled(Section)`
  padding: 314px 0 var(--spacing);
  text-align: center;

  ${screen.below(bp.desktop, `
    padding-top: 235px;
  `)}

  ${screen.below(bp.laptopSm, `
    padding-top: 157px;
  `)}
`;

const Graphic = styled.div`
  position: relative;
  max-width: 580px;
  margin: auto auto 40px;

  ${screen.below(bp.desktop, `
    max-width: 435px;
    margin-bottom: 30px;
  `)}

  ${screen.below(bp.laptopSm, `
    max-width: 290px;
    margin-bottom: 20px;
  `)}
`;

const StyledForty = styled(Forty)`
  ${screen.below(bp.portrait, `
    max-width: 480px;
    margin: auto;
    line-height: 1.2;
  `)}
`;

const GridTitle = styled.span`
  display: block;
  margin-top: 15px;
  font-size: ${rem(15)};
  font-weight: 700;
  text-transform: uppercase;
`;

const StyledGrid = styled(Grid)`
  position: relative;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 170px;
  max-width: 1000px;
  margin: 26px auto 34px;

  span {
    display: block;
    color: var(--gold);
    font-size: ${rem(18)};
    font-family: var(--secondary-font);
  }

  p {
    opacity: .6;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &::before {
    ${screen.above(bp.tablet, `
      position: absolute;
      top: 0;
      left: 50%;
      width: 1px;
      height: 100%;
      background-color: var(--brand-black);
      transform: translateX(-50%);
      content: "";
    `)}
  }

  ${screen.below(bp.tablet, `
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
    max-width: 450px;
  `)}

  ${screen.below(bp.mobile, `
    grid-row-gap: 20px;
    margin-bottom: 0;
  `)}
`;

const Hero = () => (
  <StyledSection hasPadding bgColor="brand-white">
    <Container>
      <VisuallyHidden as="h1">404</VisuallyHidden>
      <Graphic>
        <RatioImg
          src="/images/404-duke.png"
          alt=""
          width={580}
          height={415}
        />
      </Graphic>
      <StyledForty>We couldn&apos;t find the page you were looking for</StyledForty>
      <GridTitle>This is Either Because:</GridTitle>
      <StyledGrid as={UnstyledList}>
        <li>
          <span>01</span>
          <p>There is an error in the URL entered into your web browser.
          Please check the URL and try again.</p>
        </li>
        <li>
          <span>02</span>
          <p>The page you are looking for has been moved or deleted.</p>
        </li>
      </StyledGrid>
      <Button href="/" isdark bgcolor="gold" large hasmargin>Back to Home</Button>
    </Container>
  </StyledSection>
);

export default Hero;
