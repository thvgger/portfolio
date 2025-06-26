"use client"

import * as React from "react"
import Link from 'next/link'; // Import Link for navigation

import Navbar from "@/components/Navbar"
import {Shadow, Shadowsq} from '@/components/Shadow'
import MobileNav from "@/components/NavMobile"

export default function Home() {
  return (
    <>
      {/* Background Layers */}
      {/* Desktop Background Image (azuki.jpg) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-2] hidden md:block">
        <img
          src="/azuki.jpg" // Ensure this image is in your /public folder
          alt="Desktop Background: Azuki Anime Art"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Mobile Background Video (cybermobile.mp4) */}
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
        <Shadowsq className='bg-background'>
          <img
            src="/thvgger1.svg"
            alt="Ìjáyà Logo"
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

      {/* Main Page Content Container */}
      {/* All sections below will be within this container, appearing over the background */}
      <div className="relative z-10">

        {/* Hero Section (Existing) */}
        <section className="min-h-screen pt-24 flex items-center justify-center bg-transparent">
          <div className="flex flex-col items-center justify-center text-center p-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg text-white md:text-black">
              Showcase Your Game. Find Your Players.
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md text-white md:text-black font-bold">
              A platform for indie developers to share, collaborate, and grow their audience.
            </p>
            <Shadow className="px-8 py-4 bg-white hover:bg-gray-400 hover:text-white text-blue-400 font-bold rounded-full transition duration-300 ease-in-out">
              <Link href="/submit-game" className="block">
                Submit Your Game
              </Link>
            </Shadow>
          </div>
        </section>

        {/* Featured Games Section */}
        <section className="py-20 px-4 md:px-8 bg-black/70 md:bg-white/90 text-white md:text-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Featured Games
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder Game Card 1 */}
              <Shadow className="bg-white/50 md:bg-gray-100 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src="/prbg.webp" alt="Game Title" className="w-full h-48 object-cover rounded-sm mt-1"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Princess Robot Bubblegum</h3>
                  <p className="text-sm text-gray-400 md:text-gray-600 mb-4">By RockStar Games</p>
                  <p className="text-base text-white md:text-gray-800">A thrilling stealth-action adventure with unique mechanics for gooners.</p>
                  <Link href="/game/shadow-bound" className="mt-4 inline-block text-blue-400 md:text-blue-600 hover:underline">
                    Learn More
                  </Link>
                </div>
              </Shadow>
              {/* Placeholder Game Card 2 */}
              <Shadow className="bg-white/50 md:bg-gray-100 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src="/gs3.webp" alt="Game Title" className="w-full h-48 object-cover rounded-sm mt-1"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Goat Simulator 3</h3>
                  <p className="text-sm text-gray-400 md:text-gray-600 mb-4">By Coffee Stain Studios AB</p>
                  <p className="text-base text-white md:text-gray-800">GOAAATS!.</p>
                  <Link href="/game/star-forged" className="mt-4 inline-block text-blue-400 md:text-blue-600 hover:underline">
                    Learn More
                  </Link>
                </div>
              </Shadow>
              {/* Placeholder Game Card 3 */}
              <Shadow className="bg-white/50 md:bg-gray-100 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <img src="/ddlc.jpg" alt="Game Title" className="w-full h-48 object-cover rounded-sm mt-1"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Doki Doki Literature Club</h3>
                  <p className="text-sm text-gray-400 md:text-gray-600 mb-4">By Team Salvato</p>
                  <p className="text-base text-white md:text-gray-800">A cozy puzzle game set in a high school.</p>
                  <Link href="/game/whispering-woods" className="mt-4 inline-block text-blue-400 md:text-blue-600 hover:underline">
                    Learn More
                  </Link>
                </div>
              </Shadow>
            </div>
            <div className="text-center mt-12">
              <Shadow className="px-8 py-4 bg-white hover:bg-gray-400 hover:text-white text-blue-400 font-bold rounded-full transition duration-300 ease-in-out">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
              Ready to Launch Your Masterpiece?
            </h2>
            <p className="text-lg md:text-xl mb-10 drop-shadow-md">
              Ìjáyà is built for creators like you. Get access to a passionate community, powerful tools, and the spotlight your game deserves.
            </p>
            <Shadow className="px-8 py-4 bg-white hover:bg-gray-400 hover:text-white text-blue-400 font-bold rounded-full transition duration-300 ease-in-out">
              <Link href="/submit-game" className="block">
                Submit Your Game Today
              </Link>
            </Shadow>
          </div>
        </section>

        {/* How It Works / Benefits Section */}
        <section className="py-20 px-4 md:px-8 bg-black/70 md:bg-white/90 text-white md:text-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              How TRYBE Empowers Indie Devs
            </h2>
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
              <h3 className="text-xl font-bold mb-4">Ìjáyà</h3>
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
            &copy; {new Date().getFullYear()} Ìjáyà. All rights reserved.
          </div>
        </footer>

      </div>
    </>
  );
}