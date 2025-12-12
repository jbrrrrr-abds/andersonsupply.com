import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { rem } from 'polished';
import { linkResolver } from '../../util/prismicHelpers';
import { bp, hover } from '../../styles/helpers';
import Section from '../Section';
import Container from '../Container';
import LazyImg from '../LazyImg';
import Grid from '../Grid';
import InlineLink from '../InlineLink';
import Bolt from '../Bolt';

const StyledSection = styled(Section)`
  text-align: center;

  p {
    max-width: 827px;
    margin: auto;
  }
`;

const StyledGrid = styled(Grid)`
  gap: 0;

  ${screen.above(bp.tablet, `
    grid-template-columns: 1.4fr 1fr;
  `)}
`;

const TwoColumnGrid = styled(Grid)`
  grid-template-columns: 1fr 1fr;
  gap: 0;
`;

const SpanTwo = styled(LazyImg)`
  grid-column: span 2;
`;

const CTA = styled(InlineLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--gold);
  background-color: var(--brand-white);
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
  images = [],
  link,
  linkText,
}) => {
  if (images.length < 1) return null;

  const imageOne = images[0]?.image;
  const imageTwo = images[1]?.image;
  const imageThree = images[2]?.image;
  const imageFour = images[3]?.image;
  const imageFive = images[4]?.image;
  const imageSix = images[5]?.image;
  const imageSeven = images[6]?.image;

  return (
    <StyledSection bgColor="brand-white">
      <Container>
        <StyledGrid>
          <TwoColumnGrid>

            {imageOne ?
              <LazyImg
                src={`${imageOne.url}&w=412&h=686&fit=crop&q=85&f=center`}
                alt={imageOne.alt}
                width={412}
                height={686}
              />
              :
              null
            }

            {imageTwo ?
              <LazyImg
                src={`${imageTwo.url}&w=412&h=686&fit=crop&q=85&f=center`}
                alt={imageTwo.alt}
                width={412}
                height={686}
              />
              :
              null
            }

            {imageThree ?
              <SpanTwo
                src={`${imageThree.url}&w=824&h=465&fit=crop&q=85&f=center`}
                alt={imageThree.alt}
                width={824}
                height={465}
              />
              :
              null
            }

          </TwoColumnGrid>
          <TwoColumnGrid>

            {imageFour ?
              <LazyImg
                src={`${imageFour.url}&w=285&h=285&fit=crop&q=85&f=center`}
                alt={imageFour.alt}
                width={285}
                height={285}
              />
              :
              null
            }

            {imageFive ?
              <LazyImg
                src={`${imageFive.url}&w=285&h=285&fit=crop&q=85&f=center`}
                alt={imageFive.alt}
                width={285}
                height={285}
              />
              :
              null
            }

            {link ?
              <div>
                <CTA href={linkResolver(link)}>
                  <Bolt />
                  <span>{linkText}</span>
                </CTA>
              </div>
              :
              null
            }

            {imageSix ?
              <LazyImg
                src={`${imageSix.url}&w=285&h=285&fit=crop&q=85&f=center`}
                alt={imageSix.alt}
                width={285}
                height={285}
              />
              :
              null
            }

            {imageSeven ?
              <SpanTwo
                src={`${imageSeven.url}&w=572&h=572&fit=crop&q=85&f=center`}
                alt={imageSeven.alt}
                width={572}
                height={572}
              />
              :
              null
            }

          </TwoColumnGrid>
        </StyledGrid>
      </Container>
    </StyledSection>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.array,
  link: PropTypes.object,
  linkText: PropTypes.string,
};

export default ImageGrid;
