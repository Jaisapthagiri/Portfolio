import React from 'react'
import Skil from '../components/Skil';
 
const Skills = () => {
  return (
    <div>
      <div className='text-center lg:-mt-30 text-gray-200/50'>
        <h1 className='text-[40px] hover:text-gray-100/80'>Skills</h1>
        <h1 className='text-2xl'>Here are a few skills I have gained through my learning journey.</h1>
      </div>
        <Skil />
    </div>
  )
}

export default Skills;