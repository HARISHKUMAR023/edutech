"use client"
import Image from "next/image";
import Link from "next/link";

import React, { useState } from 'react';
import { Navbaredu } from "./ui/website/Navbaredu";
import Mainedu from "./ui/website/Mainedu";
import Trusted from "./ui/website/trusted";
import Categories from "./ui/website/categories";
import Whatpeoplesay from "./ui/website/Whatpeoplesay";
import Fotter from "./ui/website/Fotter";
export default function Home() {
  
  return (
    <main className="bg-primary w-full h-screen ">
   <Navbaredu/>
   <Mainedu/>
   <Trusted/>
   <Categories/>
   <Whatpeoplesay/>
   <Fotter/>
    </main>
  );
}
