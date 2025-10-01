import React from "react";
import GradientButton from "../components/GradientButton";
import projects from "../components/ProjectData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Work = () => (

  const workRef = useRef(null);
  const projectRef = useRef(null);

  useGSAP (() => {
    const projectWidth = projectRef.current.scrollWidth;
    const scrollDistance = projectWidth - window.innerWidth;

    gsap.to(projectRef.current {
      x: -scrollDistance,
      ease: 'linear',
      scrollTrigger: {
        trigger: workRef.current,
        start: 'center center',
        end: () => `+=${projectWidth}`,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    })
  })
  <>
    <div ref={workRef} className=" h-screen bg-white text-black py-24 lg:py-40">
      {/* title wrapper */}
      <div className=" main-container pb-8 lg:pb-12 flex max-md:flex-col gap-6 justify-between items-start md:items-end">
        <div className=" max-w-xl">
          <h3 className=" mb-3">Selected Work</h3>
          <p className=" text-lg lg:text-xl">
            A showcase of my selected projects—designed to inspire, engage, and
            deliver real results.
          </p>
        </div>
        <GradientButton
          text={"View Projects"}
          link={"/projects"}
          className="btn-light"
        />
      </div>

      {/* project wrapper */}
      <div ref={projectRef}>
        <div className=" flex gap-4 lg:gap-8 ms-4 lg:ms-[40%] mt-6">
        {projects.map(({ id, name, image, link }) => (
          <a
            key={id}
            href={link}
            className=" relative rounded-2xl w-full min-w-[340px] lg:min-w-xl h-64 lg:h-96 block overflow-hidden group"
          >
            <img
              className=" w-fit h-full object-cover transition-transform duration-300 group-hover:scale-105"
              src={image}
              alt=""
            />
            <span className=" absolute top-4 right-4 bg-black text-white uppercase leading-[1.4] font-heading px-5 py-1 rounded-full text-sm lg:text-lg">
              {name}
            </span>
          </a>
        ))}
        </div>
      </div>
      
    </div>
  </>
);

export default Work;
