import React from "react";
import dataDisc from "../Resources/Discovery";
import { DivMotionleft, DivMotionright } from "../Resources/UI/divmotion";
import { Cardmotion, Iconsmotion } from "../Resources/UI/cardmotions";

export default function Discovery() {
  return (
    <main className="flex flex-col w-full h-full items-center justify-center gap-2 lg:p-4 p-2">
      <section className="md:flex-auto md:justify-center flex flex-row flex-wrap items-start justify-start gap-4">
        {dataDisc.map((item) => (
          <div key={item.id}>
            <Cardmotion className="rounded-md  p-2 flex  flex-col items-center justify-center cursor-pointer">
              <DivMotionleft>
                <h1 className="lg:text-2xl text-2xl font-extralight text-slate-400">
                  {item.title}
                </h1>
              </DivMotionleft>
              <DivMotionleft>
                <Iconsmotion>{item.icons}</Iconsmotion>
              </DivMotionleft>
              <DivMotionright className="text-slate-400 text-center font-extralight">
                {item.desc}
              </DivMotionright>
            </Cardmotion>
          </div>
        ))}
      </section>
    </main>
  );
}
