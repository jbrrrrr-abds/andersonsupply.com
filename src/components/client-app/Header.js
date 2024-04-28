import React from "react";
import styled from "styled-components";
import screen from "superior-mq";
import { bp } from "app/styles/helpers";
import Container from "../Container";
import Grid from "../Grid";
import Logo from "../Logo";
import InlineLink from "../InlineLink";

const StyledHeader = styled.header`
  --item-color: var(--brand-dark);

  position: fixed;
  z-index: 9;
  width: 100%;
  padding: 60px 0;
  color: var(--item-color);
  top: 0;
  transform: none;
  background-color: transparent;
  transition:
    0.2s background-color ease-in-out 0s,
    0.5s transform ease-in-out,
    0.5s padding ease-in-out;
  will-change: transform;
`;

const HeaderGrid = styled(Grid)`
  grid-template-columns: 112px 1fr 160px 1fr 112px;
  align-items: center;
  column-gap: 30px;
`;

const LogoLink = styled(InlineLink)`
  position: relative;
  margin: auto;
  transition:
    0.5s width ease-in-out,
    0.2s color;
  width: 160px;
  display: grid;
  place-items: center;

  ${screen.below(
    bp.laptopSm,
    `
    margin: 0;
    order: 1;
  `,
  )}

  ${(props) =>
    screen.below(
      bp.portrait,
      `
    width: 120px;
  `,
    )}

  ${screen.below(
    bp.mobile,
    `
    width: 100px;
  `,
  )}
`;



const Header = ({}) => {
  return (
    <StyledHeader>
      <HeaderGrid as={Container}>
        <LogoLink href="/" aria-label="Anderson Brothers">
          <Logo style={{ width: "100%" }} />
        </LogoLink>
      </HeaderGrid>
    </StyledHeader>
  );
};

export default Header;
