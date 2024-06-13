import React from 'react'

const Info = () => {
  // Assuming these values are available
  const totalCoursesEnrolled = 10;
  const totalCertificationsObtained = 5;
  const leaderboardRange = '10%';
  const progress = 75; // Progress value

  const radius = 50;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <div className="flex justify-around rounded-lg bg-[#242c39] py-7">
      <div className="card border-2 border-blue-200 text-blue-200 rounded-lg p-4 m-2 
                    hover:bg-blue-200 hover:text-gray-800 hover:shadow-md hover:shadow-blue-200">
        <h2 className="text-xl font-bold mb-2">Total Courses Enrolled</h2>
        <p className="text-lg">{totalCoursesEnrolled}</p>
      </div>
      <div className="card border-2 border-green-200 rounded-lg p-4 m-2 text-green-200
                    hover:bg-green-200 hover:text-gray-800 hover:shadow-md hover:shadow-green-200 ">
        <h2 className="text-xl font-bold mb-2">Total Certifications Obtained</h2>
        <p className="text-lg">{totalCertificationsObtained}</p>
      </div>
      {/* <div>
      <svg
        height={radius * 2}
        width={radius * 2}
        className="mt-4"
      >
        <circle
          stroke="blue"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          stroke="#51c5cf"
          strokeWidth="2px"
          dy=".3em"
        >
          {leaderboardRange}
        </text>
   
      </svg>
      <h2 className='text-white font-bold text-center'>TOP</h2>
      </div> */}
      
    
    </div>
  )
}

export default Info