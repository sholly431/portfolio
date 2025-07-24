import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-gray-800 mt-[30px] h-[50vh] w-[100%] text-center pt-[30px] text-white">
      <div>
        <h1 className="font-bold text-[40px] mt-[40px] max-md:text-[30px] ">Onanibosi Fiyinfoluwa</h1>
        <p className="mb-[30px] text-[20px]">
          A Software Developer
        </p>
        <div className="flex justify-between items-center w-[40%] mx-auto mb-[30px] mt-[40px] max-md:gap-[10px]">
          <a href="http://www.linkedin.com/in/fiyinfoluwaonanibosi">
            <FaLinkedin className="w-[30px] h-[30px]" />
          </a>
          <a href="https://x.com/mofiyin_bby?s=21">
            <BsTwitterX className="w-[20px] h-[20px]" />
          </a>
          <a href="https://www.instagram.com/itz_mofiyin?igsh=Z3lkMDA5eXdkNml1&utm_source=qr">
            <FaInstagram className="w-[30px] h-[30px]" />
          </a>
          <a href="http://wa.me/2349030183710">
            <FaWhatsapp className="w-[30px] h-[30px]" />
          </a>
          <a href="https://github.com/sholly431">
            <FaGithub className="w-[30px] h-[30px]" />
          </a>
        </div>
        <div className="h-[1px] w-[50%] bg-white mx-auto mt-[70px]"></div>
      </div>
    </div>
  );
};
