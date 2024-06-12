import React from 'react';
import bgpattern from "../../../../public/bg-patten.svg";
import Image from 'next/image';
import "./website.css";
const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Software Engineer',
    company: 'Tech Innovations',
    testimonial: 'This course provided me with the practical skills and knowledge I needed to advance my career. Highly recommended!'
  },
  {
    name: 'John Smith',
    role: 'Data Analyst',
    company: 'DataWiz',
    testimonial: 'A comprehensive and engaging course that covers the essentials. The instructors are knowledgeable and supportive.'
  },
  // Add more testimonials as needed
];

const Whatpeoplesay = () => {
  return (
    <div className='bg-primary py-10 flex' id="whatpeoplesay" >
        {/* <Image src={bgpattern} alt='bgpattern' className='absolute' /> */}
      <div className='max-w-4xl mx-auto z-40'>
        <h2 className='text-center text-3xl font-bold mb-2 text-lime-500 capitalize'>What People Say </h2>
        <p className='text-center mb-6 text-gray-400'>Lorem ipsum dolor sit amet, consectetur.</p>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='bg-lime-500 text-white shadow-lg rounded-lg p-6 mb-4 '>
            <p className='text-gray-800 text-lg capitalize'>{testimonial.testimonial}</p>
            <p className='mt-4 font-semibold capitalize'>{testimonial.name}</p>
            <p className='text-sm text-gray-100 capitalize'>{testimonial.role} at {testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whatpeoplesay;