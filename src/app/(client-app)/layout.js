"use client";
import "./styles/globals.css";
import React, { useState } from "react";
import AuthProvider from './components/AuthProvider';
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoEntry from "./components/NoEntry";
import { Anton, GothamSS } from "./styles/fonts";

const RootLayout = ({ children }) => {
  const [isAuth, setAuth] = useState(false);
  const updateAuth = (val) => {
    setAuth(val);
  };

  return (
    <>
      <html lang="en">
        <body
          className={`${Anton.variable} ${GothamSS.variable} min-h-screen flex flex-col bg-brandWhite`}
        >
          <Header />
          <div className="container py-12 mx-auto grow">
            {isAuth ? children : <NoEntry {...{ updateAuth, isAuth }} />}
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
