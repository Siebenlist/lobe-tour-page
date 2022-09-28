import React from "react";

const Footer = () => {
   return (
      <div className="flex flex-col-reverse md:flex-row md:gap-10 lg:gap-32 max-w-[1024px] items-center justify-center mx-auto border-t-2 pt-10">
         <div className="py-10">
            <h1 className="font-bold text-xl md:text-2xl pb-2">LOBE</h1>
            <p className="pb-2 md:text-lg lg:text-xl">
               A product by Microsoft.
            </p>
            <p className="pb-2 md:text-lg lg:text-xl">All rights reserved.</p>
            <p className="pb-2 md:text-lg lg:text-xl">© Microsoft 2021</p>
         </div>
         <div className="flex flex-row gap-10">
            <div>
               <p className="pb-2 font-bold md:text-lg lg:text-xl">About</p>
               <ul className="md:text-lg">
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     Download
                  </li>
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     Overview
                  </li>
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     Examples
                  </li>
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     Blog
                  </li>
               </ul>
            </div>
            <div>
               <p className="pb-2 font-bold md:text-lg lg:text-xl">General</p>
               <ul className="md:text-lg">
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     Notice
                  </li>
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     License
                  </li>
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     Press Inquiry
                  </li>
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     Press Images
                  </li>
               </ul>
            </div>
            <div>
               <p className="pb-2 font-bold md:text-lg lg:text-xl">Resources</p>
               <ul className="md:text-lg">
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     Help
                  </li>
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     Tour
                  </li>
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     Contact
                  </li>
                  <li className="cursor-pointer pb-2 hover:scale-105 ease-in-out duration-300">
                     Privacy
                  </li>
               </ul>
               <div></div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
