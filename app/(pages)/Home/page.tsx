import React from "react";
import { Hero, Services,Discovery } from "../Home/Sections/sections";

export default function Home() {
  return (
    <main className="">
      <section className="w-full">
        <Hero />
      </section>
      <section><Discovery /></section>
      <section><Services /></section>
    </main>
  );
}
