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
    <main className="w-full min-h-screen flex flex-col">
      <section>
        <Hero />
      </section>
      <section>
        <Services />
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
      <section>
        <Destination />
      </section>
      <section>
        <Discovery />
      </section>
    </main>
  );
}
