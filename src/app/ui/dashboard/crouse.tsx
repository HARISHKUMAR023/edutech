import CrouseCard from '@/app/components/crousecard';
import fs from '../../../../public/fs2.jpeg'
import fullstack from "../../../../public/fullstackbanner.jpeg";
import figmaCourseImage from "../../../../public/figma2.jpeg";
const Crouse = () => {
  return (
    <div>
        <div className='flex items-center justify-between py-4'>
        <h2 className='text-white font-semibold text-2xl'>Master the Skills <br />
<span className='text-lime-500'>You Need to Succeed Pro in  Tech</span></h2>
<div>
<form className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-lime-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

</div>

        </div>
        <hr className='h-2 bg-gray-500 m-3' />
       <div className='grid grid-cols-3 gap-3'>

       <CrouseCard 
          title="Full Stack Web Development: From Zero to Hero" 
          description="Learn front-end technologies like HTML, CSS, JavaScript, and React.\nMaster back-end technologies like Node.js, Express, and MongoDB." 
          image={fullstack}

          crouseurl='/dashboard/fullstack'
        
        />

<CrouseCard 
  title="Mastering UI Design with Figma" 
  description="Learn to create stunning user interfaces using Figma.\nMaster the tools and techniques used by professional designers." 
  image={figmaCourseImage}
  crouseurl='/dashboard/figma'
/>
        </div> 

    </div>
  )
}

export default Crouse