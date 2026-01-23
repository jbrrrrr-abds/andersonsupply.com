import React, { useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import Container from './Container';

const GalleryGrid = styled(Container)`
  margin: var(--spacing) auto;
  display: grid;
  row-gap: var(--spacing);
  column-gap: calc(var(--spacing) / 2);
  grid-template-columns: repeat(4, 1fr);
`;
const GalleryHolder = ({ itemList }) => {

  return (
    <GalleryGrid>
      {itemList.map((item, index) => (
        <GalleryItem key={index} itemDetails={item} />
      ))}
    </GalleryGrid>
  )
}

GalleryHolder.propTypes = {
  itemList: PropTypes.Array,
}

export default GalleryHolder;
