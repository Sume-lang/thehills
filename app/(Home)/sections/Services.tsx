"use client";
import { useState } from "react";
import { dataDetails } from "../datastores/productdetails/productdetails";
import { Card } from "../components/UI/motionsCards";
import { P, Sections, H1, Divs } from "../components/containers/divs";
import { motion } from "framer-motion";
export default function Services() {
  const [isOpen, setIsOpen] = useState<
    (typeof dataDetails)[number]["id"] | null
  >(null);

  const toggle = (id: (typeof dataDetails)[number]["id"]) => {
    setIsOpen(isOpen === id ? null : id);
  };

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
      <section className="w-full h-[40vh] flex flex-row justify-start items-start py-4">
        <div className="w-[15%] h-full border-r-1 border-gray-900 p-4 flex flex-col items-center justify-between">
          {dataDetails.map((service) => (
            <div
              key={service.id}
              onClick={() => toggle(service.id)}
              className="w-full border-gray-900 flex items-center justify-center bg-gray-500 rounded-md p-4 cursor-pointer hover:bg-gray-600 hover:shadow-md transition duration-300 ease-in-out active:bg-gray-700"
            >
              <h1 className="text-3xl font-bold ">{service.name}</h1>
            </div>
          ))}
        </div>
        <div className="w-[90%] h-full p-4">
          {isOpen !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
            >
              {dataDetails.find((service) => service.id === isOpen)?.component}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}
