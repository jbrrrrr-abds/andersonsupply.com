import { useEffect, useState } from "react";
import { create, set } from "zustand";
import ClientAuth from "./ClientAuth";

const NoEntry = ({ updateAuth, isAuth }) => {
  useEffect(() => {
    //updateAuth(true);
  });

  return (
    <main>
      <ClientAuth {...{ isAuth, updateAuth }} />
    </main>
  );
};

export default NoEntry;
