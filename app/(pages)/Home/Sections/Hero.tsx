import React from "react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
export default function Hero() {
  return (
    <main
      className="w-full h-screen"
      style={{
        backgroundImage: "url('/Assets/Images/Rinjani-Mointain-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="w-full h-full bg-slate-200 bg-opacity-40 flex flex-col text-start items-center justify-center p-3">
        <h1 className="lg:text-7xl text-5xl font-light uppercase">
          Personalize your{" "}
          <span className="text-slate-200 font-extrabold"> adventures</span>
        </h1>
        <TextGenerateEffect
          duration={0.6}
          words="The Hills.com is all about experiencing the real Lombok. Combine the
          island's stunning natural beauty with the unique culture of the Sasak
          people, creating unforgettable adventures for every traveler."
          className="lg:w-1/2 w-full lg:text-3xl text-slate-100 font-extralight text-center p-2"
        />
      </section>
    </main>
  );
}
