import React from 'react'
import Certificates from '../components/Certificates'

const Certi = () => {
  return (
    <div>
        <h1 className='text-[40px] text-center hover:text-white text-gray-100/80 mt-20' data-aos="fade-left">Certificates</h1>
        <div>
            <Certificates data-aos="fade-right"/>
        </div>
    </div>
  )
}

export default Certi