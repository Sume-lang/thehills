"use clint";
import { useState } from "react";
import { services } from "../datastores/services";
import { Card } from "../components/UI/motionsCards";
import { P, Sections, H1, Divs } from "../components/containers/divs";

export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <main className="w-full h-screen flex flex-col justify-start items-center">
      <Card className="w-1/2 flex flex-col justify-center items-center">
        <H1 className="text-5xl font-bold uppercase text-center">
          Freedom of{" "}
          <span className="text-wrap text-gray-600 font-light">Vocations </span>
          With Unlimited Services
        </H1>
        <P className="text-xl font-extralight font-sans text-center">
          Lombok Island offers a breathtaking experience for tourists seeking
          adventure and relaxation. With pristine beaches, crystal-clear waters,
          and lush green landscapes, it's a paradise for nature lovers. Embark
          on a hiking tour to Mount Rinjani, an active volcano with stunning
          views of the island.
        </P>
      </Card>
      <section className="w-full flex flex-row justify-center items-center py-10">
        <div className="w-1/2 border h-24 flex flex-col justify-center items-center">
          <H1 className="text-5xl font-bold uppercase">Services</H1>
        </div>
        <div className="w-full border h-24 flex flex-col justify-center items-center"></div>
      </section>
    </main>
  );
}
