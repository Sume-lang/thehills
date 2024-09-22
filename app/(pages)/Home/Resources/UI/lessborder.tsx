"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const animating = {
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

const LessCard = ({
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
      className={cn("w-[300px] h-[300px]", className)}
      style={style}
      variants={animating}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
const LessHeader = ({
  children,
  className,
  style,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  Key?: React.ReactNode;
}) => {
  return (
    <motion.h3
      className={cn("text-md font-bold text-slate-600 leading-none", className)}
      style={style}
      variants={animating}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {children}
    </motion.h3>
  );
};
const LessIcons = ({
  children,
  className,
  style,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  Key?: React.ReactNode;
}) => {
  return (
    <motion.span
      className={cn("items-center text-slate-400", className)}
      style={style}
      variants={animating}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {children}
    </motion.span>
  );
};
const LessDescription = ({
  children,
  className,
  style,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  Key?: React.ReactNode;
}) => {
  return (
    <motion.p
      className={cn("font-extralight", className)}
      style={style}
      variants={animating}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}
    >
      {children}
    </motion.p>
  );
};
export { LessCard, LessHeader, LessIcons, LessDescription };
