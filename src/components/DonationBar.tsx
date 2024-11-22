import React from 'react'

interface DonationBarProps {
  goal: number
  current: number
}

const DonationBar: React.FC<DonationBarProps> = ({ goal, current }) => {
  const progress = Math.min((current / goal) * 100, 100)

  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <div className="font-bold mb-2">
        ${current.toLocaleString()}{' '}
        <span className="text-gray-500">RAISED OF</span> $
        {goal.toLocaleString()}
      </div>
      <div className="h-5 bg-gray-300 rounded-full overflow-hidden relative mb-4">
        <div
          className="h-full bg-orange-400 transition-[width] duration-300 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <a href="https://fresharts.app.neoncrm.com/forms/fs---forgn-2024-gt">
        <button className="bg-customButton rounded-full text-white py-3 px-5 m-3 transform hover:scale-105 transition duration-300 ease-in-out">
          DONATE NOW
        </button>
      </a>
    </div>
  )
}

export default DonationBar
