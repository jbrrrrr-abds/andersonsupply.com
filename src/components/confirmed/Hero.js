import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp, hover } from 'styles/helpers';
import { linkResolver } from 'util/prismicHelpers';
import Section from 'components/Section';
import Container from 'components/Container';
import { OneThirty } from 'components/Jumbo';
import Button from 'components/Button';
import AbsoluteImage from 'components/AbsoluteImage';
import TextBlock from 'components/TextBlock';
import InlineLink from 'components/InlineLink';

const StyledSection = styled(Section)`
  position: relative;
  z-index: 1;
  padding: 418px 0 800px;
  color: var(--white);
  text-align: center;

  h1 {
    max-width: 1010px;
    margin: auto auto 34px;
  }

  h2 {
    font-size: 16px;
  }

  p {
    max-width: 880px;
    margin: auto;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  img {
    z-index: -1;
  }

  ${screen.below(
    bp.desktop,
    `
    padding: 314px 0 360px;
  `,
  )}

  ${screen.below(
    bp.desktopSm,
    `
    padding: 210px 0 240px;
  `,
  )}
`;

const Received = styled.div`
  max-width: 330px;
  padding: 20px;
  margin: auto auto 116px;
  border: 3px solid var(--gold);

  span {
    display: block;
  }

  ${screen.below(bp.desktopSm, `
    margin-bottom: 88px;
  `)}

  ${screen.below(bp.laptopSm, `
    margin-bottom: 58px;
  `)}
`;

const LinkWrap = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  justify-content: center;
`;

const StyledLink = styled(InlineLink)`
  color: var(--gold);
  text-decoration: underline;

  ${hover('color: var(--brand-white)')}
`;

const Hero = ({ content }) => (
  <StyledSection bgColor="brand-black">
    <Container>
      <Received>
        <img src="/images/contact/check.svg" alt="" />
        <span>Submission received</span>
      </Received>

      {content?.hero_headline ?
        <OneThirty as="h1">{content.hero_headline}</OneThirty>
        :
        null
      }

      {content?.hero_description ?
        <TextBlock content={content.hero_description} />
        :
        null
      }

      <LinkWrap>
        {content?.hero_link ?
          <Button
            href={linkResolver(content?.hero_link)}
            large
            hasmargin
            isdark
            bgcolor="gold"
          >
            {content?.hero_link_text}
          </Button>
          :
          null
        }

        {content?.hero_secondary_link
          ?
            <StyledLink href={linkResolver(content.hero_secondary_link)}>
              {content.hero_secondary_link_text}
            </StyledLink>
          : null
        }
      </LinkWrap>

    </Container>

    {content?.hero_image?.url ?
      <AbsoluteImage
        src={content.hero_image.url}
        alt={content.hero_image.alt}
      />
      :
      null
    }

  </StyledSection>
);

export default Hero;
