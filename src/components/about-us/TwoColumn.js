import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../styles/helpers';
import Section from '../Section';
import Grid from '../Grid';
import LazyImg from '../LazyImg';
import TextBlock from '../TextBlock';

const StyledGrid = styled(Grid)`
  gap: 0;

  ${screen.above(bp.tablet, `
    grid-template-columns: repeat(2, 1fr);
  `)}
`;

const ImageColumn = styled.div`
  position: relative;
`;

const ContentColumn = styled.div`
  padding: var(--spacing) 146px;

  ${screen.below(bp.desktop, `
    padding: var(--spacing) 110px;
  `)}

  ${screen.below(bp.laptop, `
    padding: var(--spacing) 60px;
  `)}

  ${screen.below(bp.tablet, `
    padding: var(--spacing) var(--container-gutter);
  `)}
`;

const AbsoluteImage = styled(LazyImg)`
  ${screen.above(bp.tablet, `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

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

const TwoColumn = ({
  title,
  description,
  image,
}) => (
  <Section bgColor="brand-white">
    <StyledGrid>
      <ImageColumn>

        {image ?
          <AbsoluteImage
            src={`${image?.url}&w=900&h=900&fit=crop&q=85&f=center`}
            alt={image?.alt}
            width={900}
            height={900}
          />
          :
          null
        }

      </ImageColumn>
      <ContentColumn>

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
      </ContentColumn>
    </StyledGrid>
  </Section>
);

TwoColumn.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  image: PropTypes.object,
};

export default TwoColumn;
