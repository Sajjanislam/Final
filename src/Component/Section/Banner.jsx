import React from 'react'
import {Link} from 'react-router-dom'
import banner from '../../assets/Group 6.png'

const Banner = () => {
  return (
    <div className='flex justify-between px-28 pt-12 items-center font-poppins ' >
        <div className="text">
            <div className="ul">
                <ul className='flex gap-4 font-poppins'>
                    <a className='text-red-800 font-semibold' href="">Hosting</a>
                    <a className='font-semibold text-[#D6D4D4]' href="">Domain</a>
                    <a className='font-semibold text-[#D6D4D4]' href="">SEO </a>
                    <a className='font-semibold text-[#D6D4D4]' href="">Email</a>
                </ul>
            </div>

            <h2 className="w-[608px] mt-8 text-[#2e2e2e] text-[64px] font-bold leading-[77.50px]">Premium Web Hosting for Your Website</h2>
            <p className="w-[448px] text-[#7f7f7f] text-base font-normal leading-7 mt-8">
            Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.
            </p>

            <div className="flex gap-14 mt-14">
                <button className='p-3 bg-[#b00000] rounded-lg shadow justify-center items-center gap-2.5 text-white hover:font-bold'>Create an Account</button>
                <button className='p-3 rounded-lg shadow justify-center items-center gap-2.5 border border-black'>Choose your plan</button>
            </div>
        </div>

        <div className="img ">
            <img src={banner} alt="banner"  />
        </div>
    </div>
  )
}

export default Banner