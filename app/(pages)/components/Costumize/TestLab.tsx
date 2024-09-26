"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Discovery from "../../Home/Resources/Discovery";
import {
  DivMotionleft,
  DivMotionright,
} from "../../Home/Resources/UI/divmotion";
import {
  Cardmotion,
  Titlemotion,
  Iconsmotion,
  Descriptionmotion,
} from "../../Home/Resources/UI/cardmotions";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { div } from "framer-motion/client";

export default function TestLab() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <motion.main
      className="flex md:flex-row lg:flex-row sm:flex-row flex-col md:items-center lg:items-center sm:items-center md:justify-center lg:justify-center sm:justify-center flex-auto gap-2 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      exit={{ opacity: 0 }}>
      <div onClick={handleClick} className="cursor-pointer">
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
          exit={{ opacity: 0 }}>
          {open ? (
            <div className="">Testing Page</div>
          ) : (
            <div className="w-1/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              cupiditate, ducimus placeat ea, autem, quibusdam minima eligendi
              beatae voluptates neque odio exercitationem laudantium magni nihil
              quas aliquid eos quasi natus!
            </div>
          )}
        </motion.div>
      </div>
    </motion.main>
  );
}
