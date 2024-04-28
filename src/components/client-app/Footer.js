import styled from "styled-components";
import screen from "superior-mq";
import { bp, hover } from "app/styles/helpers";
import Container from "../Container";
import Grid from "../Grid";
import InlineLink from "../InlineLink";
import Logo from "../Logo";

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

const FooterBottom = styled.div`
  a {
    color: var(--brand-white);
    font-size: 0.8rem;
  }
`;

const Footer = ({}) => {
  return (
    <SiteFooter>
      <Container>
        <FooterBottom>
          <InlineLink href="/">Anderson Bros. Design &amp; Supply</InlineLink>
        </FooterBottom>
      </Container>
    </SiteFooter>
  );
};

export default Footer;
