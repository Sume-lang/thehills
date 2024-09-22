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

const Smcard = ({
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
        "md:w-1/2 lg:w-[150px] md:h-[30px] lg:h-[90px] rounded-lg border border-slate-200 gap-1 p-2 hover:bg-slate-300 hover:shadow-md duration-300 ease-linear",
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

const SmHeader = ({
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

const Smtitle = ({
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
      className={cn("text-md font-bold text-slate-600 leading-none", className)}
      style={style}
      variants={presence}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
    </motion.h3>
  );
};
const Smicons = ({
  children,
  className,
  style,
  Key,
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
      variants={presence}
      initial="initial"
      animate="animate"
      exit="exit"
      {...props}>
      {children}
    </motion.span>
  );
};

const Smdesc = ({
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
      className={cn("font-extralight", className)}
      style={style}
      variants={presence}
      initial="initial"
      animate="animate"
      exit="exit">
      {children}
    </motion.p>
  );
};

const Smcontent = ({
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

const Smfooter = ({
  children,
  className,
  style,
  url,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  url?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "flex flex-row rounded-md w-[60px] justify-center items-center text-center cursor-pointer border border-slate-400 hover:bg-slate-400 bg-opacity-15 py-2 duration-300 ease-linear",
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

export { Smcard, SmHeader, Smtitle, Smicons, Smdesc, Smcontent, Smfooter };
