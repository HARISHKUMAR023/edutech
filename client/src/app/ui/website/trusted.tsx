import React from 'react';
import Image from 'next/image';
import bgimg from '../../../../public/bg-wave.svg';
import logo from '../../../../public/logo-main.svg';
import amzon from '../../../../public/amzon.svg';
import amd from '../../../../public/icone/amd.svg';
import sptify from '../../../../public/icone/sptify.svg';
import cisco from '../../../../public/icone/cisco.svg';
import logitc from '../../../../public/icone/logitc.svg';
import dropcam from '../../../../public/icone/dropcam.svg';
const Trusted = () => {
  return (
    <section className='bg-primary'>

         <Image src={bgimg}alt='bg-wave' className=' w-screen -z-50 '></Image>
         <div className="bg-white text-center py-5">
  <p className="text-primary mb-4">Trusted by the world&apos;s best</p>
  <div className="flex justify-center items-center space-x-24 py-5">
    {/* Example logos - replace src with your actual logo paths */}
    <Image src={amzon} alt="Company 1 Logo" className="h-12 mx-8" />
    <Image src={amd} alt="Company 2 Logo" className="h-12 mx-8" />
    <Image src={sptify} alt="Company 3 Logo" className="h-12 mx-8" />
    <Image src={cisco} alt="Company 1 Logo" className="h-12 mx-8" />
    <Image src={logitc} alt="Company 2 Logo" className="h-12 mx-8" />
    <Image src={dropcam} alt="Company 3 Logo" className="h-12 mx-8" />
    {/* Add more logos as needed */}
  </div>
</div>
   
    </section>
  )
}

export default Trusted