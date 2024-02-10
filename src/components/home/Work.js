import React, { useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { position } from 'polished';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { bp } from '../../styles/helpers';
import { linkResolver } from '../../util/prismicHelpers';
import Section from '../Section';
import Button from '../Button';

const StyledSection = styled(Section)`
  position: relative;
  padding: 0;
  text-align: center;
  overflow: hidden;
`;

const HomeWorkButton = styled(Button)`
  ${position('absolute', 0, 0, 0, 0)};
  margin: auto;
  height: 40px;
  width: 250px;
  text-align: center;
  z-index: 2;
`;

const ScrollBG = styled.div`
  z-index: 1;
  white-space: nowrap;
  width: 250vw;
  position: relative;
  font-size: 0;

  img {
    width: 50%;
    position: relative;
    display: inline-block;
  }
`;

const DesktopImage = styled.img`
  ${screen.below(bp.mobile, `
    display: none;
  `)}
`;

const MobileImage = styled.img`
  ${screen.above(bp.mobile, `
    display: none;
  `)}
`;

const Work = ({
  link,
  linkText,
  image,
  mobileImage,
}) => {

  // KEEPING THIS IN FOR NOW JUST INCASE BEN WANTS IT STILL

  // const ScrollWorks = useCallback((el) => {
  //   if (!el) return;

  //   gsap.registerPlugin(ScrollTrigger);
  //   const tl = gsap.to(el, { xPercent: -50, duration: 20, ease: 'none' });

  //   ScrollTrigger.create({
  //     trigger: el,
  //     start: 'top bottom',
  //     end: 'bottom top',
  //     id: 'home-work',
  //     animation: tl,
  //     scrub: 1.2,
  //   });

  // }, []);

  // useEffect(() => () => {
  //   if (ScrollTrigger.getById('home-work')) {
  //     ScrollTrigger.getById('home-work').kill();
  //   }
  // }, []);

  const homeWorkTL = useRef();
  const prevDirection = useRef(1);

  const homeWork = useCallback((el) => {
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    homeWorkTL.current = gsap.to(el, {
      xPercent: -50,
      duration: 30,
      ease: 'none',
      repeat: -1,
      onReverseComplete() {
        // include rawTime() to compensate for the tiny offset between frames (zero time drift)
        this.totalTime((this.duration() * 100) + this.rawTime());
      },
    });

    ScrollTrigger.create({
      trigger: el,
      id: 'home-work',
      start: 'top bottom',
      end: 'bottom top',
      animation: homeWorkTL.current,
      toggleActions: 'play pause resume reset',
      onUpdate(self) {
        if (prevDirection.current !== self.direction) {
          gsap.to(homeWorkTL.current, { duration: 4, ease: 'slow(0.1, 0.7, false)', overwrite: 'auto', timeScale: self.direction });
          prevDirection.current = self.direction;
        }
      },
    });

  }, []);

  useEffect(() => () => {
    if (ScrollTrigger.getById('home-work')) {
      ScrollTrigger.getById('home-work').kill();
    }

    if (homeWorkTL.current) {
      homeWorkTL.current.kill();
    }
  }, []);

  if (!image) return;

  return (
    <StyledSection bgColor="gold">

      {link ?
        <HomeWorkButton
          isdark
          bgcolor="brand-black"
          large
          href={linkResolver(link)}
        >
          {linkText}
        </HomeWorkButton>
        :
        null
      }

      <ScrollBG ref={homeWork}>
        <DesktopImage src={`${image?.url}&w=1652&h=678&fit=crop&q=85&f=center`} alt={image?.alt} />
        <DesktopImage aria-hidden="true" src={`${image.url}&w=1652&h=678&fit=crop&q=85&f=center`} alt="" />
        <MobileImage src={`${mobileImage?.url}&w=826&h=340&fit=crop&q=85&f=center`} alt={mobileImage?.alt} />
        <MobileImage aria-hidden="true" src={`${mobileImage?.url}&w=826&h=340&fit=crop&q=85&f=center`} alt="" />
      </ScrollBG>
    </StyledSection>
  );
};

Work.propTypes = {
  link: PropTypes.object,
  linkText: PropTypes.string,
  image: PropTypes.object,
  mobileImage: PropTypes.object,
};

export default Work;
