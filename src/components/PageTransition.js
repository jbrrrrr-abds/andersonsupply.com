import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transitioning';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const duration = 1000;

const transitionOutZoom = keyframes`
  0% {
    transform: scale(1);
    filter: saturate(1)  sepia(0);
  }

  30% {
    transform: scale(.6);
  }

  50% {
    filter: saturate(0) sepia(.1);
  }

  70% {
    transform: scale(.6);
  }

  100% {
    transform: scale(1);
    filter: saturate(1)  sepia(0);
  }
`;

const transitionOutSlide = keyframes`
  from   {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;

const transitionInSlide = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
`;

const MainWrapper = styled.div`
  animation-fill-mode: both;

  &.page-enter-active,
  &.page-enter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 4;
  }

  &.page-enter-active,
  &.page-exit-active {
    .page-transition-inner {
      height: 100vh;
      overflow: hidden;
      box-shadow: 0 0 0 30px var(--light-gray), 0 30px 60px rgb(0 0 0 / 40%);
      animation: ${duration}ms ${transitionOutZoom} cubic-bezier(.45, 0, .55, 1);
      animation-fill-mode: both;
    }
  }

  &.page-enter-active {
    animation: ${duration / 2}ms ${transitionInSlide} ${duration / 4}ms cubic-bezier(.37, 0, .63, 1);
    animation-fill-mode: both;
  }

  &.page-exit-active {
    z-index: 5;
    position: relative;
    animation: ${duration / 2}ms ${transitionOutSlide} ${duration / 4}ms cubic-bezier(.37, 0, .63, 1);
    animation-fill-mode: both;

    main,
    footer {
      transform: translateY(-${props => props.routingPageOffset}px);
    }
  }
`;

const SecondaryWrapper = styled.div`
  position: relative;
  z-index: 0;
  background: var(--white);
`;

const PageTransition = ({
  route,
  children,
  routingPageOffset,
}) => {

  const [transitionState, setTransitionState] = useState();

  const playTransition = () => {
    setTransitionState(true);
  };

  const stopTransition = () => {
    setTransitionState();
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh(true);
  };

  return (
    <TransitionGroup className={transitionState ? 'transitioning' : ''} appear enter exit>
      <CSSTransition
        timeout={duration}
        classNames="page"
        key={route}
        enter
        exit
        in
        onEnter={playTransition}
        onExited={stopTransition}
      >
        <MainWrapper
          routingPageOffset={routingPageOffset}
          appear
        >
          <SecondaryWrapper className="page-transition-inner" appear enter exit>
            {children}
          </SecondaryWrapper>
        </MainWrapper>
      </CSSTransition>
    </TransitionGroup>

  );
};

PageTransition.propTypes = {
  routingPageOffset: PropTypes.number,
  route: PropTypes.string,
  children: PropTypes.node,
};

export default PageTransition;
