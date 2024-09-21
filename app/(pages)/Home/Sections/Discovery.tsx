import React from "react";
import Dicsdata from "../Resources/Discovery";

export default function Discovery() {
  return (
    <main className="flex flex-row w-full h-[500px] items-center justify-center gap-2">
      <section className="w-1/2 h-full border-2 border-slate-200">
        <div className="w-full h-full flex flex-col items-center justify-start">
          <h1 className="text-3xl font-extralight">
            Recommendations{" "}
            <span className="text-slate-500 font-bold">For</span>
          </h1>
          <h1 className="text-3xl font-extralight">
            Beautiful <span className="">Destinations</span>
          </h1>
        </div>
      </section>
      <section className="w-full h-full border-2 border-slate-200">
        <h1 className="text-5xl uppercase font-extrabold">Page 2</h1>
      </section>
    </main>
  );
}
