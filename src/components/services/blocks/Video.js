/* eslint-disable react/no-array-index-key */
import React, { useCallback, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../../styles/helpers';
import { useModal } from '../../Modal/GullsModal';
import Section from '../../Section';
import PlayButton from '../../PlayButton';
import UnstyledList from '../../UnstyledList';
import { OneSixty } from '../../Jumbo';

const VideoSectionWrapper = styled.div`
  padding-top: var(--spacing);
  background-color: var(--brand-white);
`;

const VideoSection = styled(Section)`
  position: relative;
  padding: 436px 0;
  overflow: hidden;
  color: var(--brand-white);

  ${screen.below(bp.desktopSm, `
    padding: 326px 0;
  `)}

  ${screen.below(bp.laptopSm, `
    padding: 218px 0;
  `)}
`;

const List = styled(UnstyledList)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Video = ({ videoId }) => {
  const { toggleModal } = useModal();
  const videoText = Array.from(Array(10), () => 'play');

  const playTL = useRef();
  const prevDirection = useRef(1);

  const playPlayPlay = useCallback((el) => {
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const plays = el.children;

    playTL.current = gsap.to(plays, {
      yPercent: 100,
      duration: 2,
      ease: 'none',
      repeat: -1,
      onReverseComplete() {
        // include rawTime() to compensate for the tiny offset between frames (zero time drift)
        this.totalTime((this.duration() * 100) + this.rawTime());
      },
    });

    ScrollTrigger.create({
      trigger: el,
      id: `${videoId}-play`,
      start: 'top bottom',
      end: 'bottom top',
      animation: playTL.current,
      toggleActions: 'play pause resume reset',
      onUpdate(self) {
        if (prevDirection.current !== self.direction) {
          gsap.to(playTL.current, { duration: 1.5, ease: 'slow(0.1, 0.7, false)', timeScale: self.direction });
          prevDirection.current = self.direction;
        }
      },
    });

  }, [videoId]);

  useEffect(() => () => {
    if (ScrollTrigger.getById(`${videoId}-play`)) {
      ScrollTrigger.getById(`${videoId}-play`).kill();
    }

    if (playTL.current) {
      playTL.current.kill();
    }
  }, [videoId]);

  if (!videoId) return null;

  return (
    <VideoSectionWrapper>
      <VideoSection bgColor="brand-black">

        {videoText?.length > 0 ?
          <List ref={playPlayPlay} aria-hidden="true">

            {videoText.map((item, index) => (
              <li key={index}>
                <OneSixty>{item}</OneSixty>
              </li>
            ))}

          </List>
          :
          null
        }

        {videoId ?
          <StyledPlayButton
            onClick={() => {
              toggleModal(videoId);
            }}
            aria-label="Play video"
          />
          :
          null
        }

      </VideoSection>
    </VideoSectionWrapper>
  );
};

Video.propTypes = {
  videoId: PropTypes.string,
};

export default Video;
