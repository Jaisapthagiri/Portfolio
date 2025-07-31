import React from 'react'
import Bio from '../util/Bio'
import Button from '../components/Button'
import Typing from './Typing'

const HomeL = () => {
  return (
    <div className='lg:ml-20 sm:px-2 md:px-10 lg:py-0 sm:ml-10 mx-auto'>
      <div>
        <h1 className='text-teal-400 text-5xl sm:text-4xl md:text-5xl font-bold'>Hi, I am</h1>
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-[900] mb-4 ml-4 sm:ml-4 uppercase text-purple-500 mt-5">{Bio.name}</h1>
      </div>
      <div >
        <h1 className='text-blue-400 ml-5 font-medium text-3xl sm:text-2xl md:text-3xl'>
          I&nbsp; am&nbsp; a&nbsp; &nbsp;
          <br className='block sm:hidden' />
          <span className='text-amber-600 font-bold'>
            <Typing /></span></h1>
      </div>
      <div className="w-full max-w-5xl mt-5">
        <p className="mb-4 lg:w-120 text-gray-200/70 text-[20px] sm:text-[18px]  md:text-[20px] leading-relaxed">{Bio.description}</p>
      </div>
      <div>
        <a
          href={Bio.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 mt-4"
          >
          <Button>
          View Resume
          </Button>
        </a>
        
      </div>
    </div>
  )
}

export default HomeL;