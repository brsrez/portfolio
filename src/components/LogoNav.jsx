import React from "react";
import Logo from "../assets/images/logo.svg";

const LogoNav = () => {
  return (
    <a href="/" className="">
      <img className="h-10 w-auto shadow-black" src={Logo} alt="Logo" />
    </a>
  );
};

export default LogoNav;
