import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from '../Section';
import Container from '../Container';
import ServicesList from '../ServicesList';

const StyledSection = styled(Section)`
  position: relative;
  z-index: 1;
  color: var(--white);

  h2 {
    color: var(--brand-white);
    position: relative;
    z-index: 2;
  }
`;

const Services = ({
  title,
  services = [],
}) => (
  <StyledSection hasPadding bgColor="brand-black">
    <Container>

      {title ?
        <h2>{title}</h2>
        :
        null
      }

      <ServicesList
        services={services}
      />

    </Container>
  </StyledSection>
);

Services.propTypes = {
  title: PropTypes.string,
  services: PropTypes.array,
};

export default Services;
