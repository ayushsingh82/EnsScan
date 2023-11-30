import React from 'react'
import { FaTwitter,FaLinkedinIn,FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { RiAccountPinBoxFill } from "react-icons/ri";

function Header() {
  return (
    <>
    <div className='flex  h-[80px] '>
    <h1 className='font-semibold text-4xl h-[70px] mt-[55px] ml-[70px] p-[5px] border border-transparent rounded-xl 
 bg-gradient-to-l
     from-purple-600
     via-purple-700
     to-purple-800
     text-transparent
     bg-clip-text   
     hover:scale-110 transition-all duration-500 ease-in-out'>
    <span className='shadow-lg shadow-purple-400 '>EnsScan</span></h1>
    <div className='flex gap-x-5 text-2xl mt-[70px] mr-[10px] lg:ml-[1100px] ml-[400px]'>
    {/* <NavLink
    to="https://www.linkedin.com/in/ayush-singh-02b978248"
    target="_blank">
    <FaLinkedinIn/></NavLink>

    <NavLink
   to=""
   target="_blank">
    <FaTwitter/>
    </NavLink> */}

    <FaLinkedinIn/>
    <FaTwitter/>
    <FaGithub/>
    </div>
  </div>
  <div className='mt-[100px] hover:scale-110 transition-all duration-500 ease-in-out'>
    <h1>
    <span className='text-5xl font-medium bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text shadow-sm '>Get Every Thing From</span>
    <br/>
    <br/>
    <span className='text-5xl font-medium bg-gradient-to-l from-gray-900 via-purple-900 to-violet-600 text-transparent bg-clip-text shadow-sm'>ENS Domain</span>  </h1>
    <br/>
    <br/>
    <p className='text-2xl text-slate-800'>Enter name.eth to get details</p>
  </div>
  </>
  )
}

export default Header





