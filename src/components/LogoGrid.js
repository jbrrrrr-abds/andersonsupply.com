import React, { useCallback, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../styles/helpers';
import Section from './Section';
import Container from './Container';
import Grid from './Grid';
import UnstyledList from './UnstyledList';
import LazyImg from './LazyImg';

const StyledSection = styled(Section)`
  position: relative;
  overflow: hidden;
`;

const LogosWrapper = styled(Grid)`
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 60px 40px;
  width: 150%;

  li {
    padding: 30px 10px;
  }

  ${screen.below(bp.laptopSm, `
    grid-template-columns: repeat(7, 1fr);
    grid-row-gap: 0;

    li:nth-of-type(n + 22) {
        display: none;
      }
    }
  `)}

  ${screen.below(bp.mobileMid, `
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0 24px;

    li {
      padding: 12px 2px;

      &:nth-of-type(n + 16) {
        display: none;
      }
    }
  `)}
`;

const LogoImg = styled(LazyImg)`
  && {
    img { object-fit: contain; }
  }
`;

const LogoGrid = ({
  pageId,
  title,
  logos = [],
}) => {
  const logoGridRef = useCallback((el) => {
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: el,
      start: '50% bottom',
      end: '50% top',
      id: `logos-${pageId}`,
      scrub: true,
      animation: gsap.fromTo(el, { xPercent: 0 }, { xPercent: -33.333, ease: 'sine.inOut' }),
    });
  }, [pageId]);

  useEffect(() => () => {
    if (ScrollTrigger.getById(`logos-${pageId}`)) {
      ScrollTrigger.getById(`logos-${pageId}`).kill();
    }
  }, [pageId]);

  return (
    <StyledSection hasPadding>
      <Container>

        {title ?
          <h2>{title}</h2>
          :
          null
        }

        {logos.length > 0 ?
          <UnstyledList
            ref={logoGridRef}
            as={LogosWrapper}
          >
            {logos.map((logo, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <LogoImg
                  src={logo?.logo?.url}
                  alt={logo?.logo?.alt}
                  width={205}
                  height={135}
                />
              </li>
            ))}
          </UnstyledList>
          :
          null
        }

      </Container>
    </StyledSection>
  );
};

export default LogoGrid;
