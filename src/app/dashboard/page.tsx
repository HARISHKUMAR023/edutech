"use client";
import React from 'react';
import Info from '../ui/dashboard/info';
import PieChart from '../ui/dashboard/graph/pie';
import SplineChart from '../ui/dashboard/graph/splinechart';
import  { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
// import dynamic from 'next/dynamic';

// const SplineChart = dynamic(() => import('../ui/dashboard/graph/splinechart'), { ssr: false });

const Page:React.FC = () => {
  const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            const token = localStorage.getItem('token');
            if (!token) {
                router.push('/');  // Redirect to login if no token
            }
        }
    }, [user, router]);

    if (!user) return <p>Loading...</p>;
  return (
    <div className='dashbord-layout text-white'>
      <Info />
      <h1>Welcome to the Dashboard, {user.username}!</h1>
      <p>Your role: {user.role}</p>
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

export default Page