import React from "react";
import Hero from "./section/Hero";
import Activities from "./section/Activities";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full">
        <Activities />
      </section>
    </main>
  );
}
