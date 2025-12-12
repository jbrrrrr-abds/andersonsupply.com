import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';
import ServicesList from '../ServicesList';
import TextBlock from '../TextBlock';

const StyledSection = styled(Section)`
  position: relative;
  z-index: 1;
  padding: 320px 0 100px;
  color: var(--brand-white);

  h1 {
    margin-bottom: 36px;
    text-align: center;
    font-size: 4.5rem;
  }

  ${screen.below(bp.desktopSm, `
    padding-top: 200px;
  `)}

  ${screen.below(bp.laptopSm, `
    padding-bottom: 3vw;
  `)}

  ${screen.below(bp.portrait, `
    padding-top: 22vw;

    h1 {
      font-size: 3rem;
    }
  `)}
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Hero = ({
  title,
  description,
  services = [],
}) => (
  <StyledSection bgColor="brand-black">
    <Container>
      <Content>

        {title ?
          <h1>{title}</h1>
          :
          null
        }

        {description ?
          <TextBlock content={description} />
          :
          null
        }

      </Content>
    </Container>
  </StyledSection>
);

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  services: PropTypes.array,
};

export default Hero;
