"use client"

import * as React from "react"
import Link from "next/link"
import {Shadow} from './Shadow'

export const Cards = [
    {
        id: 1,
        image: '/prbg.webp',
        title: 'Princess Robot Bubblegum',
        dev: 'RockStar Games',
        description: 'A thrilling stealth-action adventure with unique mechanics for gooners.'
    },

    {
        id: 2,
        image: '/gs3.webp',
        title: 'Goat Simulator 3',
        dev: 'Coffee Stain Studios AB',
        description: 'GOAAATS!.'
    },

    {
        id: 3,
        image: '/ddlc.jpg',
        title: 'Doki Doki Literature Club',
        dev: 'Team Salvato',
        description: 'A cozy puzzle game set in a high school.'
    }
]

export default function FGames() {
    return(
        <>
        {Cards.map((Cards) => (
            <React.Fragment key={Cards.id}>
                <Shadow className="bg-white/50 md:bg-gray-100 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                    <img src={Cards.image} alt="Game Title" className="w-full h-48 object-cover rounded-sm mt-1"/>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{Cards.title}</h3>
                      <p className="text-sm text-gray-400 md:text-gray-600 mb-4">{Cards.dev}</p>
                      <p className="text-base text-white md:text-gray-800">{Cards.description}</p>
                      <Link href="/game/shadow-bound" className="mt-4 inline-block text-blue-400 md:text-blue-600 hover:underline">
                        Learn More
                      </Link>
                    </div>
                </Shadow>
            </React.Fragment>
        ))}
        </>
    )
}