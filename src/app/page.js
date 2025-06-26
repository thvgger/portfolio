"use client"

import * as React from "react"

import Navbar from "@/components/Navbar"
import {Shadow, Shadowsq} from '@/components/Shadow' // Consolidated import
import MobileNav from "@/components/NavMobile"

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-2] hidden md:block">
        <img
          src="/azuki.jpg" 
          alt="Desktop Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1] block md:hidden">
        <video
          className="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/cybermobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <div className="fixed top-0 left-0 w-full flex items-center px-6 py-4 z-20 bg-transparent">
        <Shadowsq className='bg-white'>
          <img
            src="/thvgger1.svg"
            alt="Logo"
            className="w-24 h-9 object-contain"
          />
        </Shadowsq>

        <div className="flex-grow flex justify-center max-md:hidden">
          <Shadow className='bg-white'>
            <Navbar />
          </Shadow>
        </div>

        <div className={'fixed top-4 right-4 z-30 p-3 md:hidden'}>
          <MobileNav />
        </div>
      </div>


      <div className="relative z-10 min-h-screen pt-24"> 
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] text-white text-center p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg md:text-black">
            Ìjáyà
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md md:text-black font-bold">
            Experience the next generation of African storytelling in gaming.
          </p>
          <Shadow className="px-8 py-4 bg-white hover:bg text-black font-bold rounded-full transition duration-300 ease-in-out">
            <a>
              Get Started
            </a>
          </Shadow>
        </div>
      </div>
    </>
  );
}