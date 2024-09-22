import React from "react";
import { motion } from "framer-motion";

const fx = {};

export default function Divmotion({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
}
