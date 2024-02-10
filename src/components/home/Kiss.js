import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components';
import screen from 'superior-mq';
import { rem } from 'polished';
import { linkResolver } from '../../util/prismicHelpers';
import { bp, hover } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';
import Grid from '../Grid';
import UnstyledList from '../UnstyledList';
import RatioImg from '../RatioImg';
import Button from '../Button';
import { OneSixty } from '../Jumbo';
import TextBlock from '../TextBlock';

const StyledSection = styled(Section)`
  text-align: center;

  h2 {
    margin-bottom: 58px;
    text-align: center;
  }

  article {
    text-align: left;
  }
`;

const StyledGrid = styled(Grid)`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 165px;

  li {
    visibility: hidden;
  }

  img { border-radius: 50%; }

  ${screen.between(bp.desktop, bp.desktopLg, `
    grid-gap: 124px;
  `)}

  ${screen.between(bp.laptopSm, bp.desktop, `
    grid-gap: 82px;
  `)}

  ${screen.below(bp.laptopSm, `
    grid-gap: 30px;
  `)}

  ${screen.below(bp.tablet, `
    grid-template-columns: 1fr;
    max-width: 540px;
    margin: auto;
  `)}
`;

const ItemTitle = styled.span`
  display: block;
  margin-top: 60px;
  font-size: ${rem(20)};
  font-weight: 700;
  text-transform: uppercase;

  ${screen.below(bp.desktop, `
    margin-top: 45px;
  `)}
`;

const StyledButton = styled(Button)`
  display: inline-block;
  margin: 100px auto auto;

  ${screen.below(bp.desktopLg, `
    margin: 75px auto auto;
  `)}

  ${screen.below(bp.desktop, `
    margin: 50px auto auto;
  `)}

  ${hover(`
    background-color: var(--gold);
  `)}
`;

const ImageWrap = styled.div`
  position: relative;
`;

const Number = styled(OneSixty)`
  position: absolute;
  top: 50%;
  left: 50%;
  color: var(--white);
  transform: translate(-50%, -50%);
`;

const Kiss = ({
  stepItems = [],
  title,
  linkUrl,
  linkText,
}) => {

  const kissRef = useCallback((node) => {
    if (!node) return;

    gsap.registerPlugin(ScrollTrigger);

    const steps = node.querySelectorAll('.step');

    if (steps.length > 0) {
      ScrollTrigger.batch(steps, {
        onEnter: batch => gsap.from(batch, {
          duration: 2,
          autoAlpha: 0,
          y: 70,
          stagger: { each: 0.25 },
          overwrite: true,
          ease: 'power3',
        }),
        id: 'kiss-trigger',
        start: 'top bottom-=70',
        end: '+=0',
        once: true,
      });
    }

  }, []);

  useEffect(() => () => {
    if (ScrollTrigger.getById('kiss-trigger')) {
      ScrollTrigger.getById('kiss-trigger').kill();
    }
  }, []);

  return (
    <StyledSection as={Container} hasPadding>
      <h2>{title}</h2>

      {stepItems ?
        <StyledGrid as={UnstyledList} ref={kissRef}>

          {stepItems.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} className="step">
              <article>
                <ImageWrap>
                  <RatioImg
                    width={450}
                    height={300}
                    src={`${item?.image?.url}&w=450&h=300&fit=crop&q=85&f=center`}
                    alt=""
                  />
                  <Number>{index + 1}</Number>
                </ImageWrap>
                <ItemTitle>{item.title}</ItemTitle>
                <TextBlock
                  content={item.description}
                />
              </article>
            </li>
          ))}

        </StyledGrid>
        :
        null
      }

      {linkUrl ?
        <StyledButton
          isdark
          large
          bgcolor="brand-black"
          href={linkResolver(linkUrl)}
        >
          {linkText}
        </StyledButton>
        :
        null
      }

    </StyledSection>
  );
};

Kiss.propTypes = {
  stepItems: PropTypes.array,
  title: PropTypes.string,
  linkUrl: PropTypes.object,
  linkText: PropTypes.string,
};

export default Kiss;
