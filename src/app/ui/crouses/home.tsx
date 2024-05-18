import React from 'react'
import Image from 'next/image'
import  { ImageProps } from 'next/image';
import Link from 'next/link';
interface HomeProps {
    bgimage:ImageProps['src'];
    title:string;
    description:string;
    crouseurl:string;
  
}
const Home:React.FC<HomeProps> = ({bgimage,title,description,crouseurl})=> {
  return (
    <div className='flex justify-around'>
       <Image className="rounded-t-lg" src={bgimage} alt={title}  width={500}  height={500}/>
       <div className='bg-zinc-700'>
              <h1 className='text-white text-3xl font-bold p-4'>{title}</h1>
              <p className='text-white text-1xl font-light p-2'>{description}</p>
              <Link href={crouseurl} className='bg-lime-500 shadow-lg shadow-lime-500/50 hover:shadow-xl  py-2 px-3 rounded-lg m-2 mt-8 font-semibold text-white'>Enroll now </Link>
       </div>
      
    </div>
  )
}

export default Home