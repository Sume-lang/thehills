"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import dataServices from "../basedata/dataServices";

type dataServices = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  content: {
    title: string;
    icon: React.ReactNode;
    description: string;
  }[];
  Img: string;
};
export default function Services() {
  const [isOpen, setIsOpen] = useState(false);
  const Toggle = () => setIsOpen(!isOpen);
  return (
    <main className="w-full flex flex-row h-screen justify-start items-start p-4 gap-4">
      <motion.section
        className="w-1/2 h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <div>
          <h1 className="text-5xl font-extrabold uppercase text-slate-900">
            Our{" "}
            <span className="text-slate-600 font-extralight">Services.</span>
          </h1>
          <motion.p
            initial="initial"
            animate="animate"
            className="w-full text-start lg:text-2xl text-xl font-extralight text-slate-900"
          >
            We offer a variety of services to suit your needs. From reservations
            to transportation, we have you covered. Whether you need a ride to
            explore the city or just want to take some time to relax, we've got
            you covered. Our services are designed to cater to every traveler's
            needs, all while prioritizing sustainability and respect for the
            environment.
          </motion.p>
        </div>
        <motion.div
          initial="initial"
          animate="animate"
          className="w-full flex flex-row justify-between items-center text-start lg:text-4xl text-xl font-extralight text-slate-900 gap-3"
        >
          {dataServices.map((service) => (
            <div
              onClick={Toggle}
              key={service.id}
              className="flex flex-col justify-start items-start gap-3 p-2"
            >
              <span className="text-4xl font-extralight">{service.icon}</span>
              <h1 className="text-4xl font-bold text-slate-500">
                {service.title}
              </h1>
              <p className="text-xl font-extralight text-slate-500">
                {service.description}
              </p>
              <div>
                <h1
                  className="text-xl flex flex-row font-extralight text-slate-500 p-3 border border-slate-500 rounded-md hover:cursor-pointer hover:bg-slate-500 hover:text-slate-300 duration-300 ease-linear"
                  onClick={Toggle}
                  style={{ cursor: "pointer" }}
                  key={service.id}
                >
                  Check More <ChevronRight />
                </h1>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>
      {isOpen && (
        <motion.section
          className="w-full h-screen border border-slate-500 bg-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        ></motion.section>
      )}
      <motion.section
        className="w-full h-screen border border-slate-500 bg-slate-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      ></motion.section>
    </main>
  );
}
