import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../styles/helpers';
import Grid from './Grid';
import LazyImg from './LazyImg';

const StyledGrid = styled(Grid)`
  grid-template-columns: ${props => props.imageLeft ? '1.26fr 1fr' : '1fr 1.26fr'};
  grid-gap: 170px;
  align-items: center;

  ${screen.below(bp.desktop, `
    grid-gap: 128px;
  `)}

  ${screen.below(bp.desktopSm, `
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 85px;
  `)}

  ${screen.below(bp.tablet, `
    grid-template-columns: 1fr;
    grid-gap: 40px;
    align-items: start;
  `)}
`;

const Image = styled(LazyImg)`
  order: ${props => props.imageLeft ? '1' : '2'};

  ${screen.below(bp.tablet, `
    order: 2;
  `)}
`;

const Content = styled.div`
  order: ${props => props.imageLeft ? '2' : '1'};

  ${screen.below(bp.tablet, `
    order: 1;
  `)}
`;

const ImageWithText = ({
  imageLeft,
  children,
  className,
  image,
}) => {
  const width = image?.dimensions?.width || 0;
  const height = image?.dimensions?.height || 0;

  return (
    <StyledGrid imageLeft={imageLeft} className={className}>
      {image?.url ? (
        <Image
          width={width}
          height={height}
          src={`${image?.url || ""}&w=${width}&h=${height}&fit=crop&q=85&f=center`}
          alt={image?.alt || ""}
          imageLeft={imageLeft}
        />
      ) : null}

      {children ? <Content imageLeft={imageLeft}>{children}</Content> : null}
    </StyledGrid>
  );
};

export default ImageWithText;
