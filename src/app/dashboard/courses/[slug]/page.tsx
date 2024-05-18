// src/app/dashboard/[slug]/page.tsx

import { notFound } from 'next/navigation';


import  { ImageProps } from 'next/image';
import Learnfrom from '@/app/ui/crouses/From';
type Course = {
//   bgimage:ImageProps['src'];
  title: string;
  description: string;
};

const courses: { [key: string]: Course } = {
  'introfs': {
   
    title: 'Full Stack Web Development: From Zero to HeroFullstack Development',
    description: 'Full stack development is the process of designing, creating, testing, and deploying a complete web application from start to finish. It involves working with various technologies and tools, including front-end web development, back-end web development, and database development. And full stack development is a term used to describe a software engineer or developer who works with both the front and back end of a website or application. A full-stack developer is comfortable working with front-end and back-end technologies that power a website or application. ',
  },
 
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const course = courses[slug];

  if (!course) {
    notFound();
  }

  return (
    <div>
      <iframe src="https://youtu.be/2SPj4cpx3H4?si=xBMkCApSh-SYH5fi" width={700} height={700}></iframe>
      <h1 className='text-white'>{course.title}</h1>
    </div>
  );
}
