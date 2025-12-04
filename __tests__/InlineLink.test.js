import React from 'react';
import { render, waitFor } from '@testing-library/react';
import InlineLink from '../src/components/InlineLink';

test('InlineLink with relative internal url', async () => {
  const href = '/greeting';
  const text = 'My relative link';
  const { findByText } = render(<InlineLink href={href}>{text}</InlineLink>);
  const linkNode = await waitFor(() => findByText(text));

  expect(linkNode).toHaveTextContent(text);
  expect(linkNode).toHaveAttribute('href', href);
});

// change to href SITE_URL
test('InlineLink with absolute internal url', async () => {
  const href = `https://${process.env.SITE_URL}/about`;
  const text = 'My absolute internal link';
  const { findByText } = render(<InlineLink href={href}>{text}</InlineLink>);
  const linkNode = await waitFor(() => findByText(text));

  expect(linkNode).toHaveTextContent(text);
  expect(linkNode).toHaveAttribute('href', '/about');
});

test('InlineLink with external url', async () => {
  const href = 'https://google.com';
  const text = 'My external link';
  const { findByText } = render(<InlineLink href={href}>{text}</InlineLink>);

  const linkNode = await waitFor(() => findByText(text));

  expect(linkNode).toHaveTextContent(text);
  expect(linkNode).toHaveAttribute('href', href);
  expect(linkNode).toHaveAttribute('target', '_blank');
  expect(linkNode).toHaveAttribute('rel', 'noreferrer noopener');
});
