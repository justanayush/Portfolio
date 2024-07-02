import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'

const AboutMe = () => {
  return (
    <>
    <div className='h-screen bg-gradient-to-r from-slate-900 to-slate-700'>
       <Navbar />
       <Intro />
    </div>
    </>
  )
}

export default AboutMe