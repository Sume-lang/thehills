"use client";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tours from "../datastores/productdetails/tours";
import Accomodations from "../datastores/productdetails/accomodations";
import Transportations from "../datastores/productdetails/transportations";

export default function Page() {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const Services = [
    {
      id: 1,
      name: "Tour And Travels",
      child: <Tours />,
    },
    {
      id: 2,
      name: "Accomodations",
      child: <Accomodations />,
    },
    {
      id: 3,
      name: "Transportations",
      child: <Transportations />,
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#f1f1f1] to-white">
      <section className="flex gap-20 border h-24 items-center justify-center">
        {Services.map((service) => (
          <motion.button
            key={service.id}
            className="flex items-center gap-4 p-4 rounded-md bg-white shadow-md cursor-pointer hover:bg-gray-100"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(service.id)}
          >
            <h1 className="text-4xl font-bold">{service.name}</h1>
          </motion.button>
        ))}
      </section>
      {isOpen !== null && (
        <motion.div
          ref={ref}
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-10 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-md p-8 shadow-md"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
          >
            {Services.find((service) => service.id === isOpen)?.child}
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}
