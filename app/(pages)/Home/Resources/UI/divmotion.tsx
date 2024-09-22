"use client";
import { motion } from "framer-motion";

const DivMotion = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      exit={{
        opacity: 0,
        x: "100%",
        transition: { duration: 0.7 },
      }}
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        staggerChildren: 0.3,
        delayChildren: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};
export default DivMotion;
