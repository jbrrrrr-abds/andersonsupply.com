import '@testing-library/jest-dom';
import { render, screen, waitForElement } from '@testing-library/react';
import Index from '../src/pages/index.js';

  test('Index should render', () => {
    render(<Index />)
  })
