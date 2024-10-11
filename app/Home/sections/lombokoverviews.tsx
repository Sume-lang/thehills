"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Animate = [{}];

export default function LombokOverviews() {
  const [open, setOpen] = useState(false);
  const Handlers = () => setOpen(!open);
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-screen flex flex-row justify-start items-start p-4 gap-4"
    >
      <section>
        <div></div>
        <div onClick={Handlers} className="text-3xl bg-slate-400 p-4  rounded-md">Add Mores</div>
      </section>
      {open ? (
        <section> Testing 1</section>
      ) : (
        <section>Open Testing 2 </section>
      )}
    </motion.main>
  );
}
