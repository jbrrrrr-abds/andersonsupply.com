import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';
import BigTextWithVideo from '../BigTextWithVideo';
import TextBlock from '../TextBlock';

const StyledSection = styled(Section)`
  padding: var(--spacing) 0 46px;
`;

const Content = styled.div`
  max-width: 500px;
  margin: 88px auto auto;
  text-align: center;

  p:last-of-type { margin-bottom: 0; }

  ${screen.below(bp.desktop, `
    margin-top: 66px;
  `)}

  ${screen.below(bp.laptopSm, `
    margin-top: 44px;
  `)}
`;

const Video = ({
  title,
  description,
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

      {title || description ?
        <Content>

          {title ?
            <h2>{title}</h2>
            :
            null
          }

          {description ?
            <TextBlock content={description} />
            :
            null
          }

        </Content>
        :
        null
      }

    </Container>
  </StyledSection>
);

Video.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  topText: PropTypes.string,
  bottomText: PropTypes.string,
  video: PropTypes.object,
  videoId: PropTypes.string,
};

export default Video;
