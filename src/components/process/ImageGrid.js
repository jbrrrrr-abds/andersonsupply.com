import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import screen from 'superior-mq';
import { bp, hover } from '../../styles/helpers';
import { linkResolver } from '../../util/prismicHelpers';
import Section from '../Section';
import Container from '../Container';
import Grid from '../Grid';
import LazyImg from '../LazyImg';
import { Ninety } from '../Jumbo';
import InlineLink from '../InlineLink';
import Bolt from '../Bolt';
import TextBlock from '../TextBlock';

const StyledSection = styled(Section)`
  text-align: center;

  p {
    max-width: 827px;
    margin: auto;
  }
`;

const StyledGrid = styled(Grid)`
  grid-gap: 0;
  max-width: var(--customer-container-width);
  margin: 74px auto auto;

  ${screen.above(bp.laptopSm, `
    grid-template-columns: 2fr 1.4fr;
  `)}

  ${screen.below(bp.laptopSm, `
    grid-template-columns: repeat(2, 1fr);
  `)}
`;

const TwoColumnGrid = styled(Grid)`
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0;
`;

const Illustration = styled.div`
  position: relative;
  background-color: var(--gold);
  overflow: hidden;

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

const CTA = styled(InlineLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--gold);
  background-color: var(--brand-black);
  font-size: ${rem(14)};
  text-transform: uppercase;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

  svg {
    max-width: 19px;
    margin-bottom: 10px;
  }

  ${hover(`
    color: var(--white);
    background-color: var(--gold);
  `)}
`;

const ImageGrid = ({
  title,
  description,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  graphic,
  link,
  linkText,
}) => (
  <StyledSection hasPadding>
    <Container>

      {title ?
        <Ninety as="h2">{title}</Ninety>
        :
        null
      }

      {description ?
        <TextBlock content={description} />
        :
        null
      }

      <StyledGrid>
        <TwoColumnGrid>

          {imageOne ?
            <LazyImg
              src={`${imageOne?.url}&w=412&h=576&fit=crop&q=85&fm=pjpg`}
              alt={imageOne?.alt}
              width={412}
              height={576}
            />
            :
            null
          }

          {imageTwo ?
            <LazyImg
              src={`${imageTwo?.url}&w=412&h=576&fit=crop&q=85&fm=pjpg`}
              alt={imageTwo?.alt}
              width={412}
              height={576}
            />
            :
            null
          }

        </TwoColumnGrid>
        <TwoColumnGrid>

          <Illustration>

            {/* Running into a linter error here with chaining */}
            {graphic ?
              <img
                src={graphic.url}
                alt={graphic.alt}
              />
              :
              null
            }

          </Illustration>

          {imageThree ?
            <LazyImg
              src={`${imageThree?.url}&w=285&h=286&fit=crop&q=85&fm=pjpg`}
              alt={imageThree?.alt}
              width={285}
              height={286}
            />
            :
            null
          }

          <div>

            {link ?
              <CTA href={linkResolver(link)}>
                <Bolt />
                <span>{linkText}</span>
              </CTA>
              :
              null
            }

          </div>

          {imageFour ?
            <LazyImg
              src={`${imageFour?.url}&w=285&h=286&fit=crop&q=85&fm=pjpg`}
              alt={imageFour?.alt}
              width={285}
              height={286}
            />
            :
            null
          }

        </TwoColumnGrid>
      </StyledGrid>
    </Container>
  </StyledSection>
);

ImageGrid.propTypes = {
  title: PropTypes.string,
  description: PropTypes.array,
  imageOne: PropTypes.object,
  imageTwo: PropTypes.object,
  imageThree: PropTypes.object,
  imageFour: PropTypes.object,
  graphic: PropTypes.object,
  link: PropTypes.object,
  linkText: PropTypes.string,
};

export default ImageGrid;
