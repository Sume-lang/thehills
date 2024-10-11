"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TheHillOverview() {
  //   const [activeId, setActiveId] = useState(0);
  //   const handleToggle = (
  //     id: number,
  //     setState: React.Dispatch<React.SetStateAction<number>>
  //   ) => {
  //     setState((prev) => (prev === id ? 0 : id));
  //   };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[800px] flex flex-col justify-start items-start p-4"
    >
      <section>
        <h1 className="text-4xl font-extrabold text-slate-900">
          Why With{" "}
          <span className="text-slate-600 font-extralight uppercase">
            The Hill ?
          </span>
        </h1>
      </section>
      <section className=" w-full flex flex-row justify-start items-start gap-1 py-5">
        <div
          className="w-1/2 h-full filter grayscale hover:grayscale-0 transition duration-500 ease-linear bg-slate-300 bg-opacity-50"
          style={{
            backgroundImage: "url('/Assets/Images/Traditional-Farming-5.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            cursor: "pointer",
          }}
        >
          <div className="w-full flex flex-row bg-gray-400 opacity-30"></div>
        </div>
        <div
          className="w-1/2 h-full filter grayscale hover:grayscale-0 transition duration-500 ease-linear bg-slate-300 bg-opacity-50"
          style={{
            backgroundImage: "url('/Assets/Images/underwater-1.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            cursor: "pointer",
          }}
        >
          Pages 2
        </div>
        <div
          className="w-1/2 h-[600px] filter grayscale hover:grayscale-0 transition duration-500 ease-linear bg-slate-300 bg-opacity-50"
          style={{
            backgroundImage: "url('/Assets/Images/Rinjani-Mointain-1.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            cursor: "pointer",
          }}
        >
          Pages 2
        </div>
      </section>
    </motion.main>
  );
}
