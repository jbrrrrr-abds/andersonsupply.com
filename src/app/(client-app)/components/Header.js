import React from "react";
import Link from "next/link";
import Logo from "../../../components/Logo";

const Header = ({}) => {
  return (
    <header className="w-full">
      <div className="container py-2">
        <div className="logo max-w-28">
          <Link href="/" aria-label="Anderson Brothers">
            <Logo className="w-full" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
