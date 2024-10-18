"use client";
import { Hero, Services, Features } from "./sections/sections";
import SideBar from "./components/sidecontents/sidecontens";
import React from "react";
export default function Page() {
  return (
    <main className="w-full h-screen flex-col">
      <section>
        <Hero />
      </section>
      <section className="w-full flex flex-row justify-center items-center gap-1">
        <div className="w-[85%] h-screen border">
          <Services />
        </div>
        <div className="w-[15%] border">
          <div className="w-full h-full flex flex-col justify-start items-center">
            <h1 className="text-5xl font-bold uppercase">
              News And <span className="text-gray-600 font-light">Events</span>
            </h1>
          </div>
          <SideBar />
        </div>
      </section>
    </main>
  );
}
