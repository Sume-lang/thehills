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
    <main className="w-full min-h-screen py-6 p-4 flex flex-col text-white">
      <section id="logo">Logo</section>
      <section id="menuItems">Menu Items</section>
      <section
        id="settings"
        className="flex flex-col items-start justify-start">
        <div className="flex flex-row items-center justify-start gap-2 rounded-md">
          <h1 className="text-md font-bold text-slate-600">Settings</h1>
        </div>

        {settings.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-start gap-4">
            <h1 className="text-md font-light text-slate-800">{item.name}</h1>
          </div>
        ))}
      </section>
    </main>
  );
}
