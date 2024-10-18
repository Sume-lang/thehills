"use client";
import { Hero, Services, Features } from "./sections/sections";
import React from "react";
export default function Page() {
  return (
    <main className="w-full h-screen">
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
    </main>
  );
}
