import React from 'react';
import Image from 'next/image';
import hero from '../../../../public/coding.svg';
import ParticlesContainer from '../Auth/ParticlesContainer';

import Link from 'next/link';
const   Main = () => {
  return (
    <div className='container mx-auto  '>
       
  <ParticlesContainer />
<div className=' flex  items-center justify-center z-50 px-32 mt-32'>
<div className='basis-1/2'>
<h1 className='text-6xl leading-normal font-bold text-white capitalize'>Master the Skills <br /> to Drive your <span className='text-lime-500 underline'> Career</span></h1>
<p className='text-gray-300 leading-normal mb-8'>Free online courses from the world’s leading experts. <br />
Join 17 million learners today</p>
<Link href="#" className='bg-lime-500 py-5 px-8 rounded-full font-medium hover:bg-lime-500/80 backdrop-blur-sm transition-all duration-300 ease-in-out text-white'>
Join for Free
</Link>

<Link href="#" className='border-2 ml-4 border-lime-500 py-5 px-8 rounded-full font-medium hover:bg-lime-500/80 backdrop-blur-sm transition-all duration-300 ease-in-out text-white'>
Find Courses
</Link>
    </div>

    <div className='basis-1/2'>
<Image src={hero} alt='hero' width={500} height={500} className='ml-16'/>
    </div>
</div>


    </div>
  )
}

export default Main