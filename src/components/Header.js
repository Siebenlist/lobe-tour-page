import React from "react";
import miniature from "../img/Video.jpg";

const Header = () => {
   return (
      <div className="flex flex-col mx-auto px-[64px] items-center text-center max-w-[1272px] h-full">
         <div className="flex gap-5 my-10 sm:text-5xl lg:text-7xl">
            <h1 className="font-bold">Lobe</h1>
            <h1 className="text-[#04ddb2] font-bold">Tour</h1>
         </div>
         <p className="sm:text-2xl lg:text-3xl font-medium text-[#333333] leading-[1.45] md:max-w-[550px] max-w-[750px]">
            Build your first machine learning model in ten minutes. No code or
            experience required.
         </p>
         <div className="mt-[80px] rounded-[34px]">
            <img
               className="w-full h-full relative rounded-[34px] hover:scale-105 ease-in-out duration-300 drop-shadow-2xl"
               src={miniature}
               alt=""
            />
         </div>
         <div className="max-w-full pt-[120px] pb-[140px]">
            <h1 className="lg:text-7xl md:text-5xl sm:text-4xl font-bold sm:max-w-[300px] md:max-w-[450px] lg:max-w-[600px] mb-[48px]">
               Train your app with Lobe
            </h1>
            <button className="bg-[#04ddb2] sm:py-2 sm:px-4  md:py-3 md:px-4 lg:py-4 lg:px-6 rounded-full text-white font-bold sm:text-lg md:text-xl hover:scale-105 ease-in-out duration-300">
               Download
            </button>
         </div>
      </div>
   );
};

export default Header;
