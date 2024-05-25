// src/app/dashboard/[slug]/page.tsx
'use client';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import YouTube from 'react-youtube';
import  { ImageProps } from 'next/image';
import Learnfrom from '@/app/ui/crouses/From';
import { sql } from '@vercel/postgres';
type Course = {
    videono:string;
    title: string;
    description: string;
    videoId: string;
  };
  
  const courses: { [key: string]: Course } = {
    'fullsack': {
        videono:'1',
        title: 'Introduction to Fullstack Development',
     
      description: 'Full stack development is the process of designing, creating, testing, and deploying a complete web application from start to finish. It involves working with various technologies and tools, including front-end web development, back-end web development, and database development. And full stack development is a term used to describe a software engineer or developer who works with both the front and back end of a website or application. A full-stack developer is comfortable working with front-end and back-end technologies that power a website or application.',
      videoId: '2SPj4cpx3H4', // Add videoId here
    },
    'figma': {
        videono:'2',
        title: 'Networking Fundamentals',
        description: 'Full stack development is the process of designing, creating, testing, and deploying a complete web application from start to finish. It involves working with various technologies and tools, including front-end web development, back-end web development, and database development. And full stack development is a term used to describe a software engineer or developer who works with both the front and back end of a website or application. A full-stack developer is comfortable working with front-end and back-end technologies that power a website or application.',
        videoId: 'trB7S5IZquY', // Add videoId here
      },
  };


  export default function CoursePage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const course = courses[slug];
  
    if (!course) {
      notFound();
    }
  
    const [activeTab, setActiveTab] = useState(slug);
  
    const opts = {
      height: '500',
      width: '800',
      playerVars: {
        autoplay: 0,
      },
    };
  
    return (
      <div>
        <div className='flex'>
        <div className='basis-1/2'>
      <YouTube videoId={courses[activeTab].videoId} opts={opts} />
        <h1 className='text-white text-2xl font-semibold bg-lime-500 p-2 rounded-sm'> {courses[activeTab].videono} : {courses[activeTab].title}</h1>
        <p className='text-white font-light p-2'>{courses[activeTab].description}</p>
      </div>
      <div className="flex flex-col overflow-y-auto pb-2 border-b-2 bg-gray-700 bg-opacity-60 backdrop-filter backdrop-blur-lg px-3 ml-2 basis-2/4 rounded-md">
          {Object.keys(courses).map((courseKey) => (
            <button
              key={courseKey}
              onClick={() => setActiveTab(courseKey)}
              className={`px-4 py-2 ${activeTab === courseKey ? 'border-b-2 bg-lime-500  rounded-sm text-white' : 'text-white'}`}
            >
             {courses[courseKey].videono} {courses[courseKey].title}
            </button>
          ))}
        </div>
        </div>
  
       
       
      </div>
    );
  }