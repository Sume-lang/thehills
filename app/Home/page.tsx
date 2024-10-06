import React from "react";
import Hero from "./sections/Hero";
import Services from "./sections/services";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
    </main>
  );
}
