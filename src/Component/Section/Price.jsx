import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";

const Price = () => {
  return (
    <div className='flex flex-col px-28 mt-12 justify-center items-center font-poppins '>

      <div className="w-[856px] gap-9 flex flex-col justify-center items-center">
        <h2 className='text-[55px] text-center font-semibold leading-[60px] '>
          Ready to get started with
          Lemon Wares?
        </h2>
        <p className='text-center text-[25px] leading-[25px]'>
          Choose the package that suits you
        </p>
        <div className="flex gap-7 items-center">
          <p>Monthly</p>
          <input
            type="checkbox"
            className="toggle bg-red-800  [--tglbg:white] hover:bg-red-800"
            defaultChecked />
          <p>Yearly</p>
          <p className='text-[10px]'><span className='bg-yellow-300 p-2 rounded-md'>20%  discount</span></p>
        </div>

        <div role="tablist" className="tabs tabs-bordered w-[856px]">
          <a role="tab" className="tab text-3xl font-semibold tab-active active:text-red-800">Basic</a>
          <a role="tab" className="tab text-3xl font-semibold ">Premium</a>
        </div>
      </div>
      {/* ========================= card ============================= */}

      <div className="pcr flex justify-between gap-[100px] ">

      <div className="card mt-12 ">
        <div className=" cr1 w-80 border-2 border-black rounded-xl gap-9 flex flex-col p-8 ">

          <div className=" flex flex-col gap-3 ">
            <p className='font-semibold text-[28px] leading-[25px]'>Starter</p>
            <p className='text-[12px] leading-3'>with all your customers via all conversation channels in one central dashboard.</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className='font-semibold text-[42px] leading-8'>$2.80</p>
            <p className='font-light text[14px] leading-[14px]'>Per month</p>
          </div>

          <button className='rounded-xl border-2 border-black py-3 font-semibold text-[14px] leading-8'>Choose this Plan</button>

          <div className="gap-7 flex flex-col">
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              2GB SSD
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              10GB Bandwidth
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              15 Email Accounts
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              Unlimited Database
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              4 Subdomains
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              1 Parked Domain
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              2 Websites
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              Free SSL
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              Softaculous
            </p>


          </div>


        </div>
      </div>

      <div className="card mt-12">
        <div className=" cr1 w-80 border-2 border-black rounded-xl gap-9 flex flex-col p-8 ">

          <div className=" flex flex-col gap-3 ">
            <p className='font-semibold text-[28px] leading-[25px]'>Starter</p>
            <p className='text-[12px] leading-3'>with all your customers via all conversation channels in one central dashboard.</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className='font-semibold text-[42px] leading-8'>$2.80</p>
            <p className='font-light text[14px] leading-[14px]'>Per month</p>
          </div>

          <button className='rounded-xl border-2 border-black py-3 font-semibold text-[14px] leading-8'>Choose this Plan</button>

          <div className="gap-7 flex flex-col">
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              2GB SSD
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              10GB Bandwidth
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              15 Email Accounts
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              Unlimited Database
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              4 Subdomains
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              1 Parked Domain
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              2 Websites
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              Free SSL
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              Softaculous
            </p>


          </div>


        </div>
      </div>

      <div className="card mt-12">
        <div className=" cr1 w-80 border-2 border-black rounded-xl gap-9 flex flex-col p-8 ">

          <div className=" flex flex-col gap-3 ">
            <p className='font-semibold text-[28px] leading-[25px]'>Starter</p>
            <p className='text-[12px] leading-3'>with all your customers via all conversation channels in one central dashboard.</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className='font-semibold text-[42px] leading-8'>$2.80</p>
            <p className='font-light text[14px] leading-[14px]'>Per month</p>
          </div>

          <button className='rounded-xl border-2 border-black py-3 font-semibold text-[14px] leading-8'>Choose this Plan</button>

          <div className="gap-7 flex flex-col">
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              2GB SSD
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              10GB Bandwidth
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              15 Email Accounts
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              Unlimited Database
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              4 Subdomains
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              1 Parked Domain
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              2 Websites
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              Free SSL
            </p>
            <p className="flex gap-7 text-center items-center">
              <AiOutlineCheck />
              Softaculous
            </p>


          </div>


        </div>
      </div>

      </div>


    </div>
  )
}

export default Price