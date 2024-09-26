"use client";
import { motion } from "framer-motion";

const DivMotionleft = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      exit={{
        opacity: 0,
        x: "100%",
        transition: { duration: 1.5 },
      }}
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
        staggerChildren: 0.3,
        delayChildren: 0.3,
      }}>
      {children}
    </motion.div>
  );
};

const DivMotionright = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      exit={{
        opacity: 0,
        x: "-100%",
        transition: { duration: 1.5 },
      }}
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.5,
        staggerChildren: 0.3,
        delayChildren: 0.3,
      }}>
      {children}
    </motion.div>
  );
};
const DivMotioncenter = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 3,
        staggerChildren: 3.5,
        delayChildren: 3.5,
      }}>
      {children}
    </motion.div>
  );
};

export { DivMotionleft, DivMotionright, DivMotioncenter };
