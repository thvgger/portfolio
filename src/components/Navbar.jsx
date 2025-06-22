// Navbar.jsx
"use client"

import * as React from "react"
import Link from "next/link"

// Export the components array
export const components = [
  {
    id: "component-1",
    title: "Home",
  },
  {
    id: "component-2",
    title: "Features",
    subItems: [
      {
        title: "Analytics",
        href: "/features/analytics",
        description: "Gain insights with real-time analytics and reporting.",
      },
      {
        title: "Integrations",
        href: "/features/integrations",
        description: "Connect with your favorite tools and platforms.",
      },
      {
        title: "Automation",
        href: "/features/automation",
        description: "Automate repetitive tasks and workflows easily.",
      },
    ],
  },
  {
    id: "component-3",
    title: "Pricing",
  },
  {
    id: "component-4",
    title: "Resources",
    subItems: [
      {
        title: "Blog",
        href: "/resources/blog",
        description: "Read the latest news, tips, and stories.",
      },
      {
        title: "Docs",
        href: "/resources/docs",
        description: "Find in-depth information about our product features.",
      },
      {
        title: "Tutorials",
        href: "/resources/tutorials",
        description: "Step-by-step guides to help you get started.",
      },
    ],
  },
  {
    id: "component-5",
    title: "About",
  },
  {
    id: "component-6",
    title: "Contact",
  },
];

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {components.map((component) => (
          <NavigationMenuItem key={component.id}>
            {component.subItems ? (
              <>
                <NavigationMenuTrigger>{component.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {component.subItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : component.href ? (
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={component.href}>{component.title}</Link>
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={`/${component.title.toLowerCase()}`}>{component.title}</Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}