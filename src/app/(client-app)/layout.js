"use client";
import "./styles/globals.css";
import React, { useState } from "react";
import { Metadata } from "next";
import GlobalStyle from "../styles/global-styles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientDesignsAuth, {
  clientAuthStore,
} from "./components/ClientDesignsAuth";
import NoEntry from "./components/NoEntry";

const RootLayout = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const updateAuth = (val) => {
    setAuth(val);
  };

  return (
    <>
      <html lang="en">
        <body>
          <Header />
          <main>
            {isAuth ? { children } : <NoEntry {...{ updateAuth, isAuth }} />}
          </main>
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
