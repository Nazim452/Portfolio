import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {  FaTwitter, FaLinkedinIn, FaReact, } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs,SiLeetcode,SiGeeksforgeeks,SiNodedotjs,SiJavascript,SiMongodb } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Web Developer.", "MERN Stack Developer.", "Professional Coder."],
      loop: true,
      typeSpeed: 40,
      deleteSpeed: 30,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Nazim</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        
        I am passionate about using technology to solve real world problem and create innovative solutions. Crafting seamless user experience and delivery high quality scalable solution. Continiously staying updated with the latest web technologies and eager to learn new technologies.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a target='_blank' href="https://leetcode.com/u/mr_nazim_452/">
            <span className="bannerIcon">
              <SiLeetcode />

            </span>
          </a>

          <a target='_blank' href="https://www.geeksforgeeks.org/user/nazim4xp9r/">
            <span className="bannerIcon">
              <SiGeeksforgeeks />

            </span>
          </a>

          <a  target='_blank' href="https://x.com/MdNazim03583807">
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/md-nazim-844748257/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNodedotjs />
            </span>
            <span className="bannerIcon">
              <SiMongodb />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner