import React, { useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { rem } from 'polished';
import { useModal } from './Modal/GullsModal';
import PlayButton from './PlayButton';
import LazyVideo from './LazyVideo';

const JumboTextWrap = styled.div`
  position: relative;
  text-align: center;
  font-size: 0;
`;

const MaskedVideo = styled(LazyVideo)`
  position: absolute;
  top: 1px;
  left: 1px;
  height: calc(100% - 2px);
  width: calc(100% - 2px);

  .ReactModal__Body--open & {
    opacity: 0;
  }
`;

const VideoMask = styled.svg`
  position: relative;
  font-family: var(--secondary-font);
  text-transform: uppercase;
  font-size: ${rem(400)};
  line-height: 0.93;

  .filler {
    visibility: hidden;
  }
`;

const BGRect = styled.rect`
  fill: var(--brand-white);
`;

const BlackBox = styled.rect`
  /* needs to be black black */
  fill: #000;
`;

const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TheStory = ({
  topText,
  bottomText,
  video,
  videoId,
}) => {
  const { toggleModal } = useModal();

  const nodeRef = useRef();

  const maskTL = useRef();

  const revertTL = useRef();

  const maskRef = useCallback((node) => {
    if (!node) return;
    const bgMask = node.querySelector('.filler');
    const bgText = node.querySelector('.the-text');
    const box = node.querySelector('.black-box');
    const playButton = node.querySelector('.play-button');

    nodeRef.current = node;

    gsap.set([bgMask, bgText, box], { autoAlpha: 1, transformOrigin: '50% 50%' });
    gsap.to(bgText, { x: 1 }); // to prevent chrome render bug

    revertTL.current = gsap.timeline({
      paused: true,
      onComplete: () => { maskTL.current.progress(0).pause(); },
    })
      .to(box, { opacity: 1, duration: 2 })
      .fromTo(box,
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
        });

    maskTL.current = gsap.timeline({
      paused: true,
      onComplete: () => {
        toggleModal(videoId);
        revertTL.current.play(0);
      },
    })
      .fromTo(
        bgText,
        {
          scaleY: 1,
          scaleX: 1,
        },
        {
          scaleY: 0.333,
          scaleX: 1.333,
          duration: 0.333,
        },
        0,
      )
      .fromTo(playButton, { opacity: 1, scale: 1 }, { opacity: 0, scale: 0.5 }, 0)
      .fromTo(
        [bgMask, box],
        {
          scaleY: 0,
          scaleX: 0.5,
        },
        {
          ease: 'circ.inOut',
          scaleY: 1,
          scaleX: 1,
          duration: 0.5,
        },
        0,
      )
      .fromTo(box, { opacity: 0 }, { opacity: 1, duration: 1 }, '-=.333');

  }, [toggleModal, videoId]);

  const goFull = () => {
    maskTL.current.play(0);
    gsap.registerPlugin(ScrollToPlugin);

    gsap.to(window, {
      duration: 0.4,
      scrollTo: {
        y: nodeRef.current,
        offsetY: (window.innerHeight - nodeRef.current.getBoundingClientRect().height) / 2,
        autoKill: false,
      },
    });
  };

  useEffect(() => () => {
    if (maskTL.current) {
      maskTL.current.kill();
    }
    if (revertTL.current) {
      revertTL.current.kill();
    }
  }, []);

  return (
    <JumboTextWrap ref={maskRef}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <MaskedVideo
        muted
        loop
        playsInline
        src={video?.url}
      />
      <VideoMask viewBox="0 0 1280 720" >
        <g fillRule="evenodd">
          <mask id={`text-mask-${videoId}`}>
            <rect fill="#fff" x="0" y="0" width="1280" height="720" />
            <rect className="filler" fill="#000" x="0" y="0" width="1280" height="720" />
            <g className="the-text">
              <text fill="#000" x="640" y="345" textAnchor="middle">{topText}</text>
              <text fill="#000" x="640" y="335" textAnchor="middle" dominantBaseline="hanging">{bottomText}</text>
            </g>
          </mask>
        </g>
        <BGRect mask={`url(#text-mask-${videoId})`} x="0" y="0" width="1280" height="720" />
        <BlackBox className="black-box" x="0" y="0" width="1280" height="720" opacity="0" />

      </VideoMask>

      {videoId ?
        <StyledPlayButton
          className="play-button"
          onClick={goFull}
          label="Play video"
        />
        :
        null
      }

    </JumboTextWrap>
  );
};

TheStory.propTypes = {
  topText: PropTypes.string,
  bottomText: PropTypes.string,
  video: PropTypes.object,
  videoId: PropTypes.string,
};

export default TheStory;
