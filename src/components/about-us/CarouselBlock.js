import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../styles/helpers';
import Carousel, { useCarousel } from '../Carousel';
import Section from '../Section';
import Container from '../Container';
import Grid from '../Grid';
import { Ninety } from '../Jumbo';
import OffsetImageGrid from '../OffsetImageGrid';
import UnstyledList from '../UnstyledList';
import TextBlock from '../TextBlock';

const StyledGrid = styled(Grid)`
  grid-template-columns: 1fr 1.2fr;
  max-width: 1390px;
  margin: auto;
  color: var(--brand-white);

  p {
    max-width: 540px;
  }

  ${screen.below(bp.laptopSm, `
    grid-template-columns: 1fr 2fr;
  `)}

  ${screen.below(bp.portrait, `
    grid-template-columns: 1fr;

    h2 {
      margin-top: 38px;
    }
  `)}
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 94px;

  ${screen.below(bp.desktopSm, `
    margin-top: 70px;
  `)}

  ${screen.below(bp.laptopSm, `
    margin-top: 48px;
  `)}
`;

const CarouselNavigation = styled.nav`
  width: 92px;
  margin-top: 16px;

  ul {
    display: flex;
    justify-content: space-between;
  }
`;

const CarouselBlock = ({
  title,
  subTitle,
  description,
  slides = [],
}) => {
  const { flickity, setFlickityIndex, flickityIndex } = useCarousel();

  return (
    <Section hasPadding bgColor="brand-black">
      <Container>
        <StyledGrid>
          <div>

            {title ?
              <Ninety>{title}</Ninety>
              :
              null
            }

          </div>
          <div>

            {subTitle ?
              <h2>{subTitle}</h2>
              :
              null
            }

            {description ?
              <TextBlock content={description} />
              :
              null
            }

          </div>
        </StyledGrid>
        <Wrapper>
          <Carousel ref={flickity}>

            {slides.map((slide, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Carousel.Slide key={index}>
                <OffsetImageGrid
                  smallImageLeft
                  smallImage={slide?.left_image}
                  bigImage={slide?.right_image}
                />
              </Carousel.Slide>
            ))}

          </Carousel>
        </Wrapper>
        <CarouselNavigation aria-label="About Us Carousel">
          <UnstyledList>
            <li>
              <Carousel.Button
                slideCount={slides.length}
                currentIndex={flickityIndex}
                handleClick={setFlickityIndex}
                action="prev"
                color="brand-white"
              />
            </li>
            <li>
              <Carousel.Button
                slideCount={slides.length}
                currentIndex={flickityIndex}
                handleClick={setFlickityIndex}
                isLeft
                action="next"
                color="brand-white"
              />
            </li>
          </UnstyledList>
        </CarouselNavigation>
      </Container>
    </Section>
  );
};

CarouselBlock.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.array,
  slides: PropTypes.array,
};

export default CarouselBlock;
