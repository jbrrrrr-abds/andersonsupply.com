import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'components/Container';
import Section from './Section';
import screen from 'superior-mq';
import { bp } from '../styles/helpers';
import { hover } from '../styles/helpers';


const BrandGrid = styled.ul `
  display: grid;
  gap: calc(var(--spacing));
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  padding: calc(var(--spacing) /2);
  justify-items: center;
  align-items: center;
  margin-top: calc(var(--spacing) * -0.5);

  @media screen and (width <= 1100px) {
    grid-template-columns: repeat(4, 1fr)
  }

  @media screen and (width <= 800px) {
    grid-template-columns: repeat(2, 1fr)
  }
`;

const BrandBlock = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
  img {
    width: 100%;
    max-width: 200px;
    max-height: 100%;
    height: 100%;
  }
`;

const PartnerBrands = ({
  brands = []
}) => (
  <Section hasPadding bgColor="brand-white">
    {brands.length > 0 ?
      <BrandGrid
        brands={brands}
      >
        {brands.map((brand, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <BrandBlock key={index}>
            <a href={brand?.brand_site_url?.url} title={brand?.brand_name} target={brand?.brand_site_url?.target}>
              <img
                src={brand?.brand_logo?.url}
                alt={brand?.brand_name}
                width={brand?.brand_logo?.width}
                height={brand?.brand_logo?.height}
              />
            </a>
          </BrandBlock>
        ))}
      </BrandGrid>
      :
      null
    }
  </Section>
);

PartnerBrands.propTypes = {
  page_title: PropTypes.string,
  intro: PropTypes.string,
  brands: PropTypes.array
};

export default PartnerBrands;
