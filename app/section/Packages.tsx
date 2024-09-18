"use client";
import Image from "next/image";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Datapack from "./data/Packages";

export interface Packages {
  name: string;
  pic: string;
  qty: string;
}
export interface Packages {
  id: number;
  title: string;
  Price: string;
  Desc: string;
  url: string;
  img: string;
}

export default function Packages() {
  return (
    <main className="w-full min-h-screen flex lg:flex-row flex-col items-start justify-start">
      <section className="w-1/2 h-screen p-4 bg-slate-200">
        <div className="w-full h-full flex flex-col items-start justify-start bg-opacity-50">
          <h1 className="text-2xl lg:text-7xl font-extralight text-slate-600 uppercase">
            Most{" "}
            <span className="text-2xl lg:text-7xl text-slate-400 font-extrabold">
              Favorite
            </span>
          </h1>
        </div>
      </section>
      <section
        className="hidden lg:block w-full h-screen flex-row bg-slate-300"
        style={{
          backgroundImage: "url('/Assets/tbg/farmermode.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}></section>
    </main>
  );
}
