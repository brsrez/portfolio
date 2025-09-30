import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const About = () => {
  const aboutRef = React.useRef(null);

  useGSAP(() => {
    SplitText.create(".about-text", {
      type: "lines, words",
      onSplit(self) {
        gsap.set(self.words, {
          opacity: 0.25,
        });
        gsap.to(self.words, {
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top center",
            end: "center 20%",
            scrub: 1,
          },
        });
      },
    });
  });

  return (
    <>
      <div
        ref={aboutRef}
        className="h-screen bg-white rounded-tl-[60px] rounded-tr-[60px] z-10 relative"
      >
        <div className="about-text main-container py-4 lg:py-12 h-full flex justify-center items-center font-heading text-black text-2xl md:text-3xl lg:text-5xl leading-[1.2] text-stable">
          My approach combines clean design, smooth interactions, and thoughtful
          details to ensure every project feels both visually striking and
          highly functional. Whether it’s designing a portfolio, building a
          business website, or shaping a brand’s online presence, I focus on
          creating work that not only looks good but also connects with people
          in a meaningful way.
        </div>
      </div>
    </>
  );
};

export default About;
