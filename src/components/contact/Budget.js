import React from 'react';
import styled from 'styled-components';
import Equalizer from './Equalizer';
import Watt from './Watt';

const Section = styled.section`
  background-color: var(--brand-white);
  padding: 145px 0 210px;
  position: relative;
`;

const Budget = () => (
  <Section>
    <Watt />
    <Equalizer />
  </Section>
);

export default Budget;
