import React from 'react'
import { FaCheck, FaFacebook, FaApple } from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";

import './login.css';

const LoginPage = () => {
  return (
    <div className='flex flex-row justify-center items-center h-screen bg-[#151515]'>
      <div className="flex flex-row justify-evenly items-center gradient__color rounded-lg min-w-[50rem] min-h-[35rem] sm:min-w-[22rem]">
      <div className='py-10 px-14 rounded-lg background__color shadow-lg drop-shadow-lg min-w-[20rem]'>
        <div className='w-full flex flex-row justify-center'><h1 className='font-sans font-bold text-[1.5rem] text-[#AFB5FC] '>Welcome Back</h1></div>
        <div className='w-full flex flex-row justify-center'><p className='font-sans text-[#EDEDED] font-extralight text-[0.7rem] mb-5  '>Please login to your account</p></div>
        <h3 className='font-sans text-[#EDEDED] font-medium text-[0.7rem] my-1 '>Email</h3>
        <input type="text" placeholder='Enter your email' className='font-sans text-[#EDEDED] text-[0.7rem] rounded-lg bg-[#475558] w-full px-2 py-0.5'/>
        <h3 className='font-sans text-[#EDEDED] font-medium text-[0.7rem] my-1 '>Password</h3>
        <input type="text" placeholder='Enter your password' className='font-sans text-[#EDEDED] text-[0.7rem] rounded-lg bg-[#475558] w-full  px-2 py-0.5'/>
        <div className='flex flex-row w-full mt-2 justify-between '>
        <div className='flex flex-row items-center '>
        <button type='button' className='bg-[#5A66F9] h-2 '><FaCheck className='text-[0.5rem] h-2  text-[#EDEDED]' /></button>
        <h3 className='font-sans text-[#EDEDED] font-medium text-[0.5rem] ml-0.5'>Remember me</h3>
        </div>
        <p className='font-sans text-[#AFB5FC] font-medium text-[0.7rem] '>Forgot Password</p>
        </div>
        <button className='font-sans text-[#EDEDED] bg-[#5A66F9] rounded-lg w-full my-5 '>Login</button>
        <div className='flex flex-row w-full items-center'>
        <div className='h-0.5 bg-[#535A5F] w-full'></div>
        <p className='font-sans text-[#EDEDED] mx-1'>or</p>
        <div className='h-0.5 bg-[#535A5F] w-full'></div>
        </div>
        <div className='flex flex-row items-center border-solid border-[1px] my-2 rounded-lg justify-center w-full p-1'>
          <FcGoogle id='google' className='text-[1rem] mr-1 text-[linear-gradient(180deg, rgba(234,66,52,1) 0%, rgba(250,187,5,1) 36%, rgba(50,165,82,1) 72%, rgba(66,133,244,1) 100%)]' />
          <p className='font-sans text-[#D4D7D8] font-light text-[0.7rem] '>Login with Google</p>
        </div>
        <div className='flex flex-row items-center border-solid border-[1px] my-2 rounded-lg justify-center w-full p-1'>
          <FaFacebook className='text-[#87ACFD] text-[1rem] mr-1' />
          <p className='font-sans text-[#D4D7D8] font-light text-[0.7rem] '>Login with Facebook</p>
        </div>
        <div className='flex flex-row items-center border-solid border-[1px] my-2 rounded-lg justify-center w-full p-1'>
          <FaApple className='text-[#EFEFEF] text-[1rem] mr-1'/>
          <p className='font-sans text-[#D4D7D8] font-light text-[0.7rem] '>Login with AppleID</p>
        </div>
        <div className='flex flex-row items-center w-full'>
          <p className='text-[#EDEDED] text-[0.5rem] mr-1'>Don't have an Account?</p>
          <button className='text-[#AFB5FC] text-[0.7rem]'>Sign Up</button>
        </div>
        </div>

        </div>
    </div>
  )
}

export default LoginPage
