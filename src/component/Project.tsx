export const Project = () => {
  return (
    <div id="project">
      <div className="w-[500px] mx-auto  text-center mt-[40px] mb-[40px]">
        <h1 className="font-bold text-[40px] text-gray-800 max-md:w-[350px] max-md:text-white"> Featured Project</h1>
      </div>

      <div className="flex justify-around w-[100%] flex-wrap max-md:gap-[50px]">
        <div className="bg-white  text-gray-800 border-3 rounded-3xl border-gray-800 p-4 flex flex-col items-center 
        ">
          <h2 className="mt-[20px] mb-[20px] text-[30px] font-bold">Piggyvest Website</h2>

          <div className="flex gap-6 mb-[20px]">
            <p className="bg-gray-800 p-[15px] text-white rounded-3xl ">React</p>
            <p className=" bg-gray-800 p-[15px] text-white rounded-3xl ">Tailwind CSS</p>
          </div>

          <div className="flex gap-[20px]">
            <a href="">Live Demo</a>
            <a href="https://github.com/sholly431/piggyvestclone">Github</a>
          </div>
        </div>
        <div className="bg-white text-gray-800 rounded-3xl border-3 border-gray-800 p-4 flex flex-col items-center">
          <h2 className="mt-[20px] mb-[20px] text-[30px] font-bold">Meta Website</h2>

          <div className="flex gap-6 mb-[20px]">
            <p className="bg-gray-800 p-[15px] text-white rounded-3xl">HTML</p>
            <p className="bg-gray-800 p-[15px] text-white rounded-3xl">CSS</p>
          </div>
          <div className="flex gap-[20px]">
            <a href="https://meta-project-mocha.vercel.app/">Live Demo</a>
            <a href="https://github.com/sholly431/metaProject">Github</a>
          </div>
        </div>
        <div className="bg-white text-gray-800 rounded-3xl border-3 border-gray-800 p-4 flex flex-col items-center">
          <h2 className="mt-[20px] mb-[20px] text-[30px] font-bold">Mooove Website</h2>

          <div className="flex gap-6 mb-[20px]">
            <p className="bg-gray-800 p-[15px] text-white rounded-3xl">HTML</p>
            <p className="bg-gray-800 p-[15px] text-white rounded-3xl">CSS</p>
          </div>

          <div className="flex gap-[20px]">
            <a href="https://my-moove-project.vercel.app/">Live Demo</a>
            <a href="https://github.com/sholly431/MoooveProject">Github</a>
          </div>
        </div>
        <div className="bg-white text-gray-800 rounded-3xl border-3 border-gray-800 p-4  flex flex-col items-center">
          <h2 className="mt-[20px] mb-[20px] text-[30px] font-bold">Coloors Website</h2>

          <div className="flex gap-6 mb-[20px]">
            <p className="bg-gray-800 p-[15px] text-white rounded-3xl" >HTML</p>
            <p className="bg-gray-800 p-[15px] text-white rounded-3xl">CSS</p>
          </div>

          <div className="flex gap-[20px]">
            <a href="https://coloors-project-b6u5.vercel.app/">Live Demo</a>
            <a href="https://github.com/sholly431/coloorsProject">Github</a>
          </div>
        </div>
        <div className="bg-white text-gray-800 rounded-3xl border-3 border-gray-800 p-4 flex flex-col items-center">
          <h2 className="mt-[20px] mb-[20px] text-[30px] font-bold">Calculator</h2>

          <div className="flex gap-6 mb-[20px]">
            <p className="bg-gray-800 p-[15px] text-white rounded-3xl">HTML</p>
            <p className="bg-gray-800 p-[15px] text-white rounded-3xl">CSS</p>
            <p className="bg-gray-800 p-[15px] text-white rounded-3xl">Javascript</p>
          </div>

          <div className="flex gap-[20px]">
            <a href="https://simple-calculator-eta-nine.vercel.app/">Live Demo</a>
            <a href="https://github.com/sholly431/simple-calculator">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
};
