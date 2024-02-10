import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  position: ${props => props.position || 'relative'};
  display: grid;
  grid-column-gap: 20px;
`;

Grid.propTypes = {
  position: PropTypes.oneOf(['static', 'relative', 'absolute']),
  styles: PropTypes.string,
};

export default Grid;
