"use client";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import mainProductdata from "../basedata/productData/mainproductdata";
export default function Services() {
  const [setOpen, setIsOpen] = useState(false);
  const handler = () => setIsOpen(!setOpen);
  return (
    <motion.main className="flex flex-row justify-start items-start">
      <section></section>
    </motion.main>
  );
}
