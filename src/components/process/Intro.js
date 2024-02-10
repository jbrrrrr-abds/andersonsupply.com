import React from 'react';
import PropTypes from 'prop-types';
import screen from 'superior-mq';
import styled from 'styled-components';
import { bp } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';
import TextBlock from '../TextBlock';

const StyledSection = styled(Section)`
  position: relative;
  overflow: hidden;

  p {
    max-width: 712px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 718px;
    height: 517px;

    ${screen.below(bp.laptopSm, `
      width: 360px;
      height: 258px;
    `)}

    ${screen.below(bp.mobile, `
      top: unset;
      bottom: 0;
    `)}
  }

  ${screen.below(bp.mobile, `
    padding-bottom: 165px;
  `)}
`;

const Content = styled.div`
  padding-left: var(--customer-container-gutter);
`;

const Intro = ({
  title,
  description,
  graphic,
}) => {

  if (!graphic) return null;

  return (
    <StyledSection hasPadding>
      <Container>
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

        {graphic ?
          <img
            src={graphic.url}
            alt={graphic.alt}
          />
          :
          null
        }

      </Container>
    </StyledSection>
  );
};

Intro.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  graphic: PropTypes.object,
};

export default Intro;
