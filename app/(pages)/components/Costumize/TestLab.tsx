"use client";
import React, { useState } from "react";
import { dataTourism } from "../../Home/Resources/Discovery";
import Img from "next/image";

export default function Destionantions() {
  const [open, setOpen] = useState(false);
  return (
    <main className="w-full min-h-screen flex flex-row items-start justify-start p-4 gap-4">
      <section className="w-full min-h-screen flex flex-col items-start justify-start gap-4">
        {dataTourism.map((item) => (
          <div
            key={item.id}
            className="w-full min-h-screen flex flex-col items-start justify-start gap-4">
            <div
              onClick={() => setOpen(!open)}
              className="w-full min-h-screen flex flex-col items-start justify-start gap-4">
              <h1 className="lg:text-7xl text-5xl font-light text-slate-800">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </section>
      <div
        className={`${
          open
            ? "w-full min-h-screen flex flex-col items-start justify-start gap-4"
            : "hidden"
        }`}>
        {dataTourism.map((item) => (
          <div
            key={item.id}
            className="w-full min-h-screen flex flex-col items-start justify-start gap-4">
            <div className="w-full min-h-screen flex flex-col items-start justify-start gap-4">
              <h1 className="lg:text-7xl text-5xl font-light text-slate-800">
                {item.title}
              </h1>
              <div className="w-full min-h-screen flex flex-row items-start justify-start gap-4">
                <div className="w-full min-h-screen flex flex-col items-start justify-start gap-4">
                  <h1 className="lg:text-7xl text-5xl font-light text-slate-800">
                    {item.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
