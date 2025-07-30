import React from 'react'
import CustomAnimate from '../layout/CustomAnimate'
import jai from '../assets/jai.jpg'

const HomeR = () => {
  return (
    <div>
      <div className="relative h-screen bg-black text-white flex items-center justify-center">
        <CustomAnimate />
        <div className="relative z-100 -mt-20 w-100 h-100 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg">
          <img
            src={jai}
            alt="Jai"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default HomeR
