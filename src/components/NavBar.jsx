import React from "react";
import Logo from "../assets/images/logo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { Link } from "react-router-dom";
import LogoNav from "./LogoNav";

gsap.registerPlugin(useGSAP, SplitText);

const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
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
          <LogoNav />
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 cursor-pointer"
          >
            <span
              className={`w-10 inline-block lg:w-12 h-0.5 bg-white ${
                menuOpen ? " rotate-45 translate-y-[4px]" : ""
              } transition-all duration-300 origin-center`}
            ></span>
            <span
              className={`w-10 inline-block lg:w-12 h-0.5 bg-white ${
                menuOpen ? " -rotate-45 -translate-y-[4px]" : ""
              } transition-all duration-300 origin-center`}
            ></span>
          </div>
        </div>
      </nav>

      {/* full screen menu */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed z-20 inset-0 bg-black text-white flex flex-col items-center justify-center gap-8 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-all duration-500 ease-in-out`}
      >
        <Link to="/" className=" menu-link">
          Home
        </Link>
        <Link to="/projects" className=" menu-link">
          Projects
        </Link>
        <Link href="mailto: testemail@mail.com" className=" menu-link">
          Contact
        </Link>
      </div>
    </>
  );
};

export default NavBar;
