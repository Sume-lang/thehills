import React from "react";
import Hero from "./section/Hero";
import Activities from "./section/Activities";
import Packages from "./section/Packages";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start bg-slate-100">
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full">
        <Activities />
      </section>
      <section className="w-full">
        <Packages />
      </section>
    </main>
  );
}
