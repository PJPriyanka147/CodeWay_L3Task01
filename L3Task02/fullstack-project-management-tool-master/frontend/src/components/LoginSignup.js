import React from 'react';
import background from '../assets/background.webp'
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import {Link} from 'react-router-dom'

const LoginSignup = () => {
  return (
   
     <div className='relative w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#b3c2e0]'>
      <img className='absolute inset-0 w-full h-full object-cover' src={background} alt="Background" />
      <div className=' relative w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
      
       
        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
          <form
            // onSubmit={handleSubmit(submitHandler)}
            className='form-container w-full md:w-[500px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
          >
            <div className=''>
              <p className='text-blue-600 text-4xl font-bold '>
                Sign Up
              </p>
              {/* <p className='text-center text-base text-gray-700 '>
               Register to manage all your task in one place!
              </p> */}
            </div>

            <div className='flex flex-col gap-y-5'>
            <Textbox
                placeholder='Your Name'
                type='name'
                name='name'
                label='Username'
                className='w-full rounded-full'
                // register={register("email", {
                //   required: "Email Address is required!",
                // })}
                // error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder='email@example.com'
                type='email'
                name='email'
                label='Email Address'
                className='w-full rounded-full'
                // register={register("email", {
                //   required: "Email Address is required!",
                // })}
                // error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder='your password'
                type='password'
                name='password'
                label='Password'
                className='w-full rounded-full'
                // register={register("password", {
                //   required: "Password is required!",
                // })}
                // error={errors.password ? errors.password.message : ""}
              />
                <Link to='/dashboard' ><Button
                type='submit'
                label='Continue'
                className='w-full h-10 bg-blue-700 text-white rounded-full'
              /></Link>
              <p className='text-sm text-gray-500 '>
              Already have an account ?  <span className='text-blue-600 hover:text-blue-900 hover:underline cursor-pointer'>Login Here</span>
              </p> 
              <div className="flex justify-center gap-4">
                <input type="checkbox" name="" id="" />
                <p className='text-sm text-gray-500 '>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
              {/* <Button
                type='submit'
                label='Submit'
                className='w-full h-10 bg-blue-700 text-white rounded-full'
              /> */}
            </div>
          </form>
        </div>
      </div>
     </div>
    
    );
};

export default LoginSignup



       {/* <img className='absolute inset-0 w-full h-full object-cover' src={background} alt="Background" /> */
     

      /* <div className="absolute inset-0 h-500 w-300 bg-red-300">
        <div className="w-400 h-200 bg-green-400 p-20">
          <h1 className='text-24 font-semibold mb-10'>Sign Up</h1>
          <div className="flex flex-col gap-20">
            <input type="text" className="h-50 border-1 border-gray-300 outline-none px-20 text-18 text-gray-600" placeholder='Your Name' />
            <input type="email" className="h-50 border-1 border-gray-300 outline-none px-20 text-18 text-gray-600" placeholder='Your Email' />
            <input type="password" className="h-50 border-1 border-gray-300 outline-none px-20 text-18 text-gray-600" placeholder='Password' />
          </div>
          <button className='w-440 h-50 mt-30 text-white bg-red-500 border-none text-24 font-semibold cursor-pointer'>Continue</button>
          <p className='p-10 text-15'>Already have an account ? <span className='text-red-500'>Login Here</span></p>
          <div className="text-gray-600 mt-20">
            <input type="checkbox" name="" id="" />
            <p className='p-10 text-15'>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
</div>*/}
    
 