'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { Input, Link, Button } from '@nextui-org/react';

const SignUp = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/auth/login');
  };
  // const [isClient, setIsClient] = useState(false)
  // useEffect(() => {
  //   setIsClient(true)
  // }, [])
  // if(!isClient){
  //   return null;
  // }
  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <video className='w-full h-full object-cover' src="/videos/presentation.mp4" autoPlay loop muted></video>
      </div>
      <div className='w-1/2 h-full bg-backgroud flex flex-col p-20 justify-between'>
        <h1 className='text-xl text-primary font-semibold'>third eye</h1>
        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-5'>
          <h3 className='text-3xl font-semibold mb-2'>Sign Up</h3>
          <p className='text-base mb-4'>Register here and join us!</p>
          </div>
          <div className='w-full flex flex-col'>
          <input type="text" placeholder='enter your first name' className='w-full text-black bg-transparent py-2 my-2 border-b border-black outline-none focus:outline-none' />
          <input type="text" placeholder='enter your last name' className='w-full text-black bg-transparent py-2 my-2 border-b border-black outline-none focus:outline-none' />
            <input type="email" placeholder='enter your email' className='w-full text-black bg-transparent py-2 my-2 border-b border-black outline-none focus:outline-none' />
            <input type="password" placeholder='enter your password' className='w-full text-black bg-transparent py-2 my-2 border-b border-black outline-none focus:outline-none' />
          </div>
          <div className="w-full flex flex-col mt-16">
          <Button color="primary">Register now!</Button>
          <Button className='mt-3' color="primary" variant="light"><Link onClick={handleLogin}>Login</Link></Button>  
          </div>
        </div>
        <div className='w-full flex items-center justify-center -mx-9'>
          <p className='text-sm font-normal text-primary'>already have an account?<span className='font-semibold underline-offset-2 cursor-pointer mx-1'><Link onClick={handleLogin}>sign In</Link></span></p>
        </div>
      </div>




    </div>
  );
};

export default SignUp;