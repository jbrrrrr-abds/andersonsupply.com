/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

const StyledVideo = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LazyVideo = ({ src, style, className, ...rest }) => {
  const videoLoaded = useRef(false);
  const [videoWrapper, wrapperInView] = useInView({
    rootMargin: '100%',
    triggerOnce: true,
  });

  const [videoElement, inView, videoElementEntry] = useInView();

  const playVideo = (el) => {
    if (!el) return;

    const playPromise = el.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Automatic playback started!
        })
        .catch(() => {
          // empty catch prevents console errors from showing
        });
    }
  };

  const pauseVideo = (el, resetTime = false) => {
    if (!el) return;

    el.pause();

    if (resetTime) {
      el.currentTime = 0;
    }
  };

  useEffect(() => {
    const video = videoElementEntry?.target;

    // make sure video exists
    if (video) {
      // load video
      if (wrapperInView && !videoLoaded.current) {
        video.load();
        videoLoaded.current = true;
      }

      // start/stop based on whether or not video is inView
      if (inView) {
        playVideo(video);
      } else {
        pauseVideo(video);
      }
    }
  }, [inView, wrapperInView, videoElementEntry]);

  return (
    <div style={style} className={className} ref={videoWrapper}>
      <StyledVideo playsInline preload="none" ref={videoElement} {...rest}>
        <source src={src} />
      </StyledVideo>
    </div>
  );
};

LazyVideo.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default LazyVideo;
