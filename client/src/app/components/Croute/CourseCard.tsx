// components/CourseCard.tsx

import React from 'react';

interface CourseCardProps {
  icon: React.ReactNode;
  title: string;
  courseCount: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ icon, title, courseCount }) => {
  return (
    <div className="flex flex-col items-center bg-lime-100/30 p-6 rounded-lg shadow-md hover:bg-lime-500 hover:text-white">
      <div className="bg-white p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold  text-center ">{title}</h3>
      <p className="text-sm  ">{courseCount}</p>
    </div>
  );
};

export default CourseCard;
