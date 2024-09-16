"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll } from "framer-motion";
import { useTransform } from "framer-motion";

export default function FlipCard({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  return (
    <div
      ref={ref}
      className="w-full h-full flex flex-col items-center justify-center">
      <motion.div
        className="w-full h-full absolute top-0 left-0"
        style={{ rotateX, rotateY }}
      />
      {children}
    </div>
  );
}
