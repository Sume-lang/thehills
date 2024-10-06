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
        className="w-1/2 h-screen border border-slate-500 bg-slate-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2.5 }}
      >
        <h1>Testing 1 Page</h1>
      </motion.section>
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
