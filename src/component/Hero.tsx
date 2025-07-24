
export const Hero = () => {
  return (
    <div id="hero" className=" flex justify-center items-center w-[100%] h-[100vh] bg-[url('./images/mypicture.JPG')]  bg-cover bg-transparent max-md:h-[60vh] ">
      <div className=" flex flex-col items-center  w-[60%] mx-auto text-white duration-300 ease-in-out ">
        <h1 className="mt-[40px] mb-[20px] text-[47px] font-light max-md:text-[30px] max-md:w-[300px]"> Onanibosi fiyinfoluwa</h1>
        <h3 className="font-bold text-[25px] max-md:text-[18px] max-md:w-[320px]  ">
          A Software Developer who enjoys building websites and web apps. I work
          with HTML,CSS,Javascript, and tools like React and Node.js. I like
          creating easy-to-use, responsive designs and i'm always learning new
          things to improve my skills.
        </h3>
      </div>
    </div>
  );
};
