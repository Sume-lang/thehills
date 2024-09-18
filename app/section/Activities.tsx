import React, { useState, useRef } from "react";
import Img from "next/image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export interface Activites {
  name: string;
  image: string;
}
export const Rinjani: Activites[] = [
  {
    name: "The Hills",
    image: "/Assets/Images/Rinjani-Mointain-1.jpg",
  },

  {
    name: "The Hills",
    image: "/Assets/Images/Rinjani-Mointain-2.jpg",
  },
  {
    name: "The Hills",
    image: "/Assets/Images/Rinjani-Mointain-3.jpg",
  },

  {
    name: "The Hills",
    image: "/Assets/Images/Rinjani-Mointain-4.jpg",
  },

  {
    name: "The Hills",
    image: "/Assets/Images/Rinjani-Mointain-5.jpg",
  },

  {
    name: "The Hills",
    image: "/Assets/Images/Rinjani-Mointain-6.jpg",
  },

  {
    name: "The Hills",
    image: "/Assets/Images/Rinjani-Mointain-7.jpg",
  },

  {
    name: "The Hills",
    image: "/Assets/Images/Beach-1.jpg",
  },
];
export default function Activites() {
  return (
    <main className="w-full flex lg:flex-col flex-col gap-4 py-4 ">
      <section className="w-full h-full p-4 lg:flex flex-col lg:items-center lg:justify-center">
        <h1 className="text-5xl font-extralight text-slate-500 uppercase">
          Activities
        </h1>
        <h1 className="font-extralight w-1/2 text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          vero fugit recusandae, sunt neque in explicabo. Placeat porro
          consequuntur rem labore autem facere nam ullam minus ab, cupiditate
          quam reprehenderit.
        </h1>
      </section>
      <section className="w-full h-full">
        <ScrollArea className="lg:w-full w-[200px] whitespace-nowrap">
          <div className="flex w-max space-x-4">
            {Rinjani.map((Activites) => (
              <figure key={Activites.name} className="shrink-0">
                <div className="overflow-hidden">
                  <Img
                    src={Activites.image}
                    alt={`Photo by ${Activites.name}`}
                    className="aspect-[2/6] h-[300px] w-[400px] object-cover hover:scale-105 transition-all duration-300 ease-in-out blur hover:blur-0"
                    width={800}
                    height={900}
                  />
                </div>
                <figcaption className="text-xs text-muted-foreground">
                  {" "}
                  <span className="font-semibold text-foreground">
                    {/* {Activites.name} */}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    </main>
  );
}
