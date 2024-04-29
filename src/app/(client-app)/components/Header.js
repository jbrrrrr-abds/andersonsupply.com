import React from "react";
import Link from "next/link";
import styled from "styled-components";
import screen from "superior-mq";
import { bp } from "app/styles/helpers";
import Container from "../../../components/Container";
import Grid from "../../../components/Grid";
import Logo from "../../../components/Logo";
import InlineLink from "../../../components/InlineLink";

const StyledHeader = styled.header`
  --item-color: var(--brand-white);

  width: 100%;
  padding: 10px 0;
  color: var(--item-color);
  background-color: var(--brand-black);
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
  width: 120px;
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
    <header className="px-2 py-2 w-full">
      <div className="container">
        <div className="logo max-w-28">
          <Link href="/" aria-label="Anderson Brothers">
            <Logo className="w-full" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
