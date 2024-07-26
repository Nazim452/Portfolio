import React from 'react';
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Md Nazim</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am eager to embark on a carrier in tech industry where I can continue to learn and grow as a professional. My goal is to work for a company that values innovation , creativity , teamwork and where I can contribute my skills and knowledge to make a meaningful impact.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 - XXXXX 31468</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText"><a href="mailto:nazim45200@gmail.com">Send Mail  || </a> nazim45200@gmail</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
          <a target='_blank' href="https://www.linkedin.com/in/md-nazim-844748257/">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>

          <a  target='_blank' href="https://x.com/MdNazim03583807">
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft