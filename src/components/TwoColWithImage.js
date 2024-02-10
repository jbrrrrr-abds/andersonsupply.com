import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { linkResolver } from '../util/prismicHelpers';
import { bp } from '../styles/helpers';
import Section from './Section';
import Container from './Container';
import Grid from './Grid';
import LazyImg from './LazyImg';
import Button from './Button';
import TextBlock from './TextBlock';

const StyledGrid = styled(Grid)`
  max-width: 1560px;
  margin: auto;

  ${screen.below(bp.desktopSm, `
    grid-gap: 40px;
  `)}

  ${screen.above(bp.laptopSm, `
    grid-template-columns: 1fr 1.4fr;
    align-items: center;
  `)}

  ${screen.below(bp.laptopSm, `
    grid-row-gap: 52px;
    text-align: center;
  `)}
`;

const Content = styled.div`
  order: 1;
  max-width: 440px;

  ${screen.below(bp.laptopSm, `
    order: 2;
    margin: auto;
  `)}
`;

const Image = styled(LazyImg)`
  order: 2;

  ${screen.below(bp.laptopSm, `
    order: 1;
  `)}
`;

const StyledButton = styled(Button)`
  margin-top: 14px;
`;

const TwoColWithImage = ({
  headline,
  description,
  image,
  link,
  linkText,
}) => (
  <Section hasPadding bgColor="brand-white">
    <Container>
      <StyledGrid>
        <Content>

          {headline ?
            <h2>{headline}</h2>
            :
            null
          }

          {description ?
            <TextBlock content={description} />
            :
            null
          }

          {link ?
            <StyledButton
              href={linkResolver(link)}
              isdark
              bgcolor="gold"
              large
            >
              {linkText}
            </StyledButton>
            :
            null
          }

        </Content>

        {image ?
          <Image
            width={897}
            height={585}
            src={`${image.url}?w=897&h=585&fit=fill&q=85&f=center`}
            alt={image.alt}
          />
          :
          null
        }

      </StyledGrid>
    </Container>
  </Section>
);

TwoColWithImage.propTypes = {
  headline: PropTypes.string,
  description: PropTypes.array,
  image: PropTypes.object,
  link: PropTypes.object,
  linkText: PropTypes.string,
};

export default TwoColWithImage;
