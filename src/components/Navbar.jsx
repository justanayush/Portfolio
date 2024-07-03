import React from 'react';
import logo from '../assets/logo.png';
const Navbar = () => {


  return (
    <>
    <img className="w-16 fixed mt-4 ml-10" src={logo}  alt="" />
    <nav className='py-6 mt-3 fixed flex text-white w-1/3 h-10 rounded-sm justify-around items-center left-1/2 transform -translate-x-1/2' >
        <div className='links cursor-pointer p-2' >About Me</div>
        <div className='links cursor-pointer p-2 ' >Projects</div>
        <div className='links cursor-pointer p-2 ' >Contact Me</div>
    </nav>
    </>
  )
}

export default Navbar