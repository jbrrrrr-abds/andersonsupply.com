import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { rem } from 'polished';
import { linkResolver } from '../../util/prismicHelpers';
import Carousel, { useCarousel } from '../Carousel';
import { bp } from '../../styles/helpers';
import { Ninety } from '../Jumbo';
import Button from '../Button';
import UnstyledList from '../UnstyledList';
import AbsoluteImage from '../AbsoluteImage';

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  background-color: var(--brand-black);
`;

const SlideWrap = styled.div`
  position: relative;
  z-index: 1;
  color: var(--brand-white);
  text-align: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, .62) 0%, rgba(0, 0, 0, 0) 100%);
    content: "";
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 9;
  padding: 386px 0;

  ${screen.below(bp.desktopLg, `
    padding: 290px 0;
  `)}

  ${screen.below(bp.mobile, `
    padding: 195px 0;
  `)}
`;

const CarouselNavigation = styled.nav`
  position: absolute;
  bottom: 50px;
  z-index: 9;
  display: flex;
  align-items: center;
  left: var(--container-gutter);
  color: var(--brand-white);
`;

const ArrowList = styled(UnstyledList)`
  display: flex;
  justify-content: space-between;
  width: 92px;
  margin-right: 30px;
`;

const DotList = styled(Carousel.Dots)`
  margin-top: -7px;
`;

const Headline = styled(Ninety)`
  ${screen.below(bp.mobile, `
    font-size: ${rem(40)};
  `)}
`;

const HeroCarousel = ({ slides = [] }) => {
  const { flickity, setFlickityIndex, flickityIndex } = useCarousel();

  if (slides?.length < 1) return null;

  return (
    <Wrapper>
      <CarouselNavigation aria-label="Hero Carousel">
        <ArrowList>
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
        </ArrowList>
        <DotList
          isDark
          slides={slides}
          currentIndex={flickityIndex}
          handleClick={setFlickityIndex}
        />
      </CarouselNavigation>

      <Carousel ref={flickity}>

        {slides.map((slide, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Carousel.Slide key={index}>
            <SlideWrap>
              <AbsoluteImage
                src={`${slide.slide_image.url}&w=1280&h=720&fit=crop&q=85&f=center`}
                alt={slide.slide_image.alt ? slide.slide_image.alt : ''}
              />
              <Content>
                <Headline>{slide.slide_title}</Headline>
                <Button href={linkResolver(slide.slide_link_url)} large bgcolor="brand-white" hasmargin>
                  {slide.slide_link_text}
                </Button>
              </Content>
            </SlideWrap>
          </Carousel.Slide>
        ))}

      </Carousel>
    </Wrapper>
  );
};

HeroCarousel.propTypes = {
  slides: PropTypes.array,
};

export default HeroCarousel;
