import React from "react";
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

  {
    name: "The Hills",
    image: "/Assets/Images/Beach-2.jpg",
  },

  {
    name: "The Hills",
    image: "/Assets/Images/Beach-3.jpg",
  },

  {
    name: "The Hills",
    image: "/Assets/Images/Beach-4.jpg",
  },
];

export default function Activites() {
  return (
    <main className="w-full min-h-screen flex lg:flex-row flex-col items-start justify-start gap-4 lg:p-20 p-2">
      <section>
        <ScrollArea className="lg:w-[800px] w-[350px] whitespace-nowrap rounded-md border shadow-md">
          <div className="flex w-max space-x-4 lg:p-4">
            {Rinjani.map((Activites) => (
              <figure key={Activites.name} className="shrink-0">
                <div className="overflow-hidden rounded-md">
                  <Img
                    src={Activites.image}
                    alt={`Photo by ${Activites.name}`}
                    className="aspect-[2/5] h-[400px] w-[300px] object-cover"
                    width={400}
                    height={500}
                  />
                </div>
                <figcaption className="text-xs text-muted-foreground">
                  Photo by{" "}
                  <span className="font-semibold text-foreground">
                    {Activites.name}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
      <section>
        <h1 className="text-5xl font-extrabold">Activities</h1>
        <h1 className="font-extralight">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          vero fugit recusandae, sunt neque in explicabo. Placeat porro
          consequuntur rem labore autem facere nam ullam minus ab, cupiditate
          quam reprehenderit.
        </h1>
        <div></div>
      </section>
    </main>
  );
}
