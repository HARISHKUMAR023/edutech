import React from 'react'
import CourseForm from '@/app/ui/admin/CourseForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Page = () => {
  return (
    <div className='flex justify-between'> 
        <div className='w-1/2'>
            <h1 className="text-xl text-center font-semibold mt-10">Create a new course</h1>
            <CourseForm   />
        </div>
        <div className='w-1/2'>
            <h1 className="text-xl text-center font-semibold mt-10">Available Crouse</h1>
          
        </div>
       
       < ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </div>
  )
}

export default Page