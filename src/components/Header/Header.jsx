import React from 'react'
import { FaTwitter,FaLinkedinIn } from "react-icons/fa";
// import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='flex  h-[80px] '>
    <h1 className='font-semibold text-4xl h-[70px] mt-[55px] ml-[70px] p-[5px] border border-transparent rounded-xl 
 bg-gradient-to-l
     from-purple-600
     via-purple-700
     to-purple-800
     text-transparent
     bg-clip-text   
    '>
    <span className='shadow-2xl'>EnsScan</span></h1>
    <div className='flex gap-x-5 text-2xl mt-[70px] mr-[10px] lg:ml-[1100px] ml-[400px]'>
    {/* <NavLink
    to="https://www.linkedin.com/in/ayush-singh-02b978248"
    target="_blank">
    <FaLinkedinIn/></NavLink>

    <NavLink
   to="https://x.com/eth_ayushS"
   target="_blank">
    <FaTwitter/>
    </NavLink> */}
    
    <FaLinkedinIn/>
    <FaTwitter/>
    </div>
  </div>
  )
}

export default Header

// text-black bg-slate-200 hover:text-white hover:bg-slate-800



