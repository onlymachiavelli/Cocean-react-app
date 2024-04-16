'use client'

// import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { Input, Link, Button } from '@nextui-org/react';
import VideoPlayer from '../../components/page';

const colors={
  primary: "#060606",
  background: "#f5f5f5",
  disbaled: "#D9D9D9"
}
const Login = () => {
  
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/auth/signup');
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
        {/* <VideoPlayer></VideoPlayer> */}
        <video className='w-full h-full object-cover' src="/videos/presentation.mp4" autoPlay loop muted></video>
      
      </div>
      
      <div className='w-1/2 h-full bg-backgroud flex flex-col p-20 justify-between'>
        <h1 className='text-xl text-primary font-semibold'>third eye</h1>
        <div className='w-full flex flex-col max-w-[500px]'>
          <div className='w-full flex flex-col mb-5'>
          <h3 className='text-3xl font-semibold mb-2'>Login</h3>
          <p className='text-base mb-4'>welcome Back! Please enter your details.</p>
          </div>
          <div className='w-full flex flex-col'>
            <input type="email" placeholder='enter your email' className='w-full text-black bg-transparent py-2 my-2 border-b border-black outline-none focus:outline-none' />
            <input type="password" placeholder='enter your password' className='w-full text-black bg-transparent py-2 my-2 border-b border-black outline-none focus:outline-none' />
          </div>
          <div className="w-full flex items-center justify-between mt-4">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2"/>
              <p className="text-sm">Remember Me</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forget password</p>
          </div>
          <div className="w-full flex flex-col mt-16">
          <Button color="primary">login</Button>
          <Button className='mt-3' color="primary" variant="light"><Link onClick={handleSignUp}>Register</Link></Button>  
          </div>
        </div>
        <div className='w-full flex items-center justify-center -mx-9'>
          <p className='text-sm font-normal text-primary'>Don't have an account?<span className='font-semibold underline-offset-2 cursor-pointer mx-1'><Link onClick={handleSignUp}>Sign Up</Link></span></p>
        </div>
      </div>




    </div>
  );
};

export default Login;

