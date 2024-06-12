import React from 'react';
import CourseCard from '@/app/components/Croute/CourseCard';
import { FaDollarSign, FaPenNib, FaBullhorn, FaLaptopCode, FaBuilding, FaUser } from 'react-icons/fa';

const courseCategories = [
    
  { icon: <FaDollarSign className="text-blue-500" size={24} />, title: 'Finance Accounting', courseCount: '129+ Courses' },
  { icon: <FaPenNib className="text-purple-500" size={24} />, title: 'Design Creative', courseCount: '573+ Courses' },
  { icon: <FaBullhorn className="text-pink-500" size={24} />, title: 'Sales Marketing', courseCount: '565+ Courses' },
  { icon: <FaLaptopCode className="text-green-500" size={24} />, title: 'Development IT', courseCount: '126+ Courses' },
  { icon: <FaBuilding className="text-blue-500" size={24} />, title: 'Engineering Architecture', courseCount: '35+ Courses' },
  { icon: <FaUser className="text-red-500" size={24} />, title: 'Personal Development', courseCount: '908+ Courses' },
];

const Categories: React.FC = () => {
  return (
    <div className='mt-16'>
        <h1 className='text-center font-semibold text-3xl text-primary py-4'>Top Categories</h1>
        <p className='text-center text-primary'>Lorem ipsum dolor sit amet, consectetur.</p>
        <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {courseCategories.map((category, index) => (
          <CourseCard
            key={index} 
            icon={category.icon} 
            title={category.title} 
            courseCount={category.courseCount} 
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button className="text-gray-400 hover:text-gray-700 mx-2">
          ←
        </button>
        <div className="flex space-x-1">
          {[...Array(6)].map((_, i) => (
            <button key={i} className={`w-2 h-2 rounded-full ${i === 3 ? 'bg-purple-600' : 'bg-gray-300'}`}></button>
          ))}
        </div>
        <button className="text-gray-400 hover:text-gray-700 mx-2">
          →
        </button>
      </div>
      </div>
    </div>
  )
}

export default Categories