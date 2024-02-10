import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';
import BigTextWithVideo from '../BigTextWithVideo';

const StyledSection = styled(Section)`
  padding: 320px 0 var(--spacing);

  ${screen.below(bp.desktop, `
    padding-top: 240px;
  `)}

  ${screen.below(bp.laptopSm, `
    padding-top: 160px;
  `)}
`;

const Video = ({
  topText,
  bottomText,
  video,
  videoId,
}) => (
  <StyledSection bgColor="brand-white">
    <Container>
      <BigTextWithVideo
        topText={topText}
        bottomText={bottomText}
        video={video}
        videoId={videoId}
      />
    </Container>
  </StyledSection>
);

Video.propTypes = {
  topText: PropTypes.string,
  bottomText: PropTypes.string,
  video: PropTypes.object,
  videoId: PropTypes.string,
};

export default Video;
