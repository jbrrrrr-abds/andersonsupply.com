/* eslint-disable react/no-array-index-key */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';
import screen from 'superior-mq';
import { rem } from 'polished';
import { linkResolver } from '../util/prismicHelpers';
import { bp, hover } from '../styles/helpers';
import UnstyledList from './UnstyledList';
import { OneSixty } from './Jumbo';
import InlineLink from './InlineLink';

const StyledListItem = styled.li`
  max-width: 1220px;
  position: relative;
  z-index: 2;

  ${props => !props.isServicesPage && `
    border-bottom: 3px solid var(--border-color);

    &:first-of-type {
      border-top: 3px solid var(--border-color);
    }
  `}
`;

const StyledLink = styled(InlineLink)`
  transition: color 300ms ease;

  ${hover(`
    color: var(--gold);
  `)}
`;

const ListText = styled.span`
  ${screen.below(bp.mobile, `
    font-size: ${rem(50)};
  `)}
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: ${props => props.isServicesPage ? '290px' : '0'};
  width: ${props => props.isServicesPage ? '825px' : '100%'};
  height: ${props => props.isServicesPage ? '1116px' : '100%'};
  overflow: hidden;
  z-index: 0;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${props => props.isServicesPage && `
    right: var(--container-gutter);

    ${screen.above(bp.laptopSm, `
      margin-top: -52px;
    `)}
  `}

  ${props => !props.isServicesPage && `
    left: 0;
    width: 100%;
    height: 100%;
    filter: grayscale(100%);

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
      background-color: var(--brand-black);
      opacity: .4;
      content: "";
    }
  `}

  ${props => screen.below(bp.desktopSm, `
    top: ${props.isServicesPage && '218px'};
    width: ${props.isServicesPage && '618px'};
    height: ${props.isServicesPage && '837px'};
  `)}

  ${props => screen.below(bp.laptopSm, `
    top: ${props.isServicesPage && 'unset'};
    width: ${props.isServicesPage && '100%'};
    height: ${props.isServicesPage && '100%'};
    left: 0;
    bottom: 0;
  `)}
`;

const ServicesList = ({
  services = [],
  isServicesPage,
  className,
}) => {
  const list = useRef();
  const lastHover = useRef(0);

  const serviceHover = (i) => {
    if (!list.current) return;

    const imageArray = list.current.querySelectorAll(".service-image");

    const hoverImg = imageArray[i];
    const hoverImgImg = hoverImg.querySelector("img");
    const lastHoverImg = imageArray[lastHover.current];

    if (i !== lastHover.current) {
      gsap.set(imageArray, { zIndex: -2 });
      gsap.set(lastHoverImg, { zIndex: -1 });
      gsap.set(hoverImg, { zIndex: 0 });

      if (!isServicesPage) {
        const tl = gsap
          .timeline({
            immediateRender: false,
            onComplete: () => {
              tl.kill();
            },
          })
          .fromTo(
            hoverImg,
            {
              opacity: 0,
            },
            {
              opacity: 1,
              onUpdate: () => {
                gsap.set(hoverImgImg, {
                  //scale: 1 / gsap.getProperty(hoverImg, "scale"),
                });
              },
            },
          )
          .fromTo(hoverImg, { top: "-2%" }, { top: 0 }, "-=.6");
      } else {
        gsap.set([hoverImg, hoverImgImg], { transformOrigin: "0 0" });
        gsap.fromTo(
          hoverImg,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            ease: "sine.inOut",
            onUpdate: () => {
              gsap.set(hoverImgImg, {
                //scaleY: 1 / gsap.getProperty(hoverImg, "scaleY"),
              });
            },
          },
        );
      }

      lastHover.current = i;
    }
  };

  if (services?.length < 1) return null;

  return (
    <div ref={list}>
      <UnstyledList className={className}>
        {services.map((item, i) => (
          <StyledListItem key={i} isServicesPage={isServicesPage}>
            <StyledLink
              onMouseEnter={() => {
                serviceHover(i);
              }}
              className="service-text"
              href={linkResolver(item?.link_url)}
            >
              <ListText as={OneSixty}>
                {item?.short_name ?? item?.name}
              </ListText>
            </StyledLink>
          </StyledListItem>
        ))}
      </UnstyledList>
      {services.map((item, index) => (
        <ImageWrapper
          className="service-image"
          isServicesPage={isServicesPage}
          key={index}
        >
          {/* Ran into the chaining linting error again here */}
          <img
            src={`${item.image.url}&w=825&h=825&fit=crop&q=85&f=center`}
            alt={item.image.alt}
          />
        </ImageWrapper>
      ))}
    </div>
  );
};

ServicesList.propTypes = {
  services: PropTypes.array,
  isServicesPage: PropTypes.bool,
  className: PropTypes.string,
};

export default ServicesList;
