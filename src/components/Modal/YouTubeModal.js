/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import styled from 'styled-components';
import { absoCenter } from '../../styles/helpers';

const VidWrap = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%; /* assuming 16:9 ratio */
  position: relative;
  height: 0;

  iframe {
    height: 100%;
    width: 100%;
    max-height: 90vh;
    ${absoCenter()}
  }
`;

const YouTubeModal = ({ youTubeID }) => (
  <VidWrap>
    <iframe
      src={`https://www.youtube.com/embed/${youTubeID}?rel=0&autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </VidWrap>
);

export default YouTubeModal;
