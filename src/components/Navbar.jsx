import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
const Navbar = () => {

  return (
    
    <>
    <img className="w-16 fixed mt-4 ml-10" src={logo}  alt="" />
    <nav className=' py-6 mt-3 fixed flex text-white w-5/12 h-10 rounded-sm justify-around items-center left-1/2 transform -translate-x-1/2' >
        <div className='links cursor-pointer p-2' ><a href="#intro">About Me</a></div>
        <div className='links cursor-pointer p-2' ><a href="#skills">Skills</a></div>
        <div className='links cursor-pointer p-2 ' ><a href="#projects">Projects</a></div>
        <div className='links cursor-pointer p-2 ' ><a href="#contactme">Contact Me</a></div>
    </nav>
    </>
  )
}

export default Navbar



