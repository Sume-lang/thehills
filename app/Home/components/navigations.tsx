"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import NavigationsData from "./Navdata/DataNavigations";
export default function NavigationsDesktop() {
  return (
    <main className="sticky top-0 bg-gray-400 text-black shadow-lg z-50 lg:flex hidden flex-row p-10">
      <nav className="w-[5%] flex flex-row items-center justify-center">
        Left Side
      </nav>
      <nav className="w-full flex flex-row items-center justify-center gap-5">
        <NavigationMenu className="sticky top-0 z-50">
          <NavigationMenuList className="flex space-x-4 container mx-auto px-4 py-2">
            {NavigationsData.map((item, index) => (
              <NavigationMenuItem key={index} className="relative">
                {item.children ? (
                  <section>
                    {/* For Dropdown Menu */}
                    <NavigationMenuTrigger className="flex items-center space-x-2 focus:outline-none">
                      <h1 className="text-lg font-light">{item.title}</h1>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute mt-2 mb-2 w-48 left-0 bg-white text-black rounded-lg shadow-lg z-50">
                      <ul className=" w-52 h-40">
                        {item.children.map((child, childIndex) => (
                          <li
                            key={childIndex}
                            className="px-2 text-lg hover:bg-gray-100"
                          >
                            <NavigationMenuLink asChild>
                              <Link href={child.href}>{child.title}</Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </section>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>{item.title}</Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </main>
  );
}
