import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { bp } from 'styles/helpers';
import screen from 'superior-mq';
import Container from './Container';
import { OneSixty } from './Jumbo';
import Section from './Section';

const toTheLeft = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
`;

const Wrapper = styled(Section)`
  --title-width: 400px;
  position: relative;
  padding: ${props => props.title ? '372px 0 308px' : '380px 0'};
  color: var(--brand-white);
  overflow: hidden;

  ${props => screen.below(bp.desktopSm, `
    --title-width: 280px;
    padding: ${props.title ? '300px 0 230px' : '320px 0'};
  `)}

  ${props => screen.below(bp.portrait, `
    --title-width: 170px;
    padding: ${props.title ? '220px 0 144px' : '220px 0'};
  `)}
`;

const LogosContainer = styled.div`
  position: absolute;
  top: ${props => props.title ? '180px' : '90px'};
  left: 0;

  ${screen.below(bp.portrait, `
    top: ${props => props.title ? '136px' : '0'};
  `)}
`;

const LogosRow = styled.div`
  font-size: 0;
  display: flex;
  flex-wrap: no-wrap;
  margin: 10px 0;
  animation: 32s ${toTheLeft} infinite linear;

  &:nth-of-type(even) {
    animation-direction: reverse;
  }

  img { min-width: calc(var(--title-width) * 6.1); }

`;

const Title = styled(OneSixty)`
  position: relative;
  z-index: 1;
  line-height: 1;
  width: var(--title-width);
  max-width: var(--title-width);

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: var(--brand-black);
    box-shadow: 0 0 10px 10px var(--brand-black);
    content: "";
  }

  ${screen.below(bp.mobile, `
    max-width: 200px;
  `)}
`;

const BlackLogoGrid = ({
  title,
  logoRowOne,
  logoRowTwo,
  logoRowThree,
  logoRowFour,
}) => (
  <Wrapper bgColor="brand-black" title={title}>

    {title ?
      <Container>
        <Title as="h1">
          {title}
        </Title>
      </Container>
      :
      null
    }

    <LogosContainer title={title}>

      {logoRowOne ?
        <LogosRow>
          <img src={logoRowOne.url} alt={logoRowOne.alt} />
          <img src={logoRowOne.url} alt="" aria-hidden="true" />
        </LogosRow>
        :
        null
      }

      {logoRowTwo ?
        <LogosRow>
          <img src={logoRowTwo.url} alt={logoRowTwo.alt} />
          <img src={logoRowTwo.url} alt="" aria-hidden="true" />
        </LogosRow>
        :
        null
      }

      {logoRowThree ?
        <LogosRow>
          <img src={logoRowThree.url} alt={logoRowThree.alt} />
          <img src={logoRowThree.url} alt="" aria-hidden="true" />
        </LogosRow>
        :
        null
      }

      {logoRowFour ?
        <LogosRow>
          <img src={logoRowFour.url} alt={logoRowFour.alt} />
          <img src={logoRowFour.url} alt="" aria-hidden="true" />
        </LogosRow>
        :
        null
      }

    </LogosContainer>
  </Wrapper>
);

BlackLogoGrid.propTypes = {
  title: PropTypes.string,
  logoRowOne: PropTypes.object,
  logoRowTwo: PropTypes.object,
  logoRowThree: PropTypes.object,
  logoRowFour: PropTypes.object,
};

export default BlackLogoGrid;
