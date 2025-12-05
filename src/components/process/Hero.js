import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import UnstyledButton from '../UnstyledButton';
import { bp, hover } from '../../styles/helpers';
import { useModal } from '../Modal/GullsModal';
import Section from '../Section';
import Container from '../Container';
import { Ninety } from '../Jumbo';
import PlayButton from '../PlayButton';
import RatioImg from '../RatioImg';
import TextBlock from '../TextBlock';

const StyledSection = styled(Section)`
  position: relative;
  z-index: 1;
  padding: 320px 0 var(--spacing);
  color: var(--brand-white);

  h1 {
    margin-bottom: 36px;
    color: var(--gold);
  }

  p {
    max-width: 500px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ${screen.below(bp.desktopSm, `
    padding-top: 240px;
  `)}

  ${screen.below(bp.laptopSm, `
    padding-bottom: 0;
  `)}

  ${screen.below(bp.portrait, `
    padding-top: 160px;
  `)}
`;

const JumboText = styled.h2`
  max-width: 770px;
`;

const Image = styled.div`
  position: relative;
  width: 967px;
  height: 580px;
  margin: auto;

  img {
    z-index: -1;
    opacity: .75;
    filter: grayscale(100%);
  }

  ${screen.above(bp.laptopSm, `
    position: absolute;
    right: var(--container-gutter);
    bottom: 114px;
  `)}

  ${screen.below(bp.desktop, `
    width: 725px;
    height: 435px;
  `)}

  ${screen.below(bp.laptopSm, `
    width: auto;
    height: auto;
    margin-top: 75px;
  `)}
`;

const Button = styled(PlayButton)`
  && {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Arrow = styled.div`
  margin-top: 80px;

  button {
    cursor: pointer;
    transition: color 300ms ease;
    color: currentcolor;
    padding: 0 10px;
    margin-left: -10px;

    ${hover(`
      color: var(--gold);
    `)}
  }

  ${screen.below(bp.laptopSm, `
    display: none;
  `)}
`;

const ScrollTarget = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Content = styled.div`
  padding-left: var(--customer-container-gutter);
`;

const Hero = ({
  title,
  subTitle,
  description,
  image,
  videoId,
}) => {
  const { toggleModal } = useModal();

  const scrollToProcess = () => {
    gsap.registerPlugin(ScrollToPlugin);

    gsap.to(window, {
      duration: 0.4,
      ease: 'power2.inOut',
      scrollTo: '#our-process',
    });
  };

  return (
    <StyledSection bgColor="brand-black">
      <Container>
        <Content>
          {title ? <h1>{title}</h1> : null}

          {subTitle ? <JumboText as={Ninety}>{subTitle}</JumboText> : null}

          {description ? <TextBlock content={description} /> : null}

          <Arrow>
            <UnstyledButton
              onClick={scrollToProcess}
              aria-label="Go to next section"
            >
              <svg
                width="16"
                height="36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 27.5l-1.41-1.41L9 31.67V0H7v31.67l-5.58-5.59L0 27.5l8 8 8-8z"
                  fill="currentColor"
                />
              </svg>
            </UnstyledButton>
          </Arrow>
        </Content>
      </Container>

      <Image alt="">
        {image ? (
          <RatioImg
            src={`${image.url}&w=967&h=580&fit=crop&q=85&fm=pjpg`}
            alt={image.alt}
            width={967}
            height={580}
          />
        ) : null}

        {videoId ? (
          <Button
            onClick={() => {
              toggleModal(videoId);
            }}
            aria-label="Play video"
          />
        ) : null}
      </Image>
      <ScrollTarget id="our-process" />
    </StyledSection>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  description: PropTypes.array,
  image: PropTypes.object,
  videoId: PropTypes.string,
};

export default Hero;
