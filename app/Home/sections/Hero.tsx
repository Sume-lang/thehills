"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col justify-center items-center relative min-h-screen filter grayscale hover:grayscale-0 duration-300 ease-linear "
      style={{
        backgroundImage: "url('/Assets/Images/Beach-5.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="flex flex-col justify-center items-center bg-slate-300 bg-opacity-30 p-20 h-screen w-full">
        <div className="flex flex-col justify-start items-start bg-slate-200 bg-opacity-30 p-20 h-auto rounded-md gap-10">
          <h1 className="lg:text-7xl text-2xl font-extrabold uppercase text-slate-900">
            Welcome to TheHills <br />
            <span className="text-slate-900 font-extralight">
              Explore Lombok Island with Us!
            </span>
          </h1>
          <p className="w-1/2 text-start lg:text-2xl text-xl text-slate-900">
            We invite you to experience the natural beauty and rich culture of
            Lombok Island in a way that is unforgettable. Whether you seeking
            adventure, relaxation, or a deep connection with the local
            community, our services are designed to cater to every
            traveler&apos;s needs, all while prioritizing sustainability and
            respect for the environment.
          </p>
          <div className="flex flex-row items-center hover:bg-slate-200 transition duration-300 ease-linear p-3 rounded-md gap-3">
            <Link
              href="/"
              className="text-3xl font-extrabold uppercase text-slate-900"
            >
              get Started to Explore
            </Link>
            <span>
              <ChevronRight size={48} strokeWidth={0.5} />
            </span>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
