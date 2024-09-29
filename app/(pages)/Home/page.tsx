import React from "react";
import {
  Hero,
  Services,
  Newsevent,
  Packages,
  Activities,
  Destination,
  Discovery,
} from "../Home/Sections/sections";

export default function Home() {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <Discovery />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Destination />
      </section>
      <section>
        <Newsevent />
      </section>
      <section>
        <Packages />
      </section>
      <section>
        <Activities />
      </section>
    </main>
  );
}
