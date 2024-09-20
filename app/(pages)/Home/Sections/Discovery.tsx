import React from "react";
import Dicsdata from "../Resources/Discovery";

export default function Discovery() {
  return (
    <main className="flex flex-col w-full h-[500px] items-center justify-center">
      <section className="flex items-center justify-center w-full p-4 pt-20 px-20">
        <h1 className="lg:text-7xl text-xl font-extralight uppercase">
          Organize your{" "}
          <span className="text-slate-600 font-extrabold">Needs</span>
        </h1>
      </section>
      <section className="flex flex-row items-center justify-center w-full">
        <div className="w-1/2 flex flex-row items-end justify-end shadow-md rounded-md p-4 gap-4">
          {Dicsdata.map((i) => (
            <div
              className="w-1/2 bg-slate-300 flex flex-col items-start justify-start gap-4 shadow-md rounded-sm h-[200px] p-4"
              key={i.id}
            >
              <h1 className="font-extrabold text-slate-500 uppercase">{i.title}</h1>
              <span className="text-slate-500 w-10 h-10">{i.icons}</span>
              <p className="text-slate-500">{i.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
