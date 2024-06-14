"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CrouseCard from '@/app/components/crousecard';

// Define a type for the course data
interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  crouseurl: string;
}

const Page = () => {
  // Use the Course type to type the courses state
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('YOUR_BACKEND_ENDPOINT');
        setCourses(response.data); // Ensure your backend returns data that matches the Course type
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className='bg-primary'>
      {courses.map((course) => (
        <CrouseCard
          key={course.id}
          title={course.title}
          description={course.description}
          image={course.image}
          crouseurl={course.crouseurl}
        />
      ))}
      {/* <CodeMirrorEditor/> */}
    </div>
  );
};

export default Page;