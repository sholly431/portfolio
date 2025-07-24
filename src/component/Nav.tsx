import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div>
      <nav className="flex  justify-between text-gray-300 bg-transparent  fixed w-[100%] px-[100px] max-md:mt-[10px]  ">
        <div className="text-[30px] font-light max-md:text-[20px]">
          <h1>Fiyinfoluwa</h1>
        </div>
        <div className=" w-[50%] flex justify-between font-bold items-center max-md:hidden">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#project">My Project</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="flex justify-between  items-center w-[20%] max-md:w-[10%] max-md:gap-[5px] ">
          <a href="http://www.linkedin.com/in/fiyinfoluwaonanibosi">
            <FaLinkedin />
          </a>
          <a href="https://x.com/mofiyin_bby?s=21">
            <BsTwitterX />
          </a>
          <a href="https://www.instagram.com/itz_mofiyin?igsh=Z3lkMDA5eXdkNml1&utm_source=qr">
            <FaInstagram />
          </a>
          <a href="http://wa.me/2349030183710">
            <FaWhatsapp />
          </a>
          <a href="https://github.com/sholly431">
            <FaGithub />
          </a>
        </div>
      </nav>
    </div>
  );
};
