import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import { rem } from 'polished';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { linkResolver } from '../util/prismicHelpers';
import { bp, hover } from '../styles/helpers';
import Container from './Container';
import Grid from './Grid';
import InlineLink from './InlineLink';
import UnstyledList from './UnstyledList';
import { OneSixty } from './Jumbo';
import Logo from './Logo';
import LazyImg from './LazyImg';
import Button from './Button';

const SiteFooter = styled.footer`
  --footer-width: 725px;

  padding: var(--spacing) 0;
  color: var(--brand-white);
  background-color: var(--brand-black);
  overflow: hidden;

  a {
    color: var(--gold);
    transition: color 200ms ease;

    ${hover(`
      color: var(--brand-white);
    `)}
  }
`;

const ContentContainer = styled.div`
  grid-template-columns: 1fr 405px;
  max-width: var(--footer-width);
  margin: auto;

  ${screen.below(
    bp.tablet,
    `
    grid-template-columns: 1fr 1.2fr;
  `,
  )}
`;

const StyledAddress = styled.address`
  order: 1;
  font-style: normal;

  ${screen.below(
    bp.mobile,
    `
    order: 2;
    grid-column: 1 / -1;
    text-align: center;
  `,
  )}
`;

const PhoneNumber = styled(InlineLink)`
  display: block;
  margin-bottom: 16px;
`;

const JumboText = styled.div`
  order: 3;
  position: relative;
  z-index: 2;
  grid-column: 1 / -1;
  margin: 48px 0 96px;

  ${screen.below(
    bp.mobile,
    `
    margin-top: 65px;
  `,
  )}
`;

const FooterList = styled(UnstyledList)`
  li:not(:last-of-type) {
    margin-bottom: 12px;
  }
`;

const FooterListTitle = styled.span`
  display: block;
  margin-bottom: 22px;
  text-transform: uppercase;
`;

const FooterBottom = styled(Grid)`
  grid-template-columns: 148px 1fr;
  justify-content: space-between;

  ${screen.below(
    bp.desktopSm,
    `
    margin: 60px auto auto;
  `,
  )}

  ${screen.below(
    bp.mobile,
    `
    grid-template-columns: 80px 1fr;
  `,
  )}

  a {
    color: var(--brand-white);
  }
`;

const SocialList = styled(UnstyledList)`
  display: flex;
  justify-self: end;

  li:not(:last-of-type) {
    margin-right: 18px;
  }
`;

const SocialLink = styled(InlineLink)`
  && {
    color: var(--brand-white);

    ${hover(`
      color: var(--gold);
    `)}

    ${screen.below(
      bp.mobileSm,
      `
      width: 28px;
      height: 28px;
    `,
    )}
  }
`;

const FooterGraphic = styled(LazyImg)`
  position: absolute;
  right: -204px;
  bottom: -100px;
  z-index: -1;
  width: 464px;
  height: 254px;
  color: var(--gold);
  pointer-events: none;

  ${screen.below(
    bp.desktopSm,
    `
    width: 348px;
    height: 190px;
  `,
  )}
`;

const FooterLogo = styled.div`
  ${screen.below(
    bp.tablet,
    `
    margin-top: 8rem;;
  `,
  )}
`;

const Form = styled.form`
  order: 2;
  position: relative;
  z-index: 1;

  ${screen.below(
    bp.mobile,
    `
    order: 1;
    grid-column: 1 / -1;
    text-align: center;
  `,
  )}
`;

const Label = styled.label`
  display: block;
  margin-bottom: 14px;
  font-family: var(--secondary-font);
  text-transform: uppercase;
`;

const StyledInput = styled.input`
  padding: 10px 14px;
  width: 100%;
  background-color: transparent;
  border-radius: 0;
  border: 1px solid var(--gold);
  color: var(--brand-white);
  font-size: ${rem(12)};
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s ease;
  appearance: none;

  &:focus {
    border-color: var(--brand-white);
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }

  &::placeholder {
    color: var(--brand-white);
    font-size: ${rem(12)};
    opacity: 1;
  }
`;

const FieldWrap = styled.div`
  ${screen.above(
    bp.mobile,
    `
    display: flex;
  `,
  )}
`;

const Submit = styled(Button)`
  margin-left: 8px;

  ${screen.below(
    bp.mobile,
    `
    margin: 14px 0 70px;
  `,
  )}
`;

const SiteNav = styled.nav`
  order: 4;
`;

const ServicesNav = styled.nav`
  order: 5;
`;

const Facebook = () => (
  <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="24" fill="currentColor" />
    <path
      d="M26.348 17.767h2.532V14h-2.995c-3.612.154-4.353 2.192-4.415 4.323v1.883H19v3.674h2.47v9.88h3.705v-9.88h3.057l.586-3.674h-3.643v-1.142a1.224 1.224 0 011.173-1.297z"
      fill="#282829"
    />
  </svg>
);

const Instagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="none"
    viewBox="0 0 48 48"
  >
    <circle cx="24" cy="24" r="24" fill="currentColor" />
    <path
      fill="#282829"
      fillRule="evenodd"
      d="M19.248 14.953a4.296 4.296 0 00-4.295 4.296v9.503a4.296 4.296 0 004.296 4.295h9.503a4.296 4.296 0 004.295-4.295v-9.503a4.296 4.296 0 00-4.295-4.296h-9.503zM13 19.249A6.249 6.249 0 0119.248 13h9.503A6.249 6.249 0 0135 19.248v9.503A6.249 6.249 0 0128.752 35h-9.503A6.249 6.249 0 0113 28.752v-9.503zm11 1.041a3.71 3.71 0 100 7.42 3.71 3.71 0 000-7.42zM18.337 24a5.663 5.663 0 1111.326 0 5.663 5.663 0 01-11.326 0zm12.172-5.923a.586.586 0 11-1.172 0 .586.586 0 011.172 0zm-.586-1.367a1.367 1.367 0 100 2.734 1.367 1.367 0 000-2.734z"
      clipRule="evenodd"
    />
  </svg>
);

const Twitter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="none"
    viewBox="0 0 48 48"
  >
    <circle cx="24" cy="24" r="24" fill="currentColor" />
    <path
      fill="#282829"
      d="M35.307 17.844c-.8.369-1.598.492-2.53.614.932-.491 1.598-1.229 1.864-2.212a6.79 6.79 0 01-2.796.983c-.8-.737-1.998-1.229-3.197-1.229-2.263 0-4.26 1.844-4.26 4.056 0 .37 0 .615.132.861-3.595-.123-6.924-1.721-9.055-4.18-.4.615-.533 1.23-.533 1.967 0 1.352.8 2.582 1.998 3.32-.666 0-1.332-.247-1.998-.492 0 1.966 1.465 3.564 3.463 3.933-.4.246-.8.246-1.199.246-.266 0-.533 0-.799-.123.533 1.598 2.13 2.827 4.128 2.827-1.465 1.107-3.329 1.721-5.46 1.721H14c1.998 1.23 4.261 1.844 6.658 1.844 7.99 0 12.385-6.146 12.385-11.432v-.491c.932-.615 1.731-1.353 2.264-2.213z"
    />
  </svg>
);

const Youtube = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="none"
    viewBox="0 0 48 48"
  >
    <circle cx="24" cy="24" r="24" fill="currentColor" />
    <path
      fill="#282829"
      d="M22,21.333 L27.333,23.995 L22,26.667 L22,21.333 L22,21.333 Z M36,17 L36,31 C36,33.761 33.762,36 31,36 L17,36 C14.239,36 12,33.761 12,31 L12,17 C12,14.239 14.239,12 17,12 L31,12 C33.762,12 36,14.239 36,17 Z M32,24 C31.98,19.877 31.677,18.3 29.077,18.123 C26.674,17.959 21.323,17.96 18.924,18.123 C16.326,18.3 16.02,19.87 16,24 C16.02,28.123 16.323,29.7 18.923,29.877 C21.322,30.04 26.673,30.041 29.076,29.877 C31.674,29.7 31.98,28.13 32,24 Z"
    ></path>
  </svg>
);

const icon = {
  facebook: <Facebook />,
  instagram: <Instagram />,
  twitter: <Twitter />,
  youtube: <Youtube />,
};

const SocialIcon = ({ text }) => {
  const lowerText = text.toLowerCase();

  return icon[lowerText] || null;
};

const Footer = ({
  address,
  route,
  phoneNumberLink,
  phoneNumberText,
  emailAddress,
  newsletterTitle,
  jumboText,
  graphic,
  siteList = [],
  servicesList = [],
  socialMediaLinks = [],
}) => {
  const footerTL = useRef();
  const bootRef = useCallback(
    (el) => {
      if (!el) return;
      gsap.registerPlugin(ScrollTrigger);

      const boot = el.querySelector(".booter");

      gsap.set(boot, { transformOrigin: "50% -100%" });

      footerTL.current = gsap.from(boot, {
        rotation: "-40deg",
        scrollTrigger: {
          trigger: el,
          id: `footer-boot-${route}`,
          start: "top 66%",
          end: "bottom 66%",
          scrub: 0.5,
        },
        ease: "sine.in",
      });
    },
    [route],
  );

  useEffect(
    () => () => {
      if (ScrollTrigger.getById(`footer-boot-${route}`)) {
        ScrollTrigger.getById(`footer-boot-${route}`).kill();
      }
      if (footerTL.current) {
        footerTL.current.kill();
      }
    },
    [route],
  );

  return (
    <SiteFooter>
      <Container>
        <ContentContainer as={Grid}>
          <StyledAddress>
            {address || null}

            <UnstyledList>
              {phoneNumberText ? (
                <li>
                  <PhoneNumber href={`tel:${phoneNumberLink}`}>
                    {phoneNumberText}
                  </PhoneNumber>
                </li>
              ) : null}

              {emailAddress ? (
                <li>
                  <span>
                    Email:{" "}
                    <InlineLink href={`mailto:${emailAddress}`}>
                      {emailAddress}
                    </InlineLink>
                  </span>
                </li>
              ) : null}
            </UnstyledList>
          </StyledAddress>
          <Form>
            {newsletterTitle ? (
              <Label htmlFor="newsletter-signup">{newsletterTitle}</Label>
            ) : null}

            <FieldWrap>
              <StyledInput
                type="email"
                id="newsletter-signup"
                name="newsletter"
                required
                placeholder="Your Email"
              />
              <Submit type="submit" bgcolor="brand-white">
                Submit
              </Submit>
            </FieldWrap>
          </Form>

          {jumboText ? (
            <JumboText ref={bootRef}>
              <OneSixty>{jumboText}</OneSixty>

              {graphic ? (
                <FooterGraphic
                  className="booter"
                  src={graphic.url}
                  alt={graphic.alt}
                  width={graphic?.dimensions?.width}
                  height={graphic?.dimensions?.height}
                />
              ) : null}
            </JumboText>
          ) : null}

          <SiteNav aria-label="secondary">
            <FooterListTitle aria-hidden="true">Site</FooterListTitle>
            {siteList ? (
              <FooterList>
                {siteList.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index}>
                    <InlineLink href={linkResolver(item?.link)}>
                      {item?.link_text}
                    </InlineLink>
                  </li>
                ))}
              </FooterList>
            ) : null}
          </SiteNav>
          <ServicesNav aria-label="services">
            <FooterListTitle aria-hidden="true">Services</FooterListTitle>

            {servicesList ? (
              <FooterList>
                {servicesList.map((item) => (
                  <li key={item?.name}>
                    <InlineLink href={linkResolver(item?.link_url)}>
                      {item?.name}
                    </InlineLink>
                  </li>
                ))}
              </FooterList>
            ) : null}
          </ServicesNav>
        </ContentContainer>
        <FooterBottom>
          <FooterLogo>
            <InlineLink href="/">
              <Logo />
            </InlineLink>
          </FooterLogo>

          {socialMediaLinks.length > 0 ? (
            <SocialList>
              {socialMediaLinks.map((link) => (
                <li key={link?.link_text}>
                  <SocialLink
                    href={link?.link?.url}
                    aria-label={link.link_text}
                  >
                    <SocialIcon text={link?.link_text} />
                  </SocialLink>
                </li>
              ))}
            </SocialList>
          ) : null}
        </FooterBottom>
      </Container>
    </SiteFooter>
  );
};

Footer.propTypes = {
  address: PropTypes.string,
  phoneNumberLink: PropTypes.string,
  phoneNumberText: PropTypes.string,
  emailAddress: PropTypes.string,
  newsletterTitle: PropTypes.string,
  jumboText: PropTypes.string,
  graphic: PropTypes.object,
  siteList: PropTypes.array,
  servicesList: PropTypes.array,
  socialMediaLinks: PropTypes.array,
};

export default Footer;
