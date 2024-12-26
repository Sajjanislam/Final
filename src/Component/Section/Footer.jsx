import React from 'react'
import wh from '../../assets/wh-logo.png'
const Footer = () => {
  return (
    <div className='flex flex-col px-28 pt-12 gap-32 font-poppins text-white bg-red-800' >

      <div className="flex gap-[120px] justify-between ">
        <div className="w-[296px] gap-4">
          <img src={wh} alt="LOGO" />
          <p className='text-base font-normal leading-loose'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem
          </p>
        </div>

        <div className="flex justify-between gap-[120px]">

          <div className="gap-6 flex flex-col ">
            <h2 className='text-base font-bold '>Service</h2>
            <ul className='text-base font-normal flex flex-col gap-6 text-[#e6e6e6] leading-loose'>
              <li><a href="/">Domain</a></li>
              <li><a href="/">Shared Hosting</a></li>
              <li><a href="/">Cloud Hosting</a></li>
              <li><a href="/">Private Hosting</a></li>
            </ul>
          </div>

          <div className="gap-6 flex flex-col">
            <h2 className='text-base font-bold'>Hosting</h2>
            <ul className='text-base font-normal flex flex-col gap-6 text-[#e6e6e6] leading-loose'>
              <li><a href="/">Cheap Hosting</a></li>
              <li><a href="/">Hosting Wordpress</a></li>
              <li><a href="/">Email Hosting</a></li>
              <li><a href="/">Hosting Unlimited</a></li>
            </ul>
          </div>

          <div className="gap-6 flex flex-col">
            <h2 className='text-base font-bold'>Company</h2>
            <ul className='text-base font-normal flex flex-col gap-6 text-[#e6e6e6] leading-loose'>
              <li><a href="/">About</a></li>
              <li><a href="/">Career</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>

          <div className="gap-6 flex flex-col">
            <h2 className='text-base font-bold'>Help</h2>
            <ul className='text-base font-normal flex flex-col gap-6 text-[#e6e6e6] leading-loose'>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Help support</a></li>
            </ul>
          </div>
        </div>

      </div>
      {/* ========= */}
      <div className=" text-start text-white">
        Built by Jeremiah with love in Lagos. Copyright 2021
      </div>

    </div>

  )
}

export default Footer
