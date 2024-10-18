"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import dataDetails from "../datastores/productdetails/productdetails";

export default function Testingbutton() {
  const [open, setOpen] = useState(false);
  const handleclick = () => {
    setOpen(!open);
  };
  return (
    <main className="w-full h-screen flex flex-col justify-center items-start py-20 gap-10">
      {dataDetails.map((i) => (
        <Button
          color="primary"
          onClick={handleclick}
          key={i.id}
          className="w-40 h-10"
        >
          {i.name}
        </Button>
      ))}
      {open &&
        dataDetails.map((i) => {
          return (
            <motion.div
              className="w-full h-screen bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {i.component}
            </motion.div>
          );
        })}
    </main>
  );
}
