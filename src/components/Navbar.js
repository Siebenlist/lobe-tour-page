import React from "react";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
   const [nav, setNav] = useState(true);

   const handleNav = (e) => {
      setNav(!nav);
   };

   return (
      <div className="flex justify-between items-center w-full h-24 md:px-24">
         <a className="flex ml-10 text-2xl font-bold" href="/">
            LOBE
         </a>
         <ul className="hidden md:flex gap-12 font-bold text-[#767676]">
            <li className="hover:scale-110 ease-in-out duration-300">
               <a href="/">Overview</a>
            </li>
            <li className="hover:scale-110 ease-in-out duration-300">
               <a href="/">Examples</a>
            </li>
            <li className="hover:scale-110 ease-in-out duration-300">
               <a href="/">Tour</a>
            </li>
            <li className="hover:scale-110 ease-in-out duration-300">
               <a href="/">Blog</a>
            </li>
            <li className="hover:scale-110 ease-in-out duration-300">
               <a href="/">Help</a>
            </li>
         </ul>
         <div>
            <button className="hidden md:flex bg-[#04ddb2] text-white font-bold px-6 py-3 rounded-full hover:scale-105 ease-in-out duration-300">
               Download
            </button>
         </div>

         <div onClick={handleNav} className="block px-12 md:hidden">
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
         </div>

         <div
            className={
               !nav
                  ? "fixed md:hidden left-0 top-24 z-10 w-full h-[55%] bg-white ease-in-out duration-500"
                  : "fixed top-[-100%] z-10 ease-in-out duration-500"
            }
         >
            <ul className="flex flex-col font-bold text-xl text-[#767676]">
               <li className="p-5">
                  <a href="/">Overview</a>
               </li>
               <li className="p-5">
                  <a href="/">Examples</a>
               </li>
               <li className="p-5">
                  <a href="/">Tour</a>
               </li>
               <li className="p-5">
                  <a href="/">Blog</a>
               </li>
               <li className="p-5">
                  <a href="/">Help</a>
               </li>
            </ul>
            <div className="flex items-center h-[80px]">
               <button className=" bg-[#04ddb2] text-white font-bold px-[200px] py-3 mx-auto rounded-full">
                  Download
               </button>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
