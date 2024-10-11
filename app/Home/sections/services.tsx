"use client";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import mainProductdata from "../basedata/productData/mainproductdata";

const handleToggle = (
  id: number,
  setState: React.Dispatch<React.SetStateAction<number>>
) => {
  setState((prev) => (prev === id ? 0 : id));
};

export default function Services() {
  const [activeId, setActiveId] = useState(0);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="flex flex-row items-start justify-start p-10"
    >
      <section className="w-1/2 flex flex-col justify-start items-start">
        <div className="flex flex-col p-3">
          <h1 className="text-5xl font-extrabold text-slate-900">
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
            explore the city or just want to take some time to relax, we&apos;ve
            got you covered. Our services are designed to cater to every
            traveler&apos;s needs, all while prioritizing sustainability and
            respect for the environment.
          </motion.p>
        </div>
        <div className="w-full flex flex-row gap-4">
          {mainProductdata.map((i) => (
            <div key={i.id} className="w-1/3 p-1 gap-10">
              <span>{i.icons}</span>{" "}
              <h1 className="text-5xl font-bold text-slate-500 cursor-pointer">
                {i.title}
              </h1>{" "}
              <p className="text-2xl font-extralight text-slate-500">
                {i.desc}
              </p>
              <div
                className="w-[30%] flex flex-row justify-center items-center cursor-pointer border border-slate-500 rounded-md p-2 hover:bg-slate-500 hover:text-slate-300 duration-300 ease-linear"
                onClick={() => handleToggle(i.id, setActiveId)}
              >
                <span className="text-xl font-extralight">See More</span>
                <ChevronRight className="ml-auto h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-[65%] filter grayscale hover:grayscale-0 transition duration-500 ease-linear flex flex-col justify-center items-center rounded-xl">
        {activeId !== 0 && (
          <motion.div
            className="w-full rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeId !== 0 ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {mainProductdata.find((item) => item.id === activeId)?.content}
          </motion.div>
        )}

        {activeId === 0 && (
          <motion.div
            className="w-full rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: activeId !== 0 ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {mainProductdata.find((item) => item.id === activeId)?.content}
          </motion.div>
        )}
      </section>
    </motion.main>
  );
}
