import React from 'react';
import Info from '../ui/dashboard/info';
import PieChart from '../ui/dashboard/graph/pie';
import SplineChart from '../ui/dashboard/graph/splinechart';
// import dynamic from 'next/dynamic';

// const SplineChart = dynamic(() => import('../ui/dashboard/graph/splinechart'), { ssr: false });

const page = () => {
  return (
    <div className='dashbord-layout text-white'>
      <Info />
      {/* <div className="flex flex-row gap-4 mt-28 ">
        <div className="bg-primary dark:bg-dark2  dark:text-white rounded-md shadow-lg w-full">
          <SplineChart />
        </div>
        <div className="bg-primary dark:bg-dark2  dark:text-white rounded-md shadow-lg w-full">
          <PieChart />
        </div>
      </div> */}


   
    </div>
  )
}

export default page