import React, { useEffect, useCallback } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import makePercent from 'util/makePercent';
import { bp, hover } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';
import Grid from '../Grid';
import UnstyledList from '../UnstyledList';
import { Sixty, TwentyFive } from '../Jumbo';
import Bolt from '../Bolt';
import LazyImg from '../LazyImg';
import InlineLink from '../InlineLink';

const StyledSection = styled(Section)`
  h2 {
    margin-bottom: 80px;
    text-align: center;
  }
`;

const StyledGrid = styled(Grid)`
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 48px 20px;
  max-width: 1395px;
  margin: auto;

  li {
    visibility: hidden;
  }

  span,
  small {
    display: block;
  }

  ${screen.below(bp.desktopSm, `
    grid-template-columns: repeat(3, 1fr);
  `)}

  ${screen.below(bp.portrait, `
    grid-template-columns: repeat(2, 1fr);
  `)}

  ${screen.below(bp.mobile, `
    grid-template-columns: 1fr;
  `)}
`;

const Name = styled.span`
  margin-top: 25px;
`;

const Wrap = styled.div`
  position: relative;

  &::before {
    content: "";
    width: 100%;
    padding-bottom: ${makePercent(370, 330)};
  }

  > .content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

const GrowingWrap = styled(Wrap)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  background-color: var(--brand-white);
  text-align: center;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

  h3 {
    color: var(--brand-black);
  }

  svg {
    max-width: 11px;
    margin: 22px auto 16px;
    color: inherit;
  }

  ${hover(`
    color: var(--brand-white);
    background-color: var(--gold);
  `)}
`;

const TeamGrid = ({
  title,
  team = [],
  linkTopText,
  linkBottomText,
  link,
}) => {

  const teamGridRef = useCallback((node) => {
    if (!node) return;
    gsap.registerPlugin(ScrollTrigger);

    const teamGrid = node.children;

    if (teamGrid.length > 0) {
      ScrollTrigger.batch(teamGrid, {
        onEnter: batch => gsap.fromTo(batch, {
          autoAlpha: 0,
          yPercent: 20,
        }, {
          duration: 1.5,
          autoAlpha: 1,
          yPercent: 0,
          stagger: { each: 0.25 },
          overwrite: true,
          ease: 'power2',
        }),
        id: 'team-grid-trigger',
        start: 'top 80%',
        end: '+=0',
        once: true,
      });
    }

  }, []);

  useEffect(() => () => {
    if (ScrollTrigger.getById('team-grid-trigger')) {
      ScrollTrigger.getById('team-grid-trigger').kill();
    }
  }, []);

  return (
    <StyledSection hasPadding>
      <Container>

        {title ?
          <h2>{title}</h2>
          :
          null
        }

        {team.length > 0 ?

          <UnstyledList ref={teamGridRef} as={StyledGrid}>

            {team.map((member, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>
                <LazyImg
                  width={330}
                  height={370}
                  src={`${member?.image?.url}&w=330&h=370&fit=crop&q=85&f=center`}
                  alt={member?.image?.alt}
                />
                <Name>
                  <strong>
                    {member?.name}
                  </strong>
                </Name>
                <small>{member?.job_title}</small>
              </li>
            ))}

            <li>
              <GrowingWrap
                as={InlineLink}
                href={link?.url}
              >
                <div className="content">

                  {linkTopText ?
                    <Sixty as="h3">{linkTopText}</Sixty>
                    :
                    null
                  }

                  <Bolt />

                  {linkBottomText ?
                    <TwentyFive>{linkBottomText}</TwentyFive>
                    :
                    null
                  }

                </div>
              </GrowingWrap>
            </li>

          </UnstyledList>

          :

          null

        }

      </Container>
    </StyledSection>
  );
};

TeamGrid.propTypes = {
  title: PropTypes.string,
  team: PropTypes.array,
  linkTopText: PropTypes.string,
  linkBottomText: PropTypes.string,
  link: PropTypes.object,
};

export default TeamGrid;
