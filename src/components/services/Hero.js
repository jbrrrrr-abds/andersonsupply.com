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
  --left-spacing: 144px;
  padding: 290px 0 var(--spacing);
  color: var(--brand-white);
  position: relative;
  z-index: 3;

  ${screen.below(bp.desktopLg, `
    --left-spacing: 108px;
  `)}

  ${screen.below(bp.desktop, `
    --left-spacing: 72px;
  `)}

  ${screen.below(bp.desktopSm, `
    --left-spacing: 0;
  `)}

  ${screen.below(bp.laptopSm, `
    padding: 170px 0 0;
  `)}
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 524px;
  margin-left: var(--left-spacing);
`;

const StyledServicesList = styled(ServicesList)`
  margin: 136px 0 0 var(--left-spacing);

  ${screen.below(bp.laptopSm, `
    margin-top: 68px;
    padding: 60px var(--container-gutter);
  `)}
`;

const ListWrap = styled.div`
  ${screen.above(bp.laptopSm, `
    padding-left: var(--container-gutter);
  `)}

  ${screen.below(bp.laptopSm, `
    position: relative;
  `)}
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
    <ListWrap>
      <StyledServicesList
        isServicesPage
        services={services}
      />
    </ListWrap>
  </StyledSection>
);

Hero.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  services: PropTypes.array,
};

export default Hero;
