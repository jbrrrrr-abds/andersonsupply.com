import React from 'react';
import styled from 'styled-components';
import Grid from './Grid';
import LazyImg from './LazyImg';

const ImageGrid = styled(Grid)`
  grid-template-columns: ${props => props.smallImageLeft ? '1fr 2.5fr' : '2.5fr 1fr'};
  gap: 30px;
`;

const SmallImage = styled(LazyImg)`
  order: ${props => props.smallImageLeft ? '1' : '2'};
`;

const BigImage = styled(LazyImg)`
  order: ${props => props.smallImageLeft ? '2' : '1'};
`;

const OffsetImageGrid = ({
  smallImageLeft,
  className,
  smallImage,
  bigImage,
}) => (
  <ImageGrid smallImageLeft={smallImageLeft} className={className}>

    {smallImage?.url ?
      <SmallImage
        width={397}
        height={544}
        src={`${smallImage.url}&w=397&h=544&fit=crop&q=85&f=center`}
        smallImageLeft={smallImageLeft}
        alt={smallImage.alt}
      />
      :
      null
    }

    {bigImage?.url ?
      <BigImage
        width={968}
        height={544}
        src={`${bigImage.url}&w=968&h=544&fit=crop&q=85&f=center`}
        smallImageLeft={smallImageLeft}
        alt={bigImage.alt}
      />
      :
      null
    }

  </ImageGrid>
);

export default OffsetImageGrid;
