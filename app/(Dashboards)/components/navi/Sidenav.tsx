"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Settings,
  House,
  MessageSquareMore,
  Star,
  HandCoins,
  Calendar,
  Ticket,
  Layers,
  Bell,
  User,
  LogOut,
} from "lucide-react";
const Navitems = [
  {
    title: "Menu",
    items: [
      {
        name: "Pages",
        url: "/",
        icons: <Layers className="w-5 h-5" />,
        child: [
          {
            name: "Create Post",
            url: "/",
            icons: "",
          },
        ],
      },
    ],
  },
];

function Sidebar() {
  return (
    <main className="sticky top-0 text-sm ">
      <section className="text-slate-200 font-bold">
        <h1 className="hidden lg:block text-slate-200 font-extrabold text-3xl">
          LOGO <br />
        </h1>
      </section>
      <section>
        {Navitems.map((i) => (
          <div key={i.title} className="flex flex-col">
            <span className="hidden lg:block text-slate-200 font-bold my-4">
              {i.title}
            </span>
            {i.items.map((items) => (
              <Link
                key={items.name}
                href={items.url}
                className="flex items-center justify-center lg:justify-start gap-4 p-2 hover:bg-orange-800 hover:text-slate-100 hover:shadow-md hover:font-bold text-slate-200 duration-300 ease-out rounded-md cursor-pointer">
                <span className="">{items.icons}</span>
                <span className="hidden lg:block">{items.name}</span>
              </Link>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}

export default Sidebar;
