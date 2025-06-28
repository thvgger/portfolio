"use client"

import * as React from "react"
import Link from 'next/link'; // Import Link for navigation

import Navbar from "@/components/Navbar"
import {Shadow, Shadowsq} from '@/components/Shadow'
import MobileNav from "@/components/MobileNav"
import {Heading,Heading2} from "@/components/Heading"
import FGames from '@/components/cards'

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-2] hidden md:block">
        <img
          src="/azuki.jpg"
          alt="Desktop Background: Azuki Anime Art"
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

      {/* Fixed Header/Navbar Section */}
      <div className="fixed top-0 left-0 w-full flex items-center px-6 py-4 z-20 bg-transparent">
        <Shadowsq className='bg-background '>
          <img
            src="/tribeneon.svg"
            alt="TRYBE Logo"
            className="w-22 h-7 object-contain"
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

      {/* Main Page Content Container */}
      {/* All sections below will be within this container, appearing over the background */}
      <div className="relative z-10">

        {/* Hero Section */}
        <section className="min-h-screen pt-24 flex items-center justify-center bg-transparent">
          <div className="flex flex-col items-center justify-center text-center p-4 max-w-4xl mx-auto">
            <Heading>
              Showcase Your Game. Find Your Players.
            </Heading>
            <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md text-white md:text-black font-bold">
              A platform for indie developers to share, collaborate, and grow their audience.
            </p>
            <Shadow className="px-8 py-4 bg-white hover:bg-gray-400 hover:text-white text-blue-400 text-xl font-bold rounded-full transition duration-300 ease-in-out">
              <Link href="/submit-game" className="block">
                Submit Your Game
              </Link>
            </Shadow>
          </div>
        </section>

        {/* Featured Games Section */}
        <section className="py-20 px-4 md:px-8 bg-black/70 md:bg-white/90 text-white md:text-black">
          <div className="max-w-6xl mx-auto">
            <Heading2 className='text-blue-200'>
              Featured Games
            </Heading2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FGames />
            </div>
            <div className="text-center mt-12">
              <Shadow className="px-8 py-4 bg-white hover:bg-gray-400 hover:text-white text-xl text-lime-400 font-bold rounded-full transition duration-300 ease-in-out">
                <Link href="/games" className="block" >
                  View All Games
                </Link>
              </Shadow>
            </div>
          </div>
        </section>

        {/* Call to Action for Developers */}
        <section className="py-20 px-4 md:px-8 bg-transparent">
          <div className="max-w-4xl mx-auto text-center text-white md:text-black">
            <Heading2 className='text-blue-200'>
              Ready To Launch Your Masterpiece?
            </Heading2>
            <p className="text-lg md:text-xl mb-10 drop-shadow-md">
              Ìjáyà is built for creators like you. Get access to a passionate community, powerful tools, and the spotlight your game deserves.
            </p>
            <Shadow className="px-8 py-4 bg-white hover:bg-gray-400 hover:text-white text-xl text-blue-400 font-bold rounded-full transition duration-300 ease-in-out">
              <Link href="/submit-game" className="block">
                Submit Your Game Today
              </Link>
            </Shadow>
          </div>
        </section>

        {/* How It Works / Benefits Section */}
        <section className="py-20 px-4 md:px-8 bg-black/70 md:bg-white/90 text-white md:text-black">
          <div className="max-w-6xl mx-auto">
            <Heading2 className='text-blue-200'>
              How TRYBE Empowers Indie Devs
            </Heading2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-white/60 md:bg-gray-100 rounded-lg shadow-lg">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-semibold mb-2">Reach New Players</h3>
                <p className="text-base text-white md:text-gray-800">Connect with a global audience eager for fresh gaming experiences.</p>
              </div>
              <div className="p-6 bg-white/60 md:bg-gray-100 rounded-lg shadow-lg">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-2xl font-semibold mb-2">Get Valuable Feedback</h3>
                <p className="text-base text-white md:text-gray-800">Engage directly with players and refine your game based on their insights.</p>
              </div>
              <div className="p-6 bg-white/60 md:bg-gray-100 rounded-lg shadow-lg">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-2xl font-semibold mb-2">Monetize Your Passion</h3>
                <p className="text-base text-white md:text-gray-800">Explore various monetization options to support your game development journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TRIBE</h3>
              <p className="text-sm text-gray-400">
                A community-driven platform for indie game developers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/games" className="text-gray-400 hover:text-white transition duration-200">Games</Link></li>
                <li><Link href="/submit-game" className="text-gray-400 hover:text-white transition duration-200">Submit Game</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition duration-200">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition duration-200">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <p className="text-sm text-gray-400">Follow us on social media for updates!</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a> {/* Placeholder for social icons */}
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-discord"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} TRYBE. All rights reserved.
          </div>
        </footer>

      </div>
    </>
  );
}