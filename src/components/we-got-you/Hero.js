import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import screen from "superior-mq";
import { bp } from "../../styles/helpers";
import Section from "../Section";
import Container from "../Container";

const StyledSection = styled(Section)`
  position: relative;
  z-index: 1;
  padding: 320px 0 var(--spacing);
  color: var(--brand-white);
  background: var(--brand-black);

  .hero {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto 5rem auto;
    text-align: center;
    padding: 0 30px;
    img {
      max-width: 316px;
      margin: 10px auto 40px auto;
      @media screen and (max-width: 1080px) {
        max-width: 70vw;
        margin: 2vw auto 4vw auto;
      }
    }
    @media screen and (max-width: 1080px) {
      padding: 0 5vw;
    }
  }

  h1 {
    font-family: var(--tertiary-font);
    font-size: 4rem;
    line-height: 1.2;
    font-weight: 900;
    margin-bottom: 20px;
    @media screen and (max-width: 1080px) {
      font-size: 12vw;
    }
  }

  h2 {
    font-family: var(--tertiary-font);
    font-size: 2.4rem;
    line-height: 1.2;
    @media screen and (max-width: 1080px) {
      font-size: 8vw;
    }
  }

  h3 {
    font-family: var(--tertiary-font);
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 20px;
    @media screen and (max-width: 1080px) {
      font-size: 12vw;
      margin-bottom: 3vw;
    }
  }

  h4 {
    font-family: var(--tertiary-font);
    font-size: 2.4rem;
    line-height: 1.2;
    padding-bottom: 200px;
    @media screen and (max-width: 800px) {
      font-size: 8vw;
    }
  }

  p {
    text-align: center;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  ${screen.below(
    bp.desktopSm,
    `
    padding-top: 240px;
  `,
  )}

  ${screen.below(
    bp.laptopSm,
    `
    padding-bottom: 0;
  `,
  )}

  ${screen.below(
    bp.portrait,
    `
    padding-top: 160px;
  `,
  )}
`;

const Image = styled.div`
  position: relative;
  width: 967px;
  height: 580px;
  margin: auto;

  img {
    z-index: -1;
    opacity: 0.75;
    filter: grayscale(100%);
  }

  ${screen.above(
    bp.laptopSm,
    `
    position: absolute;
    right: var(--container-gutter);
    bottom: 114px;
  `,
  )}

  ${screen.below(
    bp.desktop,
    `
    width: 725px;
    height: 435px;
  `,
  )}

  ${screen.below(
    bp.laptopSm,
    `
    width: auto;
    height: auto;
    margin-top: 75px;
  `,
  )}
`;

const Content = styled.div`
  padding-left: var(--customer-container-gutter);
`;

const Hero = ({ content }) => {
  return (
    <main>
      <StyledSection>
        <Container>
          <div className="hero">
            {content?.title ? <h1>{content.title[0].text}</h1> : null}
            {content?.subtitle ? <h2>{content.subtitle[0].text}</h2> : null}
            {content?.main_image ? (
              <img src={content.main_image.url} alt={content.main_image.alt} />
            ) : null}
            {content?.text_line_1 ? (
              <h3>{content.text_line_1[0].text}</h3>
            ) : null}
            {content?.text_line_2 ? (
              <h4>{content.text_line_2[0].text}</h4>
            ) : null}
          </div>
        </Container>
      </StyledSection>
    </main>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  mainImage: PropTypes.array,
  textLine1: PropTypes.object,
  textLine2: PropTypes.string,
};

export default Hero;
