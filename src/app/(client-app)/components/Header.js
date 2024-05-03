import React from "react";
import Link from "next/link";
import Logo from "../../../components/Logo";

const Header = ({}) => {
  return (
    <header className="w-full bg-brandBlack">
      <div className="container flex flex-row w-full py-6">
        <div className="pr-8 logo max-w-32">
          <Logo className="w-full text-white" />
        </div>
        <div className="flex items-end self-center justify-end grow">
        </div>
      </div>
    </header>
  );
};

export default Header;
