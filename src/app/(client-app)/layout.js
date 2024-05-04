"use client";
import "clientapp/styles/globals.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Anton, GothamSS } from "./styles/fonts";

const RootLayout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body
          className={`${Anton.variable} ${GothamSS.variable} min-h-screen flex flex-col bg-brandWhite`}
        >
          <Header />
            <div className="container py-12 mx-auto grow">
              {children}
            </div>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
