import styled from 'styled-components';

const Section = styled.section`
  ${props => props.hasPadding && `
    padding: var(--spacing) 0;
  `}

  ${props => props.bgColor && `
    background-color: var(--${props.bgColor});
  `}
`;

export default Section;
