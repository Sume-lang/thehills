import React from "react";
import Hero from "./sections/Hero";
import Services from "./sections/services";
import MainTest from "./sections/TestingLab/main";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <MainTest />
      </section>
    </main>
  );
}
