export const About = () => {
  return (
    <div id="about" className="h-[70vh]  bg-gray-900 text-white pt-[40px] max-md:h-[100vh] max-md:text-center">
      <div className="w-[200px] mx-auto  ">
        <h1 className=" text-[30px] max-sm:text-[25px]">ABOUT ME</h1>
      </div>

      <div className="flex justify-center items-center gap-[40px] max-md:flex max-md:flex-col-reverse max-md:w-[100%] max-md:text-[18px]">
        <div>
          <img src="./images/secondPic.JPG"alt="" className="w-[300px] rounded-[40rem] max-md:w-[250px] max-sm:mt-0"
          />
        </div>
        <div>
          <h1 className="font-bold text-[20px] w-[600px] mb-[10px] max-md:w-[400px] max-sm:w-[350px] max-sm:text-[15px]">I'm a passionate creative developer with one year of experience crafting digital experiences that blend beautiful design with cutting-edge technology. I specialize in creating responsive web applications, interactive user interfaces, and innovative digital solutions.

When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or capturing moments through photography. I believe in the power of clean code, intuitive design, and collaborative teamwork.</h1>
          
        </div>
      </div>
    </div>
  );
};
