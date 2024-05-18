import React from 'react'
import Image from 'next/image'
import  { ImageProps } from 'next/image';
// interface LearnProps {
//     bgimage:ImageProps['src'];
//     title:string;
//     description:string;
  
// }
const Learnfrom:React.FC = ()=> {
  return (
    <div className='mt-8 bg-zinc-700 p-4 rounded-sm'>
      <h1 className='text-white text-4xl font-bold'>
What are the <span className='text-lime-500' >Things you Master</span> from Course?
</h1>
      
    </div>
  )
}

export default Learnfrom