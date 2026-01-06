import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  grid-template-columns: ${((props) => props.colSpan, "1fr" || "12, 1fr")};
  display: grid;
  gap: var(--spacing);
`;

Grid.propTypes = {
  colSpan: PropTypes.number,
  styles: PropTypes.string,
};

export default Grid;
