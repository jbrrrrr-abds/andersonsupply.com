import { useEffect, useState } from "react";
import { create, set } from "zustand";
import ClientDesignsAuth from "./ClientDesignsAuth";

const NoEntry = ({ updateAuth, isAuth }) => {
  useEffect(() => {
    //updateAuth(true);
  });

  return (
    <section>
      <ClientDesignsAuth {...{ isAuth }} />
      <h1>You are not logged in.</h1>
    </section>
  );
};

export default NoEntry;
