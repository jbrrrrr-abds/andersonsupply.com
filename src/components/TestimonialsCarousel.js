import React, { useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import gsap from 'gsap';
import { bp } from '../styles/helpers';
import Carousel, { useCarousel } from './Carousel';
import Section from './Section';
import LazyImg from './LazyImg';
import ClickForNext from './ClickForNext';
import Container from './Container';
import { Forty } from './Jumbo';
import QuotationMark from './QuotationMark';

const NoOverflow = styled.div`
  overflow: hidden;
`;

const Wrapper = styled(Section)`
  position: relative;
  padding: ${props => props.padding ? 'var(--spacing) 0' : '0 0 var(--spacing)'};
  margin: auto;

  h2 {
    margin-bottom: 52px;

    ${screen.below(bp.mobile, `
      text-align: center;
    `)}
  }

  ${props => props.image && `
    color: var(--brand-white);
  `}
`;

const BlockQuote = styled.blockquote`
  position: relative;
  padding-top: 48px;

  svg {
    position: absolute;
    width: 30px;
    height: 19px;

    &:first-of-type {
      top: 0;
      left: 0;
    }

    &:last-of-type {
      bottom: -18px;
      right: 0;
      transform: scale(-1, -1);
    }
  }
`;

const Quote = styled.p`
  font-size: ${rem(47)};
  text-transform: none;
  line-height: 1.14;

  ${screen.below(bp.mobile, `
    font-size: ${rem(28)};
    line-height: 1.4;
  `)}
`;

const Quotee = styled.figcaption`
  margin-top: 54px;
  color: var(--gold);
  font-family: var(--secondary-font);
  font-size: ${rem(20)};
  text-transform: uppercase;

  ${screen.above(bp.mobile, `
    padding-left: 254px;
  `)}
`;

const Dots = styled(Carousel.Dots)`
  margin-top: 20px;
`;

const MouseFollower = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 98px;
  height: 98px;
  display: grid;
  place-content: center;
  opacity: ${props => props.isOver ? '1' : '0'};
  transition: opacity .4s ease;

  span {
    margin: 0;
    font-size: ${rem(15)};
    font-family: var(--secondary-font);
    font-weight: 400;
    line-height: 1;
    text-transform: uppercase;
    color: var(--black);
    position: relative;
    z-index: 5;
  }
`;

const BackgroundImage = styled(LazyImg)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--brand-black);
    opacity: .8;
    content: "";
  }
`;

const TestimonialsCarousel = ({
  padding,
  title,
  image,
  testimonials = [],
}) => {
  const { flickity, setFlickityIndex, flickityIndex } = useCarousel();

  const [isOver, setIsOver] = useState(false);

  const nextSlide = () => {
    let index = flickityIndex + 1;

    if (index > testimonials.length - 1) {
      index = 0;
    }

    setFlickityIndex(index);
  };

  const cursorBounds = useRef();
  const cursorRef = useRef();
  const xSet = useRef();
  const ySet = useRef();
  const cursorPosition = useRef({ x: 0, y: 0 });
  const mousePosition = useRef({ x: 0, y: 0 });
  const speed = 0.3;

  const cursorBoundsRef = useCallback((node) => {
    if (!node) return;
    cursorBounds.current = node;
    cursorRef.current = node.querySelector('.follower');
    xSet.current = gsap.quickSetter(cursorRef.current, 'x', 'px');
    ySet.current = gsap.quickSetter(cursorRef.current, 'y', 'px');

  }, []);

  const runCursor = () => {
    if (cursorRef.current && mousePosition.current) {
      cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * speed;
      cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * speed;

      xSet.current(cursorPosition.current.x);
      ySet.current(cursorPosition.current.y);
    }
  };

  const mouseHandler = ({ clientX: x, clientY: y }) => {
    if (cursorRef.current && cursorBounds.current) {
      const bounds = cursorBounds.current;

      mousePosition.current.x = x - bounds.getBoundingClientRect().left;
      mousePosition.current.y = y - bounds.getBoundingClientRect().top;
    }
  };

  const CursorEnter = () => {
    setIsOver(true);
    gsap.ticker.add(runCursor);
  };

  const CursorExit = () => {
    setIsOver(false);
    gsap.ticker.remove(runCursor);
  };

  return (
    <NoOverflow>
      <Wrapper
        ref={cursorBoundsRef}
        onMouseEnter={CursorEnter}
        onMouseLeave={CursorExit}
        onMouseMove={mouseHandler}
        onClick={nextSlide}
        padding={padding}
        image={image}
      >
        <Container>

          {title ?
            <h2>{title}</h2>
            :
            null
          }

          <Carousel ref={flickity}>

            {testimonials.map(item => (
              <Carousel.Slide key={item?.testimonial?.id}>
                <figure>
                  <BlockQuote>
                    <QuotationMark />
                    <QuotationMark />
                    <Quote as={Forty}>{item?.testimonial?.data?.quote}</Quote>
                  </BlockQuote>

                  {item?.testimonial?.data?.quotee ?
                    <Quotee>
                      {item.testimonial.data.quotee}
                    </Quotee>
                    :
                    null
                  }

                </figure>
              </Carousel.Slide>
            ))}

          </Carousel>
          <Dots slides={testimonials} currentIndex={flickityIndex} handleClick={setFlickityIndex} />
        </Container>
        <MouseFollower isOver={isOver} className="follower">
          <ClickForNext />
          <span>{flickityIndex + 1} of {testimonials.length}</span>
        </MouseFollower>

        {image ?
          <BackgroundImage
            src={`${image.url}&w=1800&h=993&fit=crop&q=85&f=center`}
            alt={image?.alt}
            width={1800}
            height={993}
          />
          :
          null
        }

      </Wrapper>
    </NoOverflow>
  );
};

TestimonialsCarousel.propTypes = {
  padding: PropTypes.bool,
  title: PropTypes.string,
  testimonials: PropTypes.array,
};

export default TestimonialsCarousel;
