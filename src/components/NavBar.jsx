import React from "react";
import Logo from "../assets/images/logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const NavBar = () => {
  const navbarRef = React.useRef(null);

  useGSAP(() => {
    gsap.from(navbarRef.current, {
      opacity: 0,
      y: -100,
      duration: 1,
      delay: 0.25,
      ease: "circ.in",
    });
  });

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 w-full z-30 mix-blend-difference"
      >
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
