"use client";

import { Home, HomeIcon, Settings } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const Logo = [
  {
    id: 1,
    img: "",
    url: "/",
  },
];
const menuItems = [
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
    href: "/",
  },
  {
    id: 3,
    name: "Services",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/",
  },
  {
    id: 4,
    name: "Packages",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/",
  },
  {
    id: 5,
    name: "Activities",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/",
  },
  {
    id: 6,
    name: "Destination",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/",
  },
];
const settings = [
  {
    id: 1,
    name: "profiles",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/",
  },
  {
    id: 2,
    name: "settings",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/",
  },
  {
    id: 3,
    name: "help",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/",
  },
  {
    id: 4,
    name: "logout",
    icons: <Home size={48} strokeWidth={1.5} />,
    href: "/",
  },
];

export default function sideNavigations() {
  return (
    <main className="sticky top-0 left-0 w-full min-h-screen py-6 p-4 flex flex-col justify-between text-white">
      <section id="menuItems">
        <div id="logo">
          {Logo.map((item) => (
            <span
              key={item.id}
              className="flex flex-col items-start justify-start gap-2">
              <img src={item.img} alt="logo" className="w-10 h-10" />
            </span>
          ))}
        </div>
        <div className="flex flex-col items-start justify-start py-4">
          <h1 className="text-3xl font-bold text-slate-50">Home</h1>
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-start gap-2">
              <h1 className="text-2xl font-light text-slate-50">{item.name}</h1>
            </div>
          ))}
        </div>
      </section>
      <section
        id="settings"
        className="flex flex-col items-start justify-start">
        <div className="flex flex-row items-center justify-start gap-2">
          <h1 className="text-3xl font-bold text-slate-50">Settings</h1>
        </div>
        {settings.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-start gap-2">
            <h1 className="text-2xl font-light text-slate-50">{item.name}</h1>
          </div>
        ))}
      </section>
    </main>
  );
}
