"use client";
import "clientapp/styles/globals.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoEntry from "./components/NoEntry";
import { Anton, GothamSS } from "./styles/fonts";
import SupabaseClient from './lib/supabase/client';

const checkAccess = async () => {
  const { data: { user } } = await SupabaseClient.auth.getUser();
  console.log(user);
}
const RootLayout = ({ children }) => {
  checkAccess();

  return (
    <>
      <html lang="en">
        <body
          className={`${Anton.variable} ${GothamSS.variable} min-h-screen flex flex-col bg-brandWhite`}
        >
          <Header />
          <div className="container py-12 mx-auto grow">
            {children}
            {/*isAuth ? children : <NoEntry {...{ updateAuth, isAuth }} />*/}
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default RootLayout;
