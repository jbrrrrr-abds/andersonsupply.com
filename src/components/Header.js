import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import screen from 'superior-mq';
import gsap from 'gsap';
import ScrollLock, { TouchScrollable } from 'react-scrolllock';
import { rem } from 'polished';
import useOnClickOutside from 'use-onclickoutside';
import useThrottle from '../hooks/useTrottle';
import { linkResolver } from '../util/prismicHelpers';
import { bp, hover } from '../styles/helpers';
import Container from './Container';
import Grid from './Grid';
import UnstyledList from './UnstyledList';
import Logo from './Logo';
import InlineLink from './InlineLink';
import Button from './Button';
import UnstyledButton from './UnstyledButton';

const StyledHeader = styled.header`
  --item-color: var(--${props => props.color === 'dark' ? 'brand-dark' : 'brand-white'});
  position: fixed;
  z-index: 9;
  width: 100%;
  padding: ${props => props.$navState === 'full' ? '60px 0' : '5px 0'};
  color: var(--${props => props.$navState === 'full' ? 'item-color' : 'brand-white'});
  top: 0;
  transform: ${props => props.$navState === 'hidden' ? 'translateY(-100%)' : 'none'};
  background-color: ${props => props.$navState === 'full' ? 'transparent' : 'var(--brand-black)'};
  transition: .2s background-color ease-in-out ${props => props.$navState === 'full' ? '0s' : '.5s'}, .5s transform ease-in-out, .5s padding ease-in-out;
  will-change: transform;

  ${props => screen.below(bp.desktopSm, `
    padding: ${props.$navState === 'full' && '45px 0'};
  `)}

  ${props => screen.below(bp.portrait, `
    padding: ${props.$navState === 'full' && '22px 0'};
  `)}
`;

const HeaderGrid = styled(Grid)`
  grid-template-columns: 112px 1fr 160px 1fr 112px;
  align-items: center;
  column-gap: 30px;

  ${screen.below(bp.laptopSm, `
    grid-template-columns: 1fr auto 40px;
    justify-content: space-between;
  `)}
`;

const StyledMenu = styled(UnstyledList)`
  position: absolute;
  z-index: 10;
  height: 0;
  padding: 14px 28px;
  color: var(--brand-black);
  background-color: var(--brand-white);
  opacity: 0;
  pointer-events: none;

  ${props => props.$servicesOpen && `
    opacity: 1;
    height: auto;
    pointer-events: auto;
  `}

  ${props => screen.below(bp.laptopSm, `
    ${props.$servicesOpen && `
      position: relative;
    `}
  `)}
`;

const Nav = styled.nav`
  grid-column: 1 / span 2;

  ${screen.below(bp.laptopSm, `
    display: none;
  `)}
`;

const ServicesArrow = styled.svg`
  width: 10px;
  position: absolute;
  top: calc(50% - 3px);
  left: calc(100% + 5px);

  ${screen.below(bp.laptopSm, `
    top: 25px;
    right: 0;
    left: unset;
  `)}
`;

const ServicesButton = styled(UnstyledButton)`
  position: relative;
  color: inherit;
  transition: color 250ms ease;
  margin-top: 2px;
  margin-right: 8px;

  &[aria-expanded="true"] {
    color: var(--gold);

    svg {
      transform: scaleY(1);

      ${screen.below(bp.laptopSm, `
        transform: scaleY(-1);
      `)}
    }
  }

  ${hover(`
    color: var(--gold);
  `)}

  ${props => props.isActive && `
    &::before {
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: var(--gold);
      content: "";
    }
  `};

  ${screen.below(bp.laptopSm, `
    position: initial;
    color: var(--brand-black);
    font-size: ${rem(40)};
  `)}
`;

const NavList = styled(UnstyledList)`
  display: flex;

  li:not(:last-of-type) {
    margin-right: 30px;
  }
`;

const NavItem = styled.span`
  font-family: var(--secondary-font);
  text-transform: uppercase;
`;

const NavLink = styled(NavItem)`
  transition: color 250ms ease;
  position: relative;

  ${hover(`
    color: var(--gold);
  `)}

  ${props => props.isActive && `
    &::before {
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: var(--gold);
      content: "";
    }
  `};
`;

const MenuLink = styled(InlineLink)`
  display: block;
  font-size: ${rem(13)};
  transition: color 300ms ease-in-out;

  &:focus {
    outline: 1px solid var(--gold);
  }

  &:not(:last-of-type) {
    margin-bottom: 14px;
  }

  ${hover(`
    color: var(--gold);
  `)}
`;

const LogoLink = styled(InlineLink)`
  position: relative;
  margin: auto;
  transition: .5s width ease-in-out, .2s color;
  width: ${props => props.$navState === 'full' ? '160px' : '120px'};
  display: grid;
  ${props => props.$isOpen && 'color: var(--brand-black)'};
  place-items: center;

  ${screen.below(bp.laptopSm, `
    margin: 0;
    order: 1;
  `)}

  ${props => screen.below(bp.portrait, `
    width: ${props.$navState === 'full' ? '120px' : '100px'};
  `)}

  ${screen.below(bp.mobile, `
    width: 100px;
  `)}
`;

const NavButton = styled(Button)`
  position: relative;
  justify-self: end;

  ${screen.below(bp.laptopSm, `
    order: 2;
  `)}

  ${screen.below(bp.mobile, `
    font-size: ${rem(15)};
  `)}
`;

const MobileMenuToggle = styled(UnstyledButton)`
  --toggle-color: var(--${props => props.color === 'dark' ? 'brand-black' : 'brand-white'});
  ${props => props.$navState !== 'full' && '--toggle-color: var(--brand-white);'}
  position: relative;
  order: 3;
  z-index: 9;
  height: 40px;
  width: 40px;
  padding: 10px;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: var(--brand-black);
    transition: transform .2s;
    border-radius: 100%;
    transform: scale(${props => props.$isOpen ? 1 : 0});
    z-index: 0;
  }

  div {
    display: block;
    width: 20px;
    height: 3px;
    z-index: 1;
    position: relative;
    background-color: ${props => props.$isOpen ? 'var(--gold)' : 'var(--toggle-color)'};
    transition: background-color 200ms;

    &:not(:last-of-type) {
      margin-bottom: 5px;
    }
  }

  ${hover(`
    div {
      background-color: var(--gold);
    }
  `)}

  ${screen.above(bp.laptopSm, `
    display: none;
  `)}
`;

const MobileMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  pointer-events: none;
  background-color: var(--brand-white);
  transition: opacity 200ms;

  ${props => props.$isOpen && `
    opacity: 1;
    pointer-events: auto;
  `}

  ${screen.above(bp.laptopSm, `
    display: none;
  `)}
`;

const MobileMenuList = styled(UnstyledList)`
  margin: 160px var(--container-gutter) 0;

  ${screen.below(bp.mobile, `
    margin-top: 94px;
  `)}
`;

const MobileNavLink = styled(InlineLink)`
  color: var(--brand-black);
  font-family: var(--secondary-font);
  font-size: ${rem(40)};
`;

const MobileServicesLink = styled(InlineLink)`
  color: var(--brand-black);
  font-family: var(--secondary-font);
  font-size: ${rem(25)};
`;

const SecondaryNav = styled.nav`
  justify-self: end;

  ${screen.below(bp.laptopSm, 'display: none')}
`;

const Header = ({
  allServicesLink,
  allSerficesLinkText,
  services = [],
  navItems = [],
  secondaryNavItems = [],
  navButtonText,
  navButtonLink,
}) => {
  const { route, asPath } = useRouter();
  const lastScrollPos = useRef(0);
  const [navState, setNavState] = useState('full');
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const prevScrollDirection = useRef('down');
  const scrollDirection = useRef('init');
  const topOffset = 150;
  const scrollBuffer = 90;
  const scrollBufferProgress = useRef(0);
  const dropDownTween = useRef();
  const servicesRef = useRef();
  const burgerTL = useRef();

  const navRef = useCallback((node) => {
    if (!node) return;

    const mobileToggle = node.querySelector('.mobile-toggle');
    const mobileBars = mobileToggle.children;
    const arrowPath = node.querySelector('.arrow-path');

    dropDownTween.current = gsap.fromTo(arrowPath,
      { attr: { points: '1 1 5 5 9 1' } },
      { attr: { points: '1 5 5 1 9 5' }, duration: 0.125, paused: true, reversed: true });

    burgerTL.current = gsap.timeline({ reversed: true, paused: true, defaults: { duration: 0.1 } })
      .to(mobileBars[0], { y: 4 }, 0)
      .to(mobileBars[1], { y: -4 }, 0)
      .to(mobileBars[0], { rotate: '45deg', scale: 0.666 }, 0.1)
      .to(mobileBars[1], { rotate: '-45deg', scale: 0.666 }, 0.1);

    if (window.pageYOffset >= topOffset) {
      setNavState('slim');
    }
  }, [topOffset]);

  const onScroll = useThrottle(() => {
    const scrollPos = window.pageYOffset;

    if (scrollDirection.current !== prevScrollDirection.current) {
      scrollBufferProgress.current = 0;

      prevScrollDirection.current = scrollDirection.current;
    }

    if (scrollPos > lastScrollPos.current) {
      scrollDirection.current = 'down';

      scrollBufferProgress.current += (scrollPos - lastScrollPos.current);

    } else if (scrollPos < lastScrollPos.current) {
      scrollDirection.current = 'up';
      scrollBufferProgress.current += (scrollPos - lastScrollPos.current);
    }

    if (scrollPos < topOffset) {
      setNavState('full');
    } else if (
      scrollBufferProgress.current >= scrollBuffer &&
      scrollDirection.current === 'down' &&
      navState !== 'hidden'
    ) {
      setNavState('hidden');
    } else if (
      scrollBufferProgress.current <= -scrollBuffer &&
      scrollDirection.current === 'up' &&
      navState !== 'slim'
    ) {
      setNavState('slim');
    }

    lastScrollPos.current = scrollPos;
  }, 10, [topOffset, scrollBuffer]);

  const navColor = ['/about', '/404'].includes(route) ? 'dark' : 'light';

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [asPath]);

  useEffect(() => {
    if (isOpen) {
      burgerTL.current.restart();
    } else {
      burgerTL.current.reverse();
    }
  }, [isOpen]);

  useEffect(() => {
    const firstNavLink = document.querySelector('.first-nav-link');

    const handleHeaderTab = () => {
      setServicesOpen(false);
    };

    if (firstNavLink) {
      firstNavLink.addEventListener('focus', handleHeaderTab);
    }

    return () => {
      firstNavLink.removeEventListener('focus', handleHeaderTab);
    };

  }, []);

  useOnClickOutside(servicesRef, () => {
    if (window.innerWidth > 1240) {
      setServicesOpen(false);
    }
  });

  const serviceRoutes = services.map(service => `/services/${service?.link_url?.slug}`);
  const serviceActive = [`/${allServicesLink?.slug}`, ...serviceRoutes].includes(asPath);

  useEffect(() => {
    if (servicesOpen) {
      dropDownTween.current.play();
    } else {
      dropDownTween.current.reverse();
    }
  }, [servicesOpen]);

  useEffect(() => () => {
    if (dropDownTween.current) {
      dropDownTween.current.kill();
    }
    if (burgerTL.current) {
      burgerTL.current.kill();
    }
  }, []);

  return (
    <StyledHeader $navState={navState} ref={navRef} color={navColor} $isOpen={isOpen}>
      <HeaderGrid as={Container}>

        {navItems ?
          <Nav aria-label="primary">
            <NavList>

              <li>
                <div ref={servicesRef}>
                  <ServicesButton
                    className="services-button"
                    isActive={serviceActive}
                    id="services"
                    onClick={() => setServicesOpen(state => !state)}
                    aria-expanded={servicesOpen}
                  >
                    <NavItem>Services</NavItem>
                    <ServicesArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 7">
                      <polyline className="arrow-path" fill="none" stroke="currentColor" strokeWidth="2" points="1 1 5 5 9 1" />
                    </ServicesArrow>
                  </ServicesButton>
                  <StyledMenu $servicesOpen={servicesOpen} className="services-dropdown">

                    {allServicesLink ?
                      <li>
                        <MenuLink
                          className="first-services-link"
                          tabIndex={servicesOpen ? '0' : '-1'}
                          href={linkResolver(allServicesLink)}
                          prefetch={false}
                        >
                          <NavItem>{allSerficesLinkText}</NavItem>
                        </MenuLink>
                      </li>
                      :
                      null
                    }

                    {services.length > 0 ?
                      services.map(service => (
                        <li key={service?.name}>
                          <MenuLink
                            tabIndex={servicesOpen ? '0' : '-1'}
                            href={linkResolver(service?.link_url)}
                            prefetch={false}
                          >
                            <NavItem>{service?.name}</NavItem>
                          </MenuLink>
                        </li>
                      ))
                      :
                      null
                    }

                  </StyledMenu>
                </div>
              </li>

              {navItems.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <InlineLink
                    className={index === 0 ? 'first-nav-link' : ''}
                    href={linkResolver(item?.link)}
                    prefetch={false}
                  >
                    <NavLink
                      isActive={linkResolver(item?.link) === route}
                    >
                      {item?.link_text}
                    </NavLink>
                  </InlineLink>
                </li>
              ))}

            </NavList>
          </Nav>
          :
          null
        }

        <LogoLink
          $navState={navState}
          $isOpen={isOpen}
          href="/"
          aria-label="Anderson Brothers"
        >
          <Logo style={{ width: '100%' }} />
        </LogoLink>

        {secondaryNavItems?.length > 0
          ?
            <SecondaryNav aria-label="Secondary">
              <NavList>
                {secondaryNavItems.map((item, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <NavLink as="li" key={index}>
                    <InlineLink href={linkResolver(item?.link)}>{item.link_text}</InlineLink>
                  </NavLink>
                  ))}

              </NavList>
            </SecondaryNav>
          : null
        }

        {navButtonLink ?
          <NavButton
            isdark
            bgcolor="gold"
            href={linkResolver(navButtonLink)}
            prefetch={false}
          >
            {navButtonText}
          </NavButton>
            :
            null
          }

        <MobileMenuToggle
          aria-label="Toggle mobile navigation menu"
          aria-expanded={isOpen}
          $isOpen={isOpen}
          color={navColor}
          onClick={() => setIsOpen(state => !state)}
          className="mobile-toggle"
          $navState={navState}
        >
          <div />
          <div />
        </MobileMenuToggle>

        {isOpen ?
          <ScrollLock />
          :
          null
        }

        <TouchScrollable>
          <MobileMenu $isOpen={isOpen} aria-label="mobile">

            <MobileMenuList>

              <li>
                <div style={{ position: 'relative' }}>
                  <ServicesButton
                    className="services-button"
                    isActive={serviceActive}
                    id="services"
                    onClick={() => setServicesOpen(state => !state)}
                    aria-expanded={servicesOpen}
                  >
                    <NavItem>Services</NavItem>
                    <ServicesArrow xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 7">
                      <polyline className="arrow-path" fill="none" stroke="currentColor" strokeWidth="2" points="1 1 5 5 9 1" />
                    </ServicesArrow>
                  </ServicesButton>
                  <StyledMenu $servicesOpen={servicesOpen} className="services-dropdown">

                    {allServicesLink ?
                      <li>
                        <MobileServicesLink
                          className="first-services-link"
                          tabIndex={servicesOpen ? '0' : '-1'}
                          href={linkResolver(allServicesLink)}
                          prefetch={false}
                        >
                          <NavItem>{allSerficesLinkText}</NavItem>
                        </MobileServicesLink>
                      </li>
                      :
                      null
                    }

                    {services.length > 0 ?
                      services.map(service => (
                        <li key={service?.name}>
                          <MobileServicesLink
                            tabIndex={servicesOpen ? '0' : '-1'}
                            href={linkResolver(service?.link_url)}
                            prefetch={false}
                          >
                            <NavItem>{service?.name}</NavItem>
                          </MobileServicesLink>
                        </li>
                      ))
                      :
                      null
                    }

                  </StyledMenu>
                </div>
              </li>

              {navItems.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <MobileNavLink href={linkResolver(item?.link)} prefetch={false}>
                    <NavLink isActive={linkResolver(item?.link) === route}>
                      {item?.link_text}
                    </NavLink>
                  </MobileNavLink>
                </li>
              ))}

              {secondaryNavItems.map((item, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={index}>
                  <MobileNavLink href={linkResolver(item?.link)} prefetch={false}>
                    <NavLink isActive={linkResolver(item?.link) === route}>
                      {item?.link_text}
                    </NavLink>
                  </MobileNavLink>
                </li>
              ))}
            </MobileMenuList>

          </MobileMenu>
        </TouchScrollable>

      </HeaderGrid>
    </StyledHeader>
  );
};

Header.propTypes = {
  navItems: PropTypes.array,
};

export default Header;
