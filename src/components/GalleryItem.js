import React, { useRef, useCallback, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const StyledItem = styled.article`
`;

const GalleryItem = ({ itemDetails }) => {
  const { data } = itemDetails;

  return (
    <StyledItem>
      <div>{data.design_name}</div>
    </StyledItem>
  )
}

GalleryItem.propTypes = {
  itemDetails: PropTypes.object
}

export default GalleryItem;

