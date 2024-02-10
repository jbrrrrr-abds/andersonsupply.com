import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import EqualizerSVG from './EqualizerSVG';

const Eq = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;

  svg {
    min-width: 540px;
  }

  .eq-bg {
    fill: var(--brand-white);
  }

  .bar {
    &--0 {
      transform: translateY(var(--bar-0));
    }

    &--1 {
      transform: translateY(var(--bar-1));
    }

    &--2 {
      transform: translateY(var(--bar-2));
    }

    &--3 {
      transform: translateY(var(--bar-3));
    }

    &--4 {
      transform: translateY(var(--bar-4));
    }

    &--5 {
      transform: translateY(var(--bar-5));
    }

    &--6 {
      transform: translateY(var(--bar-6));
    }

    &--7 {
      transform: translateY(var(--bar-7));
    }

    &--8 {
      transform: translateY(var(--bar-8));
    }

    &--9 {
      transform: translateY(var(--bar-9));
    }

    &--10 {
      transform: translateY(var(--bar-10));
    }

    &--11 {
      transform: translateY(var(--bar-11));
    }

    &--12 {
      transform: translateY(var(--bar-12));
    }

    &--13 {
      transform: translateY(var(--bar-13));
    }

    &--14 {
      transform: translateY(var(--bar-14));
    }

    &--15 {
      transform: translateY(var(--bar-15));
    }

    &--16 {
      transform: translateY(var(--bar-16));
    }

    &--17 {
      transform: translateY(var(--bar-17));
    }

    &--18 {
      transform: translateY(var(--bar-18));
    }

    &--19 {
      transform: translateY(var(--bar-19));
    }
  }


  .tail {
    &--0 {
      transform: translateY(var(--tail-0));
    }

    &--1 {
      transform: translateY(var(--tail-1));
    }

    &--2 {
      transform: translateY(var(--tail-2));
    }

    &--3 {
      transform: translateY(var(--tail-3));
    }

    &--4 {
      transform: translateY(var(--tail-4));
    }

    &--5 {
      transform: translateY(var(--tail-5));
    }

    &--6 {
      transform: translateY(var(--tail-6));
    }

    &--7 {
      transform: translateY(var(--tail-7));
    }

    &--8 {
      transform: translateY(var(--tail-8));
    }

    &--9 {
      transform: translateY(var(--tail-9));
    }

    &--10 {
      transform: translateY(var(--tail-10));
    }

    &--11 {
      transform: translateY(var(--tail-11));
    }

    &--12 {
      transform: translateY(var(--tail-12));
    }

    &--13 {
      transform: translateY(var(--tail-13));
    }

    &--14 {
      transform: translateY(var(--tail-14));
    }

    &--15 {
      transform: translateY(var(--tail-15));
    }

    &--16 {
      transform: translateY(var(--tail-16));
    }

    &--17 {
      transform: translateY(var(--tail-17));
    }

    &--18 {
      transform: translateY(var(--tail-18));
    }

    &--19 {
      transform: translateY(var(--tail-19));
    }
  }
`;

const Equalizer = ({ budget, timeline, budgetMin, budgetMax, timelineMin, timelineMax }) => {

  const eqTL = useRef();
  const barsTL = useRef();

  useEffect(() => {
    if (!barsTL.current) return;
    const budgetNumberMin = Number(budgetMin);
    const budgetNumberMax = Number(budgetMax);
    const budgetNumber = Number(budget);
    const timelineNumberMin = Number(timelineMin);
    const timelineNumberMax = Number(timelineMax);
    const timelineNumber = Number(timeline);

    const budgetRanged = gsap.utils.mapRange(budgetNumberMin, budgetNumberMax, 0, 10, budgetNumber);

    const timelineRanged =
      gsap.utils.mapRange(timelineNumberMin, timelineNumberMax, 0, 10, timelineNumber);

    const averaged = (budgetRanged + timelineRanged) / 2;

    if (averaged > 6) {
      gsap.to(barsTL.current, { progress: 0, ease: 'none' });
    } else if (averaged < 2.5) {
      gsap.to(barsTL.current, { progress: 1, ease: 'none' });
    } else {
      gsap.to(barsTL.current, { progress: 0.5, ease: 'none' });
    }

  }, [budget, timeline, budgetMin, budgetMax, timelineMin, timelineMax]);

  const equalizerRef = useCallback((el) => {
    if (!el) return;
    gsap.registerPlugin(ScrollTrigger);

    barsTL.current = gsap.fromTo(el.querySelectorAll('.bars'),
      { y: 0 },
      { paused: true, y: 80, ease: 'steps(16)' });

    barsTL.current.progress(0.5);

    const steps = 32;

    eqTL.current = gsap.timeline();

    for (let i = 0; i < 20; i++) {
      const min = gsap.utils.random(2, 12, 1);
      const max = gsap.utils.random(20, 32, 1);
      const duration = (max - min) * 0.04; // gsap.utils.random(0.6, 1, 0.05);
      const startPercent = ((steps - min) / steps) * 100;
      const endPercent = ((steps - max) / steps) * 100;

      const tgtBar = `--bar-${i}`;
      const tgtTail = `--tail-${i}`;

      eqTL.current
        .fromTo(
          el,
          { [tgtBar]: `${startPercent}%` },
          {
            duration,
            repeat: -1,
            ease: `steps(${max - min})`,
            repeatRefresh: true,
            yoyo: true,
            [tgtBar]: `${endPercent}%`,
          },
          0,
        ).fromTo(
          el,
          { [tgtTail]: `${endPercent}%` },
          {
            duration: duration * 2,
            repeat: -1,
            ease: `steps(${max - min})`,
            repeatRefresh: true,
            [tgtTail]: `${startPercent}%`,
          },
          duration,
        );
    }

    ScrollTrigger.create({
      id: 'equalizer-st',
      trigger: el,
      start: 'top bottom',
      end: 'bottom top',
      animation: eqTL.current,
      toggleActions: 'play pause play pause',

    });

  }, []);

  useEffect(() => () => {

    if (ScrollTrigger.getById('equalizer-st')) {
      ScrollTrigger.getById('equalizer-st').kill();
    }

    if (eqTL.current) {
      eqTL.current.kill();
    }

    if (barsTL.current) {
      barsTL.current.kill();
    }
  }, []);

  return (
    <Eq ref={equalizerRef}>
      <EqualizerSVG />
      <EqualizerSVG />
      <EqualizerSVG />
    </Eq>
  );
};

export default Equalizer;
