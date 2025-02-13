import React from "react";
import Image from "next/image";
import kavasam from "../../../public/logo-main.svg";
import { Bars3BottomLeftIcon , BellAlertIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  return (
    <div className="text-white p-3 px-8 backdrop-blur-sm flex flex-row justify-between w-full h-16 items-center rounded-lg 
                      border-r border-b border-lime-400 bg-gradient-to-r from-gray-800 via-gray-800 via-65% to-lime-400/70">
      <div>
        <p>Dashbord / Home</p>
      </div>

      <div className="flex justify-between">
        {/* <p className="mx-2">meassage</p> */}
        <BellAlertIcon className="w-6 mx-4" />
   <Image src={kavasam} className="rounded-full bg-white/40 mx-4 p-1" alt="user profile pic" width={40} height={60}/>
        {/* <p className="mx-2">::</p> */}
        <Bars3BottomLeftIcon className="w-6 mx-4" />
      </div>
    </div>
  );
};

export default Navbar;
