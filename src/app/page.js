"use client"

import * as React from "react"

import Navbar from "@/components/Navbar"

import {Shadow} from '@/components/Shadow'

import NavMobile from "@/components/NavMobile"
import MobileNav from "@/components/NavMobile"

export default function Home() {
  return (
    <div>
      <div className="flex justify-center allign-items mt-5 max-md:hidden">
        <Shadow>
          <Navbar />
        </Shadow>
      </div>
      <div className='fixed top-4 right-4 z-40 p-3 hover:bg-gray-100 transition duration-300  md:hidden'>
        <Shadow>
          <MobileNav />
        </Shadow>
      </div>
    </div>
  );
}


