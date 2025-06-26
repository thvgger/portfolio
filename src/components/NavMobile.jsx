"use client"

import React, { useState, useEffect } from 'react';

// Import actual shadcn/ui Accordion components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Shadow } from './Shadow';

// Import the correct components array
import { components } from './Navbar';

// Main MobileNav Component
export default function MobileNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // New state for mount check

  useEffect(() => {
    setHasMounted(true); // Set to true after initial render on client

    if (isNavOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Cleanup function to remove class when component unmounts
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isNavOpen]); // Dependency array: run when isNavOpen changes

  const toggleNavOverlay = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Floating Mobile Menu Button */}
      <button
        id="mobile-menu-button"
        onClick={toggleNavOverlay}
        // Conditionally hide/show the button based on nav state
        // Using 'block' when not open, and 'hidden' when open
        className={`${isNavOpen ? 'hidden' : 'mb-px'}`}
        aria-label="Open navigation menu"
      >
        <Shadow className={'px-3 bg-white'}>
          &#9776; {/* Hamburger icon */}
        </Shadow>
      </button>

      {/* Full-Screen Navigation Overlay */}
      <div
        id="nav-overlay"
        className={`fixed inset-0 z-30 flex flex-col justify-start items-center pt-8
          ${isNavOpen ? 'translate-x-0' : 'translate-x-full'}
          ${hasMounted ? 'transition-transform duration-400 ease-in-out' : ''}
          bg-black/50 backdrop-blur-sm`}
        // Optionally, add a background color for the overlay itself, not just the blur filter
        // If you want the content of the overlay to have a distinct background, add it to <nav>
      >
        {/* Close Button */}
        <button
          id="close-nav-button"
          onClick={toggleNavOverlay}
          className="absolute top-4 right-4 text-white text-4xl focus:outline-none px-5 py-4 rounded-full" // Changed text-black to text-white for visibility on dark overlay
          aria-label="Close navigation menu"
        >
          &times; {/* Close icon */}
        </button>

        {/* Navigation Menu Container - Gives the actual menu content its own background */}
        <nav className="w-full max-w-lg mt-16 px-4 shadow-lg p-6"> {/* Added background to nav for clarity */}
          <Accordion type="single" collapsible className="w-full text-white space-y-2">
            {components.map((component) => (
              <React.Fragment key={component.id}>
                {Array.isArray(component.subItems) ? (
                  <AccordionItem value={component.id} className="mb-2 border-b"> {/* Added border for separation */}
                    <AccordionTrigger
                      className="w-full text-left py-2 px-3 text-2xl font-medium hover:underline transition duration-300"
                    >
                      {component.title}
                    </AccordionTrigger>
                    <AccordionContent className="pl-6 pt-1 pb-1 text-xl">
                      <ul className="space-y-1">
                        {component.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.href}
                              className="block py-1 px-2 hover:underline transition duration-300"
                              onClick={toggleNavOverlay} // Close nav when a sub-item is clicked
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <li key={component.id} className="mb-2 list-none border-b"> {/* Added border for separation */}
                    <a
                      href={component.href ? component.href : `/${component.title.toLowerCase()}`}
                      className="block py-2 px-3 text-2xl font-medium hover:underline transition duration-300"
                      onClick={toggleNavOverlay} // Close nav when a main item is clicked
                    >
                      {component.title}
                    </a>
                  </li>
                )}
              </React.Fragment>
            ))}
          </Accordion>
        </nav>
      </div>
    </>
  );
}