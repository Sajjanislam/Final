import React from 'react'
import logo from '../../assets/Rectangle 3.png'
import i from '../../assets/Rectangle 5.png'
import { IoCallOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div className='flex justify-between px-28 pt-12 items-center gap-32 font-poppins' >

        <div className="logo flex gap-16 items-center">
          {/* <Image href='/' src={logo} alt='logo'/> */}
          <img src={logo} alt='logo' />
          <a href='/' className='hover:font-semibold hover:text-red-800 ' >Our Services</a>
        </div>


        <div className="menu ">
          <ul className=' flex gap-8 '>
            <a  className='hover:font-semibold hover:text-red-800 ' href="/">About</a>
            <a  className='hover:font-semibold hover:text-red-800 ' href="/">Blog&News</a>
            <a  className='hover:font-semibold hover:text-red-800 ' href="/">Contact</a>
          </ul>
        </div>

        <div className="contact flex gap-8 items-center">
          <a href='/'  className='hover:font-semibold hover:text-red-800 ' >Account</a>
          <img src={i} alt='i'/>
          <div className="call flex items-center gap-2 hover:font-semibold hover:text-red-800 '">
          <IoCallOutline className='text-red-500 w-5 font-semibold' />
          <a href='/'>+2349067322844</a>

          </div>
        </div>
    </div>
  )
}

export default Navbar