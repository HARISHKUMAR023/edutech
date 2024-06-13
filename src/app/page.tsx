"use client"
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import { Navbaredu } from "./ui/website/navbar";
import Main from "./ui/website/main";
import Trusted from "./ui/website/Trusted";
import Categories from "./ui/website/categories";
import Whatpeoplesay from "./ui/website/Whatpeoplesay";
import Fotter from "./ui/website/Fotter";
export default function Home() {
  
  return (
    <main className="bg-primary w-full h-screen ">
   <Navbaredu/>
   <Main/>
   <Trusted/>
   <Categories/>
   <Whatpeoplesay/>
   <Fotter/>
    </main>
  );
}
