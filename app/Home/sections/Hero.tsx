"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "100%"]);
  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10 h-[50vh] w-full filter grayscale hover:grayscale-0 duration-500 ease-in-out"
        style={{ y }}
      >
        <div
          className="absolute inset-0 flex h-full w-full items-center justify-center"
          style={{
            backgroundImage: "url('/Assets/Images/Beach-6.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </motion.div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-slate-400 bg-opacity-60">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="lg:text-7xl uppercase font-extralight tracking-tight text-white sm:text-6xl">
              The Hills
            </h1>
            <p className="mt-6 text-xl lg:text-xl leading-8 text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              impedit iure. Magnam sint ipsum accusantium eligendi aut magni
              unde velit, ex tempore ab dolorum soluta. Cum neque asperiores
              dicta iusto. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Natus, impedit iure. Magnam sint ipsum accusantium eligendi
              aut magni unde velit, ex tempore ab dolorum soluta. Cum neque
              asperiores dicta iusto.
            </p>
            <Link
              href="/"
              className="mt-10 inline-block rounded-lg bg-white px-5 py-3 text-base font-semibold leading-7 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Get started
              <span className="text-gray-600" aria-hidden="true">
                {" "}
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
