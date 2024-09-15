"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.15], [1, 0.5]);
  return (
    <main
      ref={ref}
      className="w-full relative overflow-hidden bg-[url('/Assets/Images/Rinjani-Mointain-4.jpg')] bg-cover bg-center bg-no-repeat h-[700px]">
      <motion.div
        className="w-full h-full absolute top-0 left-0"
        style={{ scaleX }}
      />
      <motion.div
        className="w-full h-full absolute top-0 left-0"
        style={{ opacity }}
      />
      <section className="w-full h-full flex flex-col items-start justify-center bg-slate-400 bg-opacity-60 lg:p-20 p-4">
        <h1 className="text-slate-50 font-extralight lg:text-7xl text-5xl uppercase p-2">
          "Personalize your {""}
          <span className="text-slate-500 font-extrabold">
            adventures<span className="text-slate-50">"</span>
          </span>
        </h1>
        <h1 className="text-white text-5xl lg:text-7xl font-extrabold text-start uppercase p-2">
          Let's Start <span className="text-slate-500">With Us</span>
        </h1>
        <p className="text-white text-xl text-start p-2 lg:w-[50%] w-full">
          The Hills.com is all about experiencing the real Lombok. Combine the
          island's stunning natural beauty with the unique culture of the Sasak
          people, creating unforgettable adventures for every traveler.
        </p>
      </section>
    </main>
  );
}
