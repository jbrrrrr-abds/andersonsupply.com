import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { bp } from '../../styles/helpers';
import { linkResolver } from '../../util/prismicHelpers';
import Carousel, { useCarousel } from '../Carousel';
import Section from '../Section';
import UnstyledList from '../UnstyledList';
import RatioImg from '../RatioImg';
import { Ninety } from '../Jumbo';
import Button from '../Button';
import Grid from '../Grid';
import TextBlock from '../TextBlock';

const StyledSection = styled(Section)`
  padding: var(--spacing) 0 94px;

  ${screen.below(bp.mobile, `
    padding-bottom: 20px;
  `)}
`;

const HeadlineWrapperContainer = styled.div`
  position: relative;
`;

const Headline = styled(Section)`
  top: -66px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;

  ${screen.below(bp.desktop, `
    top: -50px;
  `)}
`;

const HeadlineText = styled(Ninety)`
  width: 30rem;

  ${screen.below(bp.desktopSm, `
    width: 23rem;
  `)}
`;

const List = styled(UnstyledList)`
  width: 150%;
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 60px;
`;

const OurWorkFooter = styled(Grid)`
  grid-template-columns: 324px 1fr;
  column-gap: 74px;
  margin-top: 40px;
  opacity: 0;
  transition: opacity 300ms ease-in-out;

  p {
    margin-bottom: 35px;
  }

  ${screen.between(bp.tablet, bp.desktopSm, `
    grid-template-columns: 244px 1fr;
    grid-column-gap: 40px;
  `)}

  ${screen.below(bp.tablet, `
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    text-align: center;
  `)}
`;

const Slide = styled(Carousel.Slide)`
  width: 62%;
  margin-right: 174px;

  && {
    opacity: 1;
  }

  ${screen.below(bp.desktopLg, `
    margin-right: 130px;
  `)}

  ${screen.below(bp.desktop, `
    margin-right: 88px;
  `)}

  ${screen.below(bp.desktopSm, `
    width: 71%;
    margin-right: 44px;
  `)}

  &.is-selected {
    ${OurWorkFooter} {
      opacity: 1;
    }
  }
`;

const OurWorkFooterLogo = styled(RatioImg)`
  margin-top: 20px;

  ${screen.below(bp.tablet, `
    margin: auto;
  `)}
`;

const OurWorkBlurb = styled.div`
  margin-bottom: 35px;
`;

const RecentWork = ({ slides = [] }) => {
  const { flickity } = useCarousel();

  const videoText = Array.from(Array(5), () => 'RECENT WORK');

  if (slides.length < 1) return null;

  return (
    <StyledSection hasPadding bgColor="brand-white">
      <HeadlineWrapperContainer>
        <Headline aria-hidden="true">
          {videoText.length > 0 ?
            <List>
              {videoText.map((item, index) => (
                // eslint-disable-next-line
                <li key={index}>
                  <HeadlineText>{item}</HeadlineText>
                </li>
              ))}
            </List>
            :
            null
          }
        </Headline>
        <Wrapper>
          <Carousel ref={flickity}>

            {slides.map((slide, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Slide key={index}>

                {slide?.recent_work_image ?
                  <RatioImg
                    width={1110}
                    height={672}
                    src={slide.recent_work_image?.url}
                    alt={slide.recent_work_image?.alt}
                  />
                  :
                  null
                }

                <OurWorkFooter>

                  {slide?.recent_work_logo ?
                    <OurWorkFooterLogo
                      src={slide.recent_work_logo?.url}
                      alt={slide.recent_work_logo?.alt}
                    />
                    :
                    null
                  }

                  <OurWorkBlurb>

                    {slide?.recent_work_description ?
                      <TextBlock content={slide.recent_work_description} />
                      :
                      null
                    }

                    {slide?.recent_work_link ?
                      <Button
                        large
                        bgcolor="gold"
                        isdark
                        hasmargin
                        href={linkResolver(slide.recent_work_link)}
                      >
                        {slide.recent_work_link_text}
                      </Button>
                      :
                      null
                    }

                  </OurWorkBlurb>
                </OurWorkFooter>
              </Slide>
            ))}

          </Carousel>
        </Wrapper>
      </HeadlineWrapperContainer>
    </StyledSection>
  );
};

RecentWork.propTypes = {
  slides: PropTypes.array,
};

export default RecentWork;
