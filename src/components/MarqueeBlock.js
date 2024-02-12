import React, { useCallback, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components';
import { rem } from 'polished';
import screen from 'superior-mq';
import { linkResolver } from '../util/prismicHelpers';
import { bp } from '../styles/helpers';
import { OneSixty } from './Jumbo';
import Bolt from './Bolt';
import InlineLink from './InlineLink';

const Wrapper = styled.div`
  overflow: hidden;
  height: 188px;
  position: relative;
  max-width: 100%;
  width: 100%;

  ${screen.below(bp.desktopSm, `
    height: 150px;
  `)}

  ${screen.below(bp.portrait, `
    height: 105px;
  `)}
`;

const CTA = styled(InlineLink)`
  display: inline-block;
  padding: 42px;
  text-align: center;
  color: var(--gold);
  text-transform: uppercase;
  white-space: nowrap;

  ${screen.below(bp.desktopSm, `
    padding: 22px;
  `)}

  ${screen.below(bp.portrait, `
    padding: 8px 22px 0;
  `)}

  svg {
    display: block;
    max-width: 19px;
    margin: auto auto 10px;

    ${screen.below(bp.portrait, `
       margin-bottom: 0;
    `)}
  }
`;

const Item = styled.div`
  display: block;
  position: absolute;
  left: 100%;
  top: 16px;

  span {
    white-space: nowrap;
    line-height: 1;
  }
`;

const StyledOneSixty = styled(OneSixty)`
  ${screen.below(bp.mobile, `
    font-size: ${rem(75)};
  `)}
`;

const MarqueeBlock = ({
  content,
  marqueeID,
}) => {
  const marqueeTL = useRef();

  const killFunction = useCallback(() => {
    if (ScrollTrigger.getById(`${marqueeID}-marquee-scroll-trigger`)) {
      ScrollTrigger.getById(`${marqueeID}-marquee-scroll-trigger`).kill();
    }

    if (marqueeTL.current) {
      marqueeTL.current.kill();
    }
  }, [marqueeID, marqueeTL]);

  const Marquee = useCallback(
    (node) => {
      if (!node) return;

      gsap.registerPlugin(ScrollTrigger);

      const items = node.querySelectorAll(".marquee-item");

      const setupMarquee = () => {
        gsap.set(items, { x: 0 });

        killFunction();

        let width = 0;
        let offset = 0;

        if (items.length) {
          items.forEach((el, i) => {
            const itemWidth = gsap.getProperty(el, "width");

            if (i > 0) {
              gsap.set(el, { x: -1 * (itemWidth + offset) });
              offset += itemWidth;
            }

            width += itemWidth;
          });
        }

        marqueeTL.current = gsap.to(items, {
          x: `-=${width}`,
          repeat: -1,
          duration: 18,
          ease: "none",
          modifiers: {
            x: gsap.utils.unitize((x) => gsap.utils.wrap(-width, 0, x)),
          },
        });

        ScrollTrigger.create({
          trigger: node,
          animation: marqueeTL.current,
          start: "top bottom",
          end: "bottom top",
          id: `${marqueeID}-marquee-scroll-trigger`,
        });
      };

      ScrollTrigger.addEventListener("refresh", setupMarquee);
    },
    [killFunction, marqueeID]
  );

  const pauseMarquee = () => {
    if (!marqueeTL.current) return;
    marqueeTL.current.pause();
  };

  const playMarquee = () => {
    if (!marqueeTL.current) return;
    marqueeTL.current.play();
    gsap.fromTo(marqueeTL.current, { timeScale: 0 }, { timeScale: 1, ease: 'power1.in' });
  };

  useEffect(
    () => () => {
      killFunction();
    },
    [killFunction]
  );

  return (
    <Wrapper ref={Marquee}>

      {content?.first_text_content ?
        <Item className="marquee-item">
          <StyledOneSixty>{content?.first_text_content}</StyledOneSixty>
        </Item>
        :
        null
      }

      {content?.link ?
        <Item className="marquee-item">
          <CTA
            onMouseEnter={pauseMarquee}
            onMouseLeave={playMarquee}
            href={linkResolver(content?.link)}
          >
            <Bolt />
            {content?.link_text}
          </CTA>
        </Item>
        :
        null
      }

      {content?.second_text_content ?
        <Item className="marquee-item">
          <StyledOneSixty>{content?.second_text_content}</StyledOneSixty>
        </Item>
        :
        null
      }

      {content?.link ?
        <Item className="marquee-item">
          <CTA
            onMouseEnter={pauseMarquee}
            onMouseLeave={playMarquee}
            href={linkResolver(content?.link)}
          >
            <Bolt />
            {content?.link_text}
          </CTA>
        </Item>
        :
        null
      }

      {content?.third_text_content ?
        <Item className="marquee-item">
          <StyledOneSixty>{content?.third_text_content}</StyledOneSixty>
        </Item>
        :
        null
      }

      {content?.link ?
        <Item className="marquee-item">
          <CTA
            onMouseEnter={pauseMarquee}
            onMouseLeave={playMarquee}
            href={linkResolver(content?.link)}
          >
            <Bolt />
            {content?.link_text}
          </CTA>
        </Item>
        :
        null
      }

    </Wrapper>
  );
};

export default MarqueeBlock;
