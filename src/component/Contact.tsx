import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
export const Contact = () => {
  return (
    <div className="mt-[70px] " id="contact" >
      <div className="  w-[300px] text-center mx-auto">
        <h1 className="font-bold text-[40px]">Contact Us</h1>
      </div>
      <div className="flex w-[100%] justify-around  mt-[50px] max-md:flex max-md:flex-col-reverse ">
        <div className="flex flex-col items-center mt-[30px]">
          <CiLocationOn className="w-[70px] h-[50px]" />
          <h2 className="mt-[20px] text-[20px]">Address</h2>
          <p className="mt-[20px] text-[20px]">Ikorodu, Lagos</p>
        </div>
        <div className="flex flex-col items-center mt-[30px]">
          <IoCallOutline className="w-[70px] h-[50px]" />
          <h2 className="mt-[20px] text-[20px]">Call Us</h2>
          <p className="mt-[20px] text-[20px]">+2349030183710</p>
        </div>
        <div className="flex flex-col items-center mt-[30px]">
          <MdOutlineEmail className="w-[70px] h-[50px]" />
          <h2 className="mt-[20px] text-[20px]">Email Us</h2>
          <p className="mt-[20px] text-[20px]">onanibosifiyin@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
