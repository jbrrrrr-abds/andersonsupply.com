/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import screen from 'superior-mq';
import { rem } from 'polished';
import { bp } from '../styles/helpers';

const JumboSpan = styled.span`
  display: block;
  font-family: var(--secondary-font);
  text-transform: uppercase;
`;

export const FourHundred = styled(JumboSpan)`
  font-size: ${rem(400)};
  line-height: .93;

  ${screen.below(bp.desktopSm, `
    font-size: ${rem(300)};
  `)}

  ${screen.below(bp.laptopSm, `
    font-size: ${rem(200)};
  `)}
`;

export const TwoTen = styled(JumboSpan)`
  font-size: ${rem(210)};

  ${screen.below(bp.desktopSm, `
    font-size: ${rem(156)};
  `)}
`;

export const OneSixty = styled(JumboSpan)`
  font-size: ${rem(160)};
  line-height: 1.0625;

  ${screen.below(bp.desktopSm, `
    font-size: ${rem(120)};
  `)}

  ${screen.below(bp.portrait, `
    font-size: ${rem(68)};
  `)}
`;

export const OneThirty = styled(JumboSpan)`
  font-size: ${rem(130)};

  ${screen.below(bp.desktopSm, `
    font-size: ${rem(100)};
  `)}

  ${screen.below(bp.portrait, `
    font-size: ${rem(65)};
  `)}
`;

export const Ninety = styled(JumboSpan)`
  font-size: ${rem(90)};
  line-height: 1;

  ${screen.below(bp.desktopSm, `
    font-size: ${rem(68)};
  `)}
`;

export const Sixty = styled(JumboSpan)`
  font-size: ${rem(60)};
  line-height: 1;
`;

export const Forty = styled(JumboSpan)`
  font-size: ${rem(40)};

  ${screen.below(bp.mobile, `
    font-size: ${rem(28)};
  `)}
`;

export const TwentyFive = styled(JumboSpan)`
  font-size: ${rem(25)};
`;

export const Fifteen = styled(JumboSpan)`
  font-size: ${rem(15)};
`;
