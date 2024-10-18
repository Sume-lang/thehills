"use client";

import * as React from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const cardVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeInOut } },
  closed: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5, ease: easeInOut },
  },
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className }, ref) => (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className={`bg-white rounded-lg ${className}`}
        variants={cardVariants}
        initial="closed"
        animate="open"
        exit="closed"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
);

Card.displayName = "Card";
