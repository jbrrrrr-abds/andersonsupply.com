"use client";

import React from "react";
import { Metadata } from "next";
import GlobalStyle from "../styles/global-styles";
import Header from "../../components/client-app/Header";
import Footer from "../../components/client-app/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
          <GlobalStyle />
        </body>
      </html>

      <style jsx>
        {`
          @font-face {
            font-family: "GothamSS";
            src:
              url(/fonts/GothamSSm-Book.woff2) format("woff2"),
              url(/fonts/GothamSSm-Book.woff) format("woff");
            font-weight: 400;
          }
          @font-face {
            font-family: "GothamSS";
            src:
              url(/fonts/GothamSSm-Medium.woff2) format("woff2"),
              url(/fonts/GothamSSm-Medium.woff) format("woff");
            font-weight: 500;
          }
          @font-face {
            font-family: "GothamSS";
            src:
              url(/fonts/GothamSSm-Bold.woff2) format("woff2"),
              url(/fonts/GothamSSm-Bold.woff) format("woff");
            font-weight: 700;
          }
          @font-face {
            font-family: "GothamSS";
            src:
              url(/fonts/GothamSSm-Black.woff2) format("woff2"),
              url(/fonts/GothamSSm-Black.woff) format("woff");
            font-weight: 900;
          }
        `}
      </style>
    </>
  );
};

export default RootLayout;
