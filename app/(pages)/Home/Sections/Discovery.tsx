import React from "react";
import dataDisc from "../Resources/Discovery";
import { DivMotionleft, DivMotionright } from "../Resources/UI/divmotion";
import {
  Cardmotion,
  Titlemotion,
  Iconsmotion,
  Descriptionmotion,
} from "../Resources/UI/cardmotions";

export default function Discovery() {
  return (
    <main className="flex md:flex-row lg:flex-row sm:flex-row flex-col md:items-center lg:items-center sm:items-center md:justify-center lg:justify-center sm:justify-center flex-auto gap-2 p-4">
      <section className="flex md:flex-row lg:flex-row flex-col gap-2">
        {dataDisc.map((item) => (
          <div key={item.id}>
            <Cardmotion className="">
              <DivMotionleft>
                <Titlemotion className="">{item.title}</Titlemotion>
              </DivMotionleft>
              <DivMotionleft>
                <Iconsmotion>{item.icons}</Iconsmotion>
              </DivMotionleft>
              <DivMotionright className="">
                <Descriptionmotion>{item.desc}</Descriptionmotion>
              </DivMotionright>
            </Cardmotion>
          </div>
        ))}
      </section>
    </main>
  );
}
