import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { linkResolver } from '../../util/prismicHelpers';
import { bp } from '../../styles/helpers';
import UnstyledList from '../UnstyledList';
import Grid from '../Grid';
import { TwoTen } from '../Jumbo';
import Button from '../Button';
import LazyImg from '../LazyImg';
import TextBlock from '../TextBlock';

const StepGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0;

  &:nth-of-type(odd) {
    grid-template-areas: "content image";
    background-color: var(--brand-white);
  }

  &:nth-of-type(even) {
    grid-template-areas: "image content";
    color: var(--brand-white);
    background-color: var(--brand-black);
  }

  ${screen.below(bp.laptopSm, `
    grid-template-columns: 1fr;

    && {
      grid-template-areas: "content""image";
    }
  `)}
`;

const StepInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: content;
  padding: 350px 0 210px;

  p:last-of-type { margin-bottom: 0; }

  ${screen.below(bp.laptopSm, `
    padding: 262px 0 158px;
  `)}

  ${screen.below(bp.laptopSm, `
    padding: 175px var(--container-gutter) 105px;
  `)}
`;

const Article = styled.article`
  position: relative;
  z-index: 1;

  ${screen.above(bp.laptopSm, `
    max-width: 536px;
  `)}
`;

const StepNumber = styled.span`
  position: absolute;
  top: -146px;
  left: -120px;
  z-index: -1;
  line-height: 1;
  color: var(--gold);

  ${screen.below(bp.desktopLg, `
    left: -90px;
  `)}

  ${screen.below(bp.desktop, `
    left: -60px;
  `)}

  ${screen.below(bp.desktopSm, `
    top: -110px;
    left: 0;
  `)}
`;

const StepImage = styled(LazyImg)`
  grid-area: image;

  ${screen.above(bp.laptopSm, `
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `)}
`;

const Steps = ({ steps = [] }) => {

  const zeroNum = (num) => {
    if (!num || (num && num) > 9) return num;

    return `0${num}`;
  };

  const numberRef = useCallback((el) => {
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const stepEls = el.querySelectorAll('.step-number');

    stepEls.forEach((step, i) => {

      ScrollTrigger.create({
        trigger: step,
        start: 'top 90%',
        end: '+=0',
        id: `steps-${i}`,
        once: true,
        animation: gsap.from(step, { yPercent: 30, autoAlpha: 0, duration: 1, ease: 'circ.out' }),
      });

    });

  }, []);

  useEffect(() => () => {
    if (!steps.length) return;

    steps.forEach((el, i) => {
      if (ScrollTrigger.getById(`steps-${i}`)) {
        ScrollTrigger.getById(`steps-${i}`).kill();
      }
    });

  }, [steps]);

  return (
    <section ref={numberRef}>
      <UnstyledList>

        {steps.map((step, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <StepGrid as="li" key={index}>
            <StepInfo>
              <Article>
                <StepNumber className="step-number" as={TwoTen}>{zeroNum(index + 1)}</StepNumber>

                {step.title ?
                  <h2>{step.title}</h2>
                  :
                  null
                }

                {step.description ?
                  <TextBlock content={step.description} />
                  :
                  null
                }

                {step.link.url ?
                  <Button
                    href={linkResolver(step.link)}
                    isdark
                    large
                    hasmargin
                    bgcolor="gold"
                  >
                    {step.link_text}
                  </Button>
                  :
                  null
                }

              </Article>
            </StepInfo>

            {step.image ?
              <StepImage
                src={`${step.image.url}w=900&h=720&fit=crop&q=85&fm=pjpg`}
                alt={step.image.alt}
              />
              :
              null
            }

          </StepGrid>
        ))}

      </UnstyledList>
    </section>
  );
};

Steps.propTypes = {
  steps: PropTypes.array,
};

export default Steps;
