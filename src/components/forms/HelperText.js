import styled from 'styled-components';
import { rem } from 'polished';

const HelperText = styled.div`
  margin-top: 8px;

  p {
    margin: 0;
    line-height: 1.25;
    font-size: ${rem(14)};
    font-weight: 500;
    font-style: italic;
  }
`;

HelperText.Text = styled.p`
  color: var(--gray-text);
`;

HelperText.Error = styled.p`
  padding-left: 8px;
  border-left: 2px solid var(--error-red);
  color: var(--error-red);
`;

export default HelperText;
