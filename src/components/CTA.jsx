import React from "react";
import GradientButton from "./GradientButton";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const CTA = () => {
  const ctaRef = React.useRef(null);

  useGSAP(() => {
    gsap.from(ctaRef.current, {
      backgroundColor: "#fff",
      color: "#000",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "center center",
        end: "60% bottom",
        scrub: 1,
      },
    });
  });

  return (
    <>
      <div ref={ctaRef}>
        <div className=" main-container py-20 lg:py-28 h-full flex flex-col gap-8 justify-center items-center">
          <h4 className=" max-w-6xl text-2xl lg:text-5xl text-center leading-[1.25]">
            Freelance projects, collaborations and full-time opportunities.
            Let's get acquainted
          </h4>
          <GradientButton text={"Book a Call"} link={"/contact"} />
        </div>
      </div>
    </>
  );
};

export default CTA;
