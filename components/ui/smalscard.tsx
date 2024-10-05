"use client";
import { motion } from "framer-motion";

const presence = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.5,
    },
  },
};
export default function SmalsCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className="p-2 w-[200px] border border-slate-400 rounded-md"
      variants={presence}
      initial="initial"
      animate="animate"
      exit="exit"
      style={style}
    >
      <h1 className="text-3xl font-bold text-slate-900 py-2">Title Testing</h1>
      {children}
    </motion.div>
  );
}
