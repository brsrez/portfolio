import React from "react";
import Logo from "../assets/images/logo.svg";

const NavBar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-10 mix-blend-difference">
        <div className="main-container py-6 flex justify-between items-center">
          <img className="h-10 w-auto shadow-black" src={Logo} alt="Logo" />
          <div className="flex flex-col gap-1.5 cursor-pointer">
            <span className="w-10 inline-block lg:w-12 h-0.5 bg-white"></span>
            <span className="w-10 inline-block lg:w-12 h-0.5 bg-white"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
