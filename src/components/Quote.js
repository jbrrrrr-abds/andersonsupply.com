import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../styles/helpers';
import { linkResolver } from '../util/prismicHelpers';
import Section from './Section';
import Container from './Container';
import Grid from './Grid';
import ServicesContainer from './services/ServicesContainer';
import LazyImg from './LazyImg';
import { Forty } from './Jumbo';
import Button from './Button';
import TextBlock from './TextBlock';

const QuoteGrid = styled(Grid)`
  grid-template-columns: 1.2fr 1fr;
  gap: 108px;

  ${props => !props.description && 'align-items: center;'};

  ${screen.below(bp.desktop, `
    grid-gap: 70px;
  `)}

  ${screen.below(bp.laptopSm, `
    grid-template-columns: 1fr 1.2fr;
  `)}

  ${screen.below(bp.tablet, `
    grid-template-columns: 1fr;
  `)}
`;

const BlockQuote = styled.blockquote`
  position: relative;
  padding-top: 54px;
  margin: 0;

  &::before,
  &::after {
    position: absolute;
    width: 30px;
    height: 20px;
    background-image: url("/images/svg/quote.svg");
    background-repeat: no-repeat;
    content: "";
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: -50px;
    right: 0;
    transform: scale(-1, -1);
  }
`;

const QuoteText = styled(Forty)`
  margin: 0;
  line-height: 1.3;
  text-transform: unset;
`;

const Caption = styled.figcaption`
  margin-top: 22px;
  color: var(--gold);
  font-family: var(--secondary-font);
  text-transform: uppercase;
  text-align: center;
`;

const ContentGrid = styled(Grid)`
  order: 2;
  align-content: space-between;

  ${screen.below(bp.desktop, `
    grid-row-gap: 90px;
  `)}

  ${screen.below(bp.tablet, `
    grid-row-gap: 45px;
    order: 1;
  `)}
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
`;

const Image = styled(LazyImg)`
  order: 1;

  ${screen.below(bp.tablet, `
    order: 2;
  `)}
`;

const Quote = ({
  image,
  quote,
  quotee,
  title,
  description,
  link,
  linkText,
}) => (
  <Section hasPadding bgColor="brand-white">
    <Container>
      <QuoteGrid as={ServicesContainer}>

        {image?.url ?
          <Image
            width={804}
            height={864}
            src={`${image.url}&w=804&h=864&fit=crop&q=85`}
            alt={image.alt}
          />
          :
          null
        }

        <ContentGrid>
          <figure>

            {quote ?
              <BlockQuote>
                <QuoteText as="p">{quote}</QuoteText>
              </BlockQuote>
              :
              null
            }

            {quotee ?
              <Caption>{quotee}</Caption>
              :
              null
            }

          </figure>

          {description ?
            <div>

              {title ?
                <h2>{title}</h2>
                :
                null
              }

              {description?.length > 0 && description[0].text !== '' ?
                <TextBlock content={description} />
                :
                null
              }

              {linkText?.url && linkText?.text !== '' ?
                <StyledButton
                  isdark
                  large
                  bgcolor="gold"
                  href={linkResolver(link)}
                >
                  {linkText}
                </StyledButton>
                :
                null
              }

            </div>
            :
            null
          }
        </ContentGrid>
      </QuoteGrid>
    </Container>
  </Section>
);

Quote.propTypes = {
  image: PropTypes.object,
  quote: PropTypes.string,
  quotee: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.array,
  link: PropTypes.object,
  linkText: PropTypes.string,
};

export default Quote;
