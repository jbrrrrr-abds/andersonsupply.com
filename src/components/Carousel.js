import React, { useCallback, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
// import screen from 'superior-mq';
import PropTypes from 'prop-types';
import { hover } from '../styles/helpers';
import UnstyledList from './UnstyledList';
import UnstyledButton from './UnstyledButton';

/**
 * flickity carousel hook
 *
 * @param {object} flktyInstance - ref passed from carousel component
 * @param {object} options - flickity options
 */
export const useCarousel = (options = {}) => {
  /**
   * state to track slide index
   */
  const [flickityIndex, updateFlickityIndex] = useState(0);

  /**
   * Use a ref to handle the flickit instance
   * so it can be destroyed on exit
   */
  const flktyInstance = useRef();

  /**
   * intialize the slider
   * to be used as the ref on the slider element
   */
  const slider = useCallback((node) => {
    if (node !== null) {
      const Flickity = require('flickity');

      const flkty = new Flickity(node, {
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        dragThreshold: 5,
        ...options,
      });

      /**
       * Save flickity instance as a ref
       * so it can be accessed elsewhere
       */
      flktyInstance.current = flkty;

      /**
       * stops vertical scrolling on flickity swipe
       * https://github.com/metafizzy/flickity/issues/740#issuecomment-389615114
       */
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

  /**
   * Push flickity to {i} slide
   * @param {index} i
   */
  const setFlickityIndex = (i) => {
    if (flktyInstance && flktyInstance.current) {
      flktyInstance.current.select(i, true);
    }
  };

  /**
   * manage slide index
   */
  useEffect(() => {
    if (flktyInstance && flktyInstance.current) {
      flktyInstance.current.on('change', (index) => {
        updateFlickityIndex(index);
      });
    }
  }, [flktyInstance]);

  /**
   * Destroy flickity instance when Carousel
   * unmounts
   */
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

const Carousel = styled.div`
  position: relative;
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

Carousel.Slide = styled.div`
  width: 100%;
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  &.is-selected {
    opacity: 1;
  }
`;

const SlideDot = styled.li`
  display: inline-block;

  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

const SlideDotButton = styled(UnstyledButton)`
  width: 7px;
  height: 7px;
  position: relative;
  display: inline-block;
  background-color: var(--${props => props.isDark ? 'brand-white' : 'gold'});
  border-radius: 50%;
  transition: opacity .33s;
  opacity: .5;

  &[aria-current="true"] {
    opacity: 1;
  }

  /* expand the click area as much as possible */

  &::before {
    content: "";
    display: block;
    position: absolute;
    inset: -6px;
  }

  ${hover(`
    opacity: 1;
  `)}
`;

const SlideArrowButton = styled(UnstyledButton)`
  ${props => props.color && `
    color: var(--${props.color});
  `}
  ${props => props.isLeft && 'transform: scaleX(-1)'};
  transition: color 300ms ease-in-out;

  ${hover(`
    color: var(--gold);
  `)}
`;

const SlideArrow = styled.svg`
  width: 32px;
  height: 8px;
  color: inherit;
`;


Carousel.Dots = ({
  slides = [],
  currentIndex,
  handleClick,
  className,
  isDark,
}) => {
  Carousel.Dots.displayName = "CarouselDots";
  if (!slides || (slides && slides.length < 2)) return null;

  return (
    <UnstyledList className={className}>
      {slides.map((slide, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <SlideDot key={i} display="inline-block">
          <SlideDotButton
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === currentIndex}
            isDark={isDark}
            onClick={() => {
              handleClick(i);
            }}
          />
        </SlideDot>
      ))}
    </UnstyledList>
  );
};

Carousel.Dots.propTypes = {
  slides: PropTypes.array,
  currentIndex: PropTypes.number,
  handleClick: PropTypes.func,
  className: PropTypes.string,
};

Carousel.Button = ({ slideCount, currentIndex, handleClick, action, isLeft, color }) => {
  Carousel.Button.displayName = "CarouselButton";
  let nextIndex = null;
  const interval = action === 'next' ? 1 : -1;

  if (currentIndex + interval >= slideCount) {
    nextIndex = 0;
  } else if (currentIndex + interval < 0) {
    nextIndex = slideCount - 1;
  } else {
    nextIndex = currentIndex + interval;
  }

  return (
    <SlideArrowButton
      aria-label={`Go to ${action} slide`}
      onClick={() => { handleClick(nextIndex); }}
      action={action}
      isLeft={isLeft}
      color={color}
    >
      <SlideArrow
        viewBox="0 0 32 8"
        isLeft={isLeft}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.99 5H31.5V3H3.99V0L0 4l3.99 4V5z" fill="currentColor" />
      </SlideArrow>
    </SlideArrowButton>
  );
};

export default Carousel;
