import { useEffect, useState } from "react";
import { create, set } from "zustand";
import ClientDesignsAuth from "./ClientDesignsAuth";

const NoEntry = ({ updateAuth, isAuth }) => {
  useEffect(() => {
    //updateAuth(true);
  });

  return (
    <main>
      <ClientDesignsAuth {...{ isAuth, updateAuth }} />
    </main>
  );
};

export default NoEntry;
