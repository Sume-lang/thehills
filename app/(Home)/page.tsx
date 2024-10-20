"use client";
import { Hero,Services } from "./sections/sections";
import React from "react";
export default function Home() {
  return (
    <main className="w-full h-screen flex-col">
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
    </main>
  );
}
