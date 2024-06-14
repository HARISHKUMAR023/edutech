"use client"
import Image from "next/image";
import Link from "next/link";

import React, { useState , useEffect} from 'react';
import { Navbaredu } from "./ui/website/navbar";
import Main from "./ui/website/main";
import Trusted from "./ui/website/Trusted";
import Categories from "./ui/website/categories";
import Whatpeoplesay from "./ui/website/Whatpeoplesay";
import Fotter from "./ui/website/Fotter";
export default function Home() {
  useEffect(() => {
    const brandingMessage = "%cKavasam Learning Academy";
    const brandingStyles = `
      color: green;
      font-size: 16px;
      font-weight: bold;
      font-family: 'Inter', sans-serif;
    `;
    console.log(brandingMessage, brandingStyles);

    // Developer credit message
    console.log("%cDeveloped by Harishkumar & sivadharshan - Full Stack Engineers  ", "color: blue; font-size: 14px;");

    const hackerArt = `
         ,----------------,              ,---------,
    ,-----------------------,          ,"        ,"|
  ,"                      ,"|        ,"        ,"  |
 +-----------------------+  |      ,"        ,"    |
 |  .-----------------.  |  |     +---------+      |
 |  |                 |  |  |     | -==----'|      |
 |  |  I LOVE CODING! |  |  |     |         |      |
 |  |  Bad command or |  |  |/----|'---=    |      |
 |  |  C:\\>_          |  |  |   ,/|==== ooo |      ;
 |  |                 |  |  |  // |(((( [33]|    ,"
 |  '-----------------'  |," .;'| |((((     |  ,"
 +-----------------------+  ;;  | |         |,"
    /_)______________(_/  //'   | +---------+
___________________________(____)___________)
    `;
    console.log("%c%s", "color: red; font-family: monospace;", hackerArt);
  }, []);
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
