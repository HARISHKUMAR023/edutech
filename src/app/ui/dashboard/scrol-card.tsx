"use client";
import React from "react";
import Image from "next/image";
import full from "../../../../public/mern.png";
import fs1 from "../../../../public/fs1.jpeg";
import fs2 from "../../../../public/fs2.jpeg";
import fs3 from "../../../../public/fs3.jpeg";
import fs4 from "../../../../public/fs4.jpeg";
import mern2 from "../../../../public/mern2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { Carousel } from "flowbite-react";

const Scrolcard = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
     
      <Carousel>
        <Image src={full} alt="..." />
        <Image src={mern2} alt="..." />
        <Image src={full} alt="..." />
        {/* <Image src={fs2} alt="..." />
        <Image src={fs3} alt="..." />
        <Image src={fs4} alt="..." />
        <Image src={fs5} alt="..." /> */}
      </Carousel>

      {/* <Image
      src={full}
      width={500}
      height={500}
      alt="Picture of the author"
    /> */}
      {/* <Carousel>
        <div>
          <Image
            src={full}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <Image
            src={full}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <Image
            src={full}
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> */}
    </div>
  );
};

export default Scrolcard;
