import React, { useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import LazyImg from "./LazyImg";

const Image = styled(LazyImg)``;


const StyledItem = styled.article`
`;

const GalleryItem = ({ itemDetails }) => {
  const { data } = itemDetails;
  const width = data.image?.dimensions?.width || 0;
  const height = data.image?.dimensions?.height || 0;

  return (
    <StyledItem>
      <Image
        src={`${data.image?.url || ""}&w=${width}&h=${height}&fit=crop&q=85&f=center`}
      />
    </StyledItem>
  );
}

GalleryItem.propTypes = {
  itemDetails: PropTypes.object
}

export default GalleryItem;

