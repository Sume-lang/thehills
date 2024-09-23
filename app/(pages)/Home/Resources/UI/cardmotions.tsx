"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

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

const Cardmotion = ({
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
      className={cn(
        "flex flex-col rounded-lg border border-slate-400 p-4 md:w-[200px] sm:w-[140px] lg:w-[400px] lg:h-[400px] md:h-[200px] gap-4 hover:bg-slate-300 hover:shadow-md hover:text-slate-900 duration-300 ease-linear",
        className
      )}
      style={style}
      variants={presence}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
    </motion.div>
  );
};

const Headermotion = ({
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
      className={cn("p-2", className)}
      style={style}
      variants={presence}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
    </motion.div>
  );
};

const Titlemotion = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.h3
      className={cn(
        "lg:text-6xl text-3xl font-extralight text-slate-400 leading-none",
        className
      )}
      style={style}
      variants={presence}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
    </motion.h3>
  );
};
const Iconsmotion = ({
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
      className={cn("text-slate-400 lg:text-5xl text-3xl", className)}
      style={style}
      variants={presence}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}>
      {children}
    </motion.span>
  );
};

const Descriptionmotion = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <motion.p
      className={cn("lg:text-3xl text-2xl text-md font-extralight", className)}
      style={style}
      variants={presence}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
    </motion.p>
  );
};

const Contentmotion = ({
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
      className={cn("p-2 pt-0", className)}
      style={style}
      variants={presence}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
    </motion.div>
  );
};

const Footermotion = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  url?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "cursor-pointer border border-slate-400 hover:bg-slate-400 bg-opacity-15 py-2 duration-300 ease-linear",
        className
      )}
      style={style}
      variants={presence}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
      <ChevronRight size={15} className="text-slate-800" />
    </motion.div>
  );
};

export {
  Cardmotion,
  Headermotion,
  Titlemotion,
  Iconsmotion,
  Descriptionmotion,
  Contentmotion,
  Footermotion,
};
