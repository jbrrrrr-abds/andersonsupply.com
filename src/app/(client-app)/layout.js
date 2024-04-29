"use client";
import "./styles/globals.css";
import React, { useState } from "react";
import { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ClientDesignsAuth, {
  clientAuthStore,
} from "./components/ClientDesignsAuth";
import NoEntry from "./components/NoEntry";
import { Anton, GothamSS } from "./styles/fonts";
import Script from "next/script";

const RootLayout = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const updateAuth = (val) => {
    setAuth(val);
  };

  return (
    <>
      <html lang="en">
        <body
          className={`${Anton.variable} ${GothamSS.variable} min-h-screen flex flex-col`}
        >
          <Header />
          <div className="container mx-auto grow">
            {isAuth ? children : <NoEntry {...{ updateAuth, isAuth }} />}
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
