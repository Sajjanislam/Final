import React from 'react'
import co1 from '../../assets/co1.png'
import co2 from '../../assets/co2.png'
import co3 from '../../assets/co3.png'
import co4 from '../../assets/co4.png'
import co5 from '../../assets/co5.png'
import co6 from '../../assets/co6.png'
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png'
import a3 from '../../assets/a3.png'
import a4 from '../../assets/a4.png'




const Cloud = () => {
  return (
    <div className='flex flex-col justify-between px-28 pt-12 gap-11 font-poppins '>

<div className="flex justify-between gap-24">

      <div className="flex justify-between items-start ">

        <div className='flex flex-col w-[594px]'>
          <h2 className=" text-[40px] font-extrabold leading-[64px]">
            True Cloud Web  Hosting
          </h2>
          <p className='text-lg font-normal'>
            True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.
          </p>
        </div>
      </div>

        <div className="img flex flex-wrap  w-[549px] gap-8">
         <img  className="w-[140.71px] h-[30px]" src={co1} alt="" />
         <img  className="w-[140.71px]" src={co2} alt="" />
         <img  className="w-[125px] h-[53.53px]" src={co3} alt="" />
         <img  className="w-[172px] h-[92px]" src={co4} alt="" />
         <img  className="w-[168px] h-14" src={co5} alt="" />
         <img  className="w-[143px] h-[47px]" src={co6} alt="" />
        </div>
</div>
      {/*  ======================= */}
      <div className="flex justify-between">
        <div className="w-[252px] text-center flex flex-col items-center ">
          <img src={a1} alt="a1" />
          <p className='text-xl font-bold'>99.9% Uptime</p>
          <p className='text-center text-xs font-light '>We Keep Your Web build Online 24x7x365.
          Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
        </div>

        <div className="w-[252px] text-center flex flex-col items-center ">
          <img src={a2} alt="a1" />
          <p className='text-xl font-bold'>Blazing Fast Web Hosting</p>
          <p className='text-center text-xs font-light '>We Keep Your Web build Online 24x7x365.
          Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
        </div>

        <div className="w-[252px] text-center flex flex-col items-center ">
          <img src={a3} alt="a1" />
          <p className='text-xl font-bold'>Free SSL Certificates</p>
          <p className='text-center text-xs font-light '>We Keep Your Web build Online 24x7x365.
          Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
        </div>

        <div className="w-[252px] text-center flex flex-col items-center ">
          <img src={a4} alt="a1" />
          <p className='text-xl font-bold'>24x7 Friendly Support</p>
          <p className='text-center text-xs font-light '>We Keep Your Web build Online 24x7x365.
          Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
        </div>

      </div>
    </div>
  )
}

export default Cloud
