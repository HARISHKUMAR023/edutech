// src/app/dashboard/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Home from '@/app/ui/crouses/home';
import mern2 from '../../../../public/fullstack4.jpeg'
import figma from '../../../../public/figmab.jpeg'
import  { ImageProps } from 'next/image';
import Learnfrom from '@/app/ui/crouses/From';
type Course = {
  bgimage:ImageProps['src'];
  title: string;
  description: string;
  crouseurl:string;
};

const courses: { [key: string]: Course } = {
  'fullstack': {
    bgimage:mern2,
    title: 'Full Stack Web Development: From Zero to HeroFullstack Development',
    description: 'Full stack development is the process of designing, creating, testing, and deploying a complete web application from start to finish. It involves working with various technologies and tools, including front-end web development, back-end web development, and database development. And full stack development is a term used to describe a software engineer or developer who works with both the front and back end of a website or application. A full-stack developer is comfortable working with front-end and back-end technologies that power a website or application. ',
    crouseurl:'/dashboard/courses/fullsack',
  },
  'figma': {
    bgimage:figma,
    title: 'Mastering UI Design with Figma',
    description: 'Figma works on any operating system that runs a web browser. Macs, Windows PCs, Linux machines, and even Chromebooks can be used with Figma. It is the only design tool of its type that does this, and in shops that use hardware running different operating systems, everyone can still share, open, and edit Figma files. In many organizations, designers use Macs and developers use Windows PCs. What does Figma do to help bring these groups together? Figma’s universal nature prevents the annoyance of PNG-pong (where updated images are bounced back and forth between design team disciplines). In Figma, there is no need for a mediating mechanism to make design work available to everyone.',
    crouseurl:'/dashboard/courses/introfs',
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
      <Home bgimage={course.bgimage} title={course.title} description={course.description} crouseurl={course.crouseurl} />
      <Learnfrom />
      {/* <h1 className='text-white'>{course.title}</h1>
      <p className='text-white'>{course.description}</p> */}
    </div>
  );
}
