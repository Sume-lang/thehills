import React from "react";
import Hero from "./sections/Hero";
import Services from "./sections/services";
import LombokOverviews from "./sections/lombokoverviews";
import TheHillOverview from "./sections/TheHillOverview";
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
        <TheHillOverview />
      </section>
      <section>
        <LombokOverviews />
      </section>
      <section>
        <MainTest />
      </section>
    </main>
  );
}
