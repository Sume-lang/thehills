import React from "react";
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
        <div className="w-1/2 h-[500px]">1</div>
        <div className="w-full flex flex-row items-center justify-center shadow-inner p-4 h-[500px] gap-4">
          <div className="w-1/4 bg-slate-300 p-2 shadow-md rounded-sm h-[470px] ">
            <h1>Lorem ipsum</h1>
          </div>          <div className="w-1/4 bg-slate-300 p-2 shadow-md rounded-sm h-[470px] ">
            <h1>Lorem ipsum</h1>
          </div>          <div className="w-1/4 bg-slate-300 p-2 shadow-md rounded-sm h-[470px] ">
            <h1>Lorem ipsum</h1>
          </div>          <div className="w-1/4 bg-slate-300 p-2 shadow-md rounded-sm h-[470px] ">
            <h1>Lorem ipsum</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
