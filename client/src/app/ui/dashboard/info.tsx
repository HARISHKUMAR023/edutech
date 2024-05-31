import React from 'react'

const Info = () => {
  // Assuming these values are available
  const totalCoursesEnrolled = 10;
  const totalCertificationsObtained = 5;
  const leaderboardRange = 'Top 10%';

  return (
    <div className="flex justify-around bg-[#1a2332] py-7">
      <div className="card bg-blue-200 shadow-lg rounded p-4 m-2">
        <h2 className="text-xl font-bold mb-2">Total Courses Enrolled</h2>
        <p className="text-lg">{totalCoursesEnrolled}</p>
      </div>
      <div className="card bg-green-200 shadow-lg rounded p-4 m-2">
        <h2 className="text-xl font-bold mb-2">Total Certifications Obtained</h2>
        <p className="text-lg">{totalCertificationsObtained}</p>
      </div>
      <div className="card bg-purple-200 shadow-lg rounded p-4 m-2">
        <h2 className="text-xl font-bold mb-2">Leaderboard Range</h2>
        <p className="text-lg">{leaderboardRange}</p>
      </div>
    </div>
  )
}

export default Info