import styled from 'styled-components';
import PropTypes from 'prop-types';

const VisuallyHidden = styled.div`
  position: absolute;
  top: 0;
  left: -999px;
  pointer-events: none;
  clip-path: inset(0 100% 100% 0);
`;

VisuallyHidden.propTypes = {
  as: PropTypes.string,
};

export default VisuallyHidden;
