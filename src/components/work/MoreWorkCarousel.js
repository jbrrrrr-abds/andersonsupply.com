/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import gsap from 'gsap';
import Draggable from 'gsap/dist/Draggable';
import InertiaPlugin from 'gsap/dist/InertiaPlugin';
import { bp, hover } from '../../styles/helpers';
import LazyImg from '../LazyImg';
import Section from '../Section';
import UnstyledButton from '../UnstyledButton';

const MoreWorkContainer = styled(Section)`
  padding: 106px 0 var(--spacing) 0;
  position: relative;
`;

const Header = styled.div`
  margin-left: var(--container-gutter);
  display: flex;
  align-items: center;

  h2 {
    margin: 0 25px 0 0;
  }
`;

const SlideArrowButton = styled(UnstyledButton)`
  transform: scale(-1);
  background: transparent;
  transition: color 300ms ease-in-out;

  ${hover(`
    background: transparent;
    color: var(--gold);
  `)}
`;

const SlideArrow = styled.svg`
  width: 32px;
  height: 8px;
  color: inherit;
`;

const ScrollWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 0 0 0 var(--container-gutter);
`;

const Scroller = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  --slide-padding: 30px;
  min-width: 27.4%;
  width: 27.4%;
  opacity: 1;
  padding-right: var(--slide-padding);

  &:last-of-type {
    padding-right: 0;
    min-width: calc(27.4% - var(--slide-padding));
    width: calc(27.4% - var(--slide-padding));
  }

  ${screen.below(bp.desktop, `
    --slide-padding: 15px;
  `)}

  ${screen.below(bp.mobile, `
    min-width: 56%;
    width: 56%;

    &:last-of-type {
      min-width: calc(56% - var(--slide-padding));
      width: calc(56% - var(--slide-padding));
    }
  `)}
`;

const Image = styled(LazyImg)`
  margin-top: 34px;
`;

const MoreWork = ({
  title,
  slides = [],
}) => {

  const slider = useRef();
  const scroller = useRef();
  const theMin = useRef();
  const items = useRef();

  const scrollerRef = useCallback((node) => {
    if (!node) return;
    slider.current = node;
  }, []);

  useEffect(() => {
    if (!window || !slider.current) return;
    scroller.current = slider.current.querySelector('.scroller');
    items.current = scroller.current.children;
    const item = items.current[0];

    gsap.registerPlugin(Draggable, InertiaPlugin);
    theMin.current = scroller.current.offsetWidth - slider.current.scrollWidth;

    Draggable.create(scroller.current, {
      type: 'x',
      bounds: {
        minX: scroller.current.offsetWidth - slider.current.scrollWidth,
        maxX: 0,
      },
      snap: value => Math.round(value / item.offsetWidth) * item.offsetWidth,
      inertia: true,
    });

    const onResize = () => {
      theMin.current = scroller.current.offsetWidth - slider.current.scrollWidth;

      gsap.set(scroller.current, { x: 0 });
      Draggable.get(scroller.current).applyBounds({
        minX: theMin.current,
        maxX: 0,
      });
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      Draggable.get(scroller.current).kill();
    };
  }, []);

  const handleClick = () => {
    const xAmount = items.current[0].offsetWidth;

    if ((scroller.current.offsetWidth - slider.current.scrollWidth) < gsap.getProperty(scroller.current, 'x')) {
      gsap.to(scroller.current, { x: `-=${xAmount}` });
    } else if ((scroller.current.offsetWidth - slider.current.scrollWidth) < 0) {
      gsap.to(scroller.current, { x: theMin.current });
    }
  };

  if (slides.length < 1) return null;

  return (
    <MoreWorkContainer bgColor="brand-white">
      <Header>

        {title ?
          <h2>{title}</h2>
          :
          null
        }

        <SlideArrowButton onClick={handleClick}>
          <SlideArrow viewBox="0 0 32 8" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M3.99 5H31.5V3H3.99V0L0 4l3.99 4V5z" fill="currentColor" />
          </SlideArrow>
        </SlideArrowButton>
      </Header>
      <ScrollWrapper ref={scrollerRef}>

        <Scroller className="scroller">
          {slides.map((slide, index) => (
            <Slide key={index}>
              <Image
                src={slide.more_work_image?.url}
                alt={slide.more_work_image?.alt}
                width={397}
                height={585}
              />
            </Slide>
          ))}
        </Scroller>
      </ScrollWrapper>
    </MoreWorkContainer>
  );
};

MoreWork.propTypes = {
  title: PropTypes.string,
  slides: PropTypes.array,
};

export default MoreWork;
