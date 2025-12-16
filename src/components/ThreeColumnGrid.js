import React,  { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { linkResolver } from '../util/prismicHelpers';
import { bp } from '../styles/helpers';
import Section from './Section';
import Container from './Container';
import Grid from './Grid';
import LazyImg from './LazyImg';
import Button from './Button';
import TextBlock from './TextBlock';
import { hover } from '../styles/helpers';
import UnstyledList from './UnstyledList';
import UnstyledButton from './UnstyledButton';

export const useCarousel = (options = {}) => {
  const [flickityIndex, updateFlickityIndex] = useState(0);
  const flktyInstance = useRef();

  const slider = useCallback((node) => {
    if (node !== null) {
      const Flickity = require('flickity');

      const flkty = new Flickity(node, {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        dragThreshold: 3,
        cellAlign: "left",
        groupCells: true,
        ...options,
      });

      flktyInstance.current = flkty;

      flkty.on('dragStart', () => {
        document.ontouchmove = (e) => {
          e.preventDefault();
        };
      });

      flkty.on('dragEnd', () => {
        document.ontouchmove = () => true;
      });
    }
  }, [flktyInstance, options]);

  const setFlickityIndex = (i) => {
    if (flktyInstance && flktyInstance.current) {
      flktyInstance.current.select(i, true);
    }
  };

  useEffect(() => {
    if (flktyInstance && flktyInstance.current) {
      flktyInstance.current.on('change', (index) => {
        updateFlickityIndex(index);
      });
    }
  }, [flktyInstance]);

  useEffect(() => () => {
    if (flktyInstance.current) {
      flktyInstance.current.destroy();
    }
  }, [flktyInstance]);

  return {
    flickity: slider,
    flickityIndex,
    setFlickityIndex,
  };
};

  const StyledSection = styled(Section)`
    padding: var(--spacing) 0 46px;

    h3 {
      font-size: 1.6rem;
      padding: 1rem 0;
    }
  `

  const TightContainer = styled(Container)`
      ${screen.below(bp.laptopSm, `
      padding-left: 30px;
      padding-right: 30px;
      max-width: 92vw;
    `)}
  `

  const CardList = styled.dl`
    width: 100%;
    //grid-template-columns: repeat(3, minmax(0, 1fr));
    //gap: 2.5rem;
    //display: grid;
    margin-bottom: 6rem;
    overflow: hidden;
    outline: none;
    width: 100%;

    .flickity-viewport {
      position: relative;
    }

    .flickity-slider {
      width: 100%;
      height: 100%;
    }
  `;

  const Card = styled.div`
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    padding: 1rem;
    width: calc((100% - 60px)/3);
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }

    opacity: 0.4;
    transition: opacity 300ms ease-in-out;

    &.is-selected {
      opacity: 1;
    }

    ${screen.below(bp.laptopSm, `
      width: calc((100% - 60px)/1.8);
    `)}

    ${screen.below(bp.portrait, `
      width: calc((100% - 60px)/1.2);
    `)}

    dt {
      text-transform: uppercase;
      font-weight: bold;
      margin-bottom: 6px;
      padding-bottom: 6px;
      font-size: 0.9rem;
      border-bottom: 1px dotted rgba(0,0,0,0.2);
    }

    dd {
      margin: 0;
      padding: 0;

      ul {
        font-size: 0.9rem;
      }
    }
  `;


const ThreeColumnGrid = ({
  headline,
  description,
  image,
  link,
  linkText,
}) => {
  const { flickity, setFlickityIndex, flickityIndex } = useCarousel();
    return (
      <StyledSection>
        <TightContainer>
          <h3>Domestic Cut &amp; Sew Production</h3>
          <CardList ref={flickity}>
            <Card>
              <div>
                <dt>Cut &amp; Sew</dt>
                <dd>
                  <ul>
                    <li>300 unit minimum/style</li>
                    <li>4 weeks for development</li>
                    <li>8 weeks for production</li>
                  </ul>
                </dd>
              </div>
            </Card>
          </CardList>
          <h3>Overseas Production</h3>
          <CardList ref={flickity}>
            <Card>
              <div>
                <dt>Flannels &amp; Shirts</dt>
                <dd>
                  <ul>
                    <li>600 units per style</li>
                    <li>4 weeks for development</li>
                    <li>12 weeks for production</li>
                    <li>Shipping: 5 weeks by vessel or 10 days by air</li>
                  </ul>
                </dd>
              </div>
            </Card>
            <Card>
              <div>
                <dt>Jackets</dt>
                <dd>
                  <ul>
                    <li>600 units per style</li>
                    <li>4 weeks for development</li>
                    <li>12 weeks for production</li>
                    <li>Shipping: 5 weeks by vessel or 10 days by air</li>
                  </ul>
                </dd>
              </div>
            </Card>
            <Card>
              <div>
                <dt>Headwear</dt>
                <dd>
                  <ul>
                    <li>150 units per style</li>
                    <li>3 weeks for sampling</li>
                    <li>6 weeks for production</li>
                    <li>Shipping: 5 weeks by vessel or 10 days by air</li>
                  </ul>
                </dd>
              </div>
            </Card>
          </CardList>
        </TightContainer>
      </StyledSection>
    );
  };


ThreeColumnGrid.propTypes = {
  headline: PropTypes.string,
  description: PropTypes.array,
  image: PropTypes.object,
  link: PropTypes.object,
  linkText: PropTypes.string,
};

export default ThreeColumnGrid;
