"use client";
import { Home } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const dataNavigation = [
  {
    id: 1,
    name: "Home",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/",
  },
  {
    id: 2,
    name: "About",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/about",
  },
  {
    id: 3,
    name: "Services",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/services",
  },
  {
    id: 4,
    name: "Packages",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/packages",
  },
  {
    id: 5,
    name: "Activities",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/activities",
  },
  {
    id: 6,
    name: "Destinations",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/destinations",
  },
  {
    id: 7,
    name: "Blog",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/blog",
  },
  {
    id: 8,
    name: "Contact",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/contact",
  },
];

export default function Navigations() {
  return (
    <main className="p-4 shadow-md h-20 bg-slate-100 flex flex-row items-center justify-start">
      Navigations Header
    </main>
  );
}
