import React from "react";
import Dicsdata from "../Resources/Discovery";

export default function Discovery() {
  return (
    <main className="flex flex-col w-full h-[500px] items-start justify-start">
      <section className="flex items-end justify-end w-full p-4 pt-20 px-20">
        <h1 className="lg:text-7xl text-xl font-extralight uppercase">
          Organize your{" "}
          <span className="text-slate-600 font-extrabold">Needs</span>
        </h1>
      </section>
      <section className="flex flex-row items-start justify-start w-full">
        <div className="w-1/2">1</div>
        <div className="w-full flex flex-row items-start justify-start shadow-inner p-4 gap-4">
          {Dicsdata.map((i) => (
            <div
              className="w-1/5 bg-slate-300 flex flex-col items-start justify-start gap-4 shadow-md rounded-sm h-[150px] p-4"
              key={i.id}>
              <h1 className="font-extralight uppercase">{i.title}</h1>
              <span className="text-slate-500 w-10 h-10">{i.icons}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
