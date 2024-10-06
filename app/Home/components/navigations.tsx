"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import NavigationsData from "./Navdata/DataNavigations";
export default function NavigationsDesktop() {
  const [scrollY, setScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("bg-transparent");
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (scrollY > 0) {
      setBgColor(
        "hover:bg-gray-300 text-white transition duration-300 ease-in-out"
      );
    } else {
      setBgColor(
        "bg-gray-400 hover:bg-transparent transition duration-300 ease-in-out"
      );
    }
  }, [scrollY]);
  return (
    <main
      className={`${bgColor} sticky top-0 text-black shadow-lg z-50 lg:flex hidden flex-row p-20 justify-between items-center w-full h-20`}
    >
      <section id="logo">
        <h1 className="text-6xl font-extrabold">LOGO</h1>
      </section>
    </main>
  );
}
