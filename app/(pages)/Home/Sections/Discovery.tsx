import React from "react";
import dataDisc from "../Resources/Discovery";

export default function Discovery() {
  return (
    <main className="flex flex-col w-full h-full items-center justify-center gap-2 lg:p-4 p-2">
      <section className="pr-8">
        <div className="w-full h-full">
          <h1 className="lg:text-5xl text-5xl font-light">
            We <span className="text-slate-400 font-extrabold">Provide</span>
          </h1>
        </div>
      </section>
      <section className="flex flex-row flex-wrap items-start justify-start gap-4">
        {dataDisc.map((item) => (
          <div key={item.id}>
            <div className="lg:w-[350px] lg:h-[250px] w-full h-[250px] bg-opacity-15 rounded-md  p-2 flex  flex-col items-center justify-center border hover:bg-slate-400 hover:bg-opacity-25 duration-200 ease-linear gap-5">
              <h1 className="lg:text-2xl text-2xl font-extralight text-slate-400">
                {item.title}
              </h1>
              <span className="text-slate-400">{item.icons}</span>
              <span className="text-slate-400 font-extralight">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
