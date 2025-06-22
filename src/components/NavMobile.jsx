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

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isNavOpen]);

  const toggleNavOverlay = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      {/* Floating Mobile Menu Button */}
      <button
        id="mobile-menu-button"
        onClick={toggleNavOverlay}
        className={`${isNavOpen ? 'hidden' : 'mx-1'}`}
        aria-label="Open navigation menu"
      >
        <Shadow className={'px-3'}>
          &#9776; {/* Hamburger icon */}
        </Shadow>
      </button>

      {/* Full-Screen Navigation Overlay */}
      <div
        id="nav-overlay"
        className={`fixed inset-0 z-30 flex flex-col justify-start items-center pt-8
          ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-400 ease-in-out`}
      >
        {/* Close Button */}
        <button
          id="close-nav-button"
          onClick={toggleNavOverlay}
          className="absolute top-4 right-4 text-black text-4xl focus:outline-none px-5 py-4 rounded-full hover:bg-gray-700 transition duration-300"
          aria-label="Close navigation menu"
        >
          &times; {/* Close icon */}
        </button>

        {/* Navigation Menu */}
        <nav className="w-full max-w-lg mt-16 px-4">
          <Accordion type="single" collapsible className="w-full text-black space-y-2">
            {components.map((component) => (
              <React.Fragment key={component.id}>
                {Array.isArray(component.subItems) ? (
                  <AccordionItem value={component.id} className="mb-2">
                    <AccordionTrigger
                      className="w-full text-left py-2 px-3 text-2xl font-medium hover:underline transition duration-300"
                    >
                      {component.title}
                    </AccordionTrigger>
                    <AccordionContent className="pl-6 pt-1 pb-1 text-xl">
                      <ul className="space-y-1">
                        {component.subItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subItem.href} className="block py-1 px-2 hover:underline transition duration-300">
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <li key={component.id} className="mb-2 list-none">
                    <a href={component.href ? component.href : `/${component.title.toLowerCase()}`} className="block py-2 px-3 text-2xl font-medium hover:underline transition duration-300">
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
