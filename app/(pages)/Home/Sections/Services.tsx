import React from "react";
import { ChevronRight, Mic } from "lucide-react";
import {
  DivMotionleft,
  DivMotionright,
  DivMotioncenter,
} from "../Resources/UI/divmotion";
import { DotPattern } from "../Resources/UI/dotpatern";
import {
  Cardmotion,
  Headermotion,
  Iconsmotion,
  Titlemotion,
  Descriptionmotion,
  Footermotion,
} from "../Resources/UI/cardmotions";
import {
  Smcard,
  SmHeader,
  Smtitle,
  Smicons,
  Smdesc,
  Smcontent,
  Smfooter,
} from "../Resources/UI/smcard";
export default function Services() {
  return (
    <main className="flex flex-col w-full h-full gap-2">
      <DivMotionleft className=" z-10 transition-none">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="flex flex-col items-start justify-start gap-4">
            <h1 className="lg:text-5xl text-5xl font-extrabold ">
              Discover{" "}
              <span className="text-slate-600 font-extralight">
                the best of Lombok
              </span>
            </h1>
          </div>
        </div>
      </DivMotionleft>
      <DivMotionright className="relative z-10 transition-none w-full flex lg:flex-row md:flex-row flex-col lg:items-center lg:justify-center">
        <div className="lg:w-1/2 w-full h-[300px] border border-slate-400 p-4 flex flex-col lg:items-start lg:justify-start bg-slate-400">
          <h1 className="text-2xl font-extralight">
            Unlock Your{" "}
            <span className="text-slate-600 font-bold">Limitations</span> with
            Us
          </h1>
          <div className="flex flex-row items-start justify-start gap-2"></div>
        </div>
        <DivMotionright className="w-full h-[300px] border border-slate-300 bg-slate-300 p-4">
          <h1>Lorem</h1>
        </DivMotionright>
      </DivMotionright>
    </main>
  );
}
