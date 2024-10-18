"use clint";
import { useState } from "react";
import { motion } from "framer-motion";
import { dataDetails } from "../datastores/productdetails/productdetails";

export default function Services() {
  return (
    <main className="w-full h-screen flex flex-col justify-start items-center py-20">
      <section className="w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold uppercase">
          Our{" "}
          <span className="text-wrap text-gray-600 font-light">
            Ulimates Services
          </span>
        </h1>
        <p className="text-2xl font-light font-sans text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime earum
          dolores, itaque vitae minima dicta magni corrupti et suscipit ipsa vel
          nobis exercitationem perspiciatis pariatur dolor culpa eaque beatae
          nesciunt. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Magni vel quisquam ipsa, enim eligendi cupiditate consectetur! Veniam
          omnis quidem accusamus quas sed obcaecati quod. Consequatur unde quia
          quae vel laborum.
        </p>
      </section>
      <section className="w-full flex flex-row justify-center items-center">
        {dataDetails.map((i) => (
          <motion.div
            key={i.id}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 p-1"
          >
            {i.component && typeof i.component === "string" ? (
              i.component
            ) : (
              <div className="w-full flex items-start justify-center border border-slate-600 h-screen">
                {i.component}
              </div>
            )}
          </motion.div>
        ))}
      </section>
    </main>
  );
}
