import React, { useState, useEffect, useRef } from 'react';

// Import actual shadcn/ui Accordion components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// You can keep `AccordionItemContext` if your shadcn components use it internally,
// or remove it if not needed for custom context passing. For now, I'll keep it
// as it was part of the previous custom context setup for item value.
const AccordionItemContext = React.createContext(null);


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

  const navItems = [
    {
      id: 'item-1',
      label: 'Home',
      type: 'accordion',
      subItems: [
        { label: 'Dashboard', href: '#' },
        { label: 'Profile', href: '#' },
      ],
    },
    {
      id: 'item-2',
      label: 'Products',
      type: 'accordion',
      subItems: [
        { label: 'Category A', href: '#' },
        { label: 'Category B', href: '#' },
        { label: 'All Products', href: '#' },
      ],
    },
    {
      id: 'item-3',
      label: 'Services',
      type: 'accordion',
      subItems: [
        { label: 'Service 1', href: '#' },
        { label: 'Service 2', href: '#' },
        { label: 'Contact Sales', href: '#' },
      ],
    },
    {
      id: 'item-4',
      label: 'About Us',
      type: 'link',
      href: '#',
    },
    {
      id: 'item-5',
      label: 'Contact',
      type: 'link',
      href: '#',
    },
  ];

  return (
    <>
      {/* Floating Mobile Menu Button */}
      <button
        id="mobile-menu-button"
        onClick={toggleNavOverlay}
        className={`${isNavOpen ? 'hidden' : ''}`}
        aria-label="Open navigation menu"
      >
        &#9776; {/* Hamburger icon */}
      </button>

      {/* Full-Screen Navigation Overlay */}
      <div
        id="nav-overlay"
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-30 flex flex-col justify-start items-center pt-8
          ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-400 ease-in-out`}
      >
        {/* Close Button */}
        <button
          id="close-nav-button"
          onClick={toggleNavOverlay}
          className="absolute top-4 right-4 text-white text-4xl focus:outline-none p-2 rounded-full hover:bg-gray-700 transition duration-300"
          aria-label="Close navigation menu"
        >
          &times; {/* Close icon */}
        </button>

        {/* Navigation Menu */}
        <nav className="w-full max-w-lg mt-16 px-4">
          <Accordion type="single" collapsible className="w-full text-white space-y-2">
            {navItems.map((item) => (
              <React.Fragment key={item.id}>
                {item.type === 'accordion' ? (
                  // Ensure AccordionItemContext is only used if Accordion components expect it.
                  // If shadcn's components handle context internally, you might remove this context provider.
                  // For now, it's kept to match the structure that was working with the self-contained version.
                  <AccordionItemContext.Provider value={{ value: item.id }}>
                    <AccordionItem value={item.id} className="mb-2">
                      <AccordionTrigger
                        className="w-full text-left py-2 px-3 text-2xl font-medium hover:underline transition duration-300"
                      >
                        {item.label}
                      </AccordionTrigger>
                      <AccordionContent className="pl-6 pt-1 pb-1 text-xl">
                        <ul className="space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <a href={subItem.href} className="block py-1 px-2 hover:underline transition duration-300">
                                {subItem.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </AccordionItemContext.Provider>
                ) : (
                  <li key={item.id} className="mb-2">
                    <a href={item.href} className="block py-2 px-3 text-2xl font-medium hover:underline transition duration-300">
                      {item.label}
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
