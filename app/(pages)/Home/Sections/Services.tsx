"use client";
import {
  DivMotionleft,
  DivMotionright,
  DivMotioncenter,
} from "../Resources/UI/divmotion";
import { Button } from "@/components/ui/button";
export default function Services() {
  return (
    <main className="w-full min-h-screen flex lg:flex-row flex-col lg:items-start lg:justify-center p-4 py-10">
      <DivMotioncenter className="lg:w-1/3 flex flex-col p-2 gap-2">
        <DivMotionleft>
          <div className="flex flex-col gap-2">
            <h1 className="lg:text-7xl text-5xl font-light text-slate-800 border-b-2">
              Everything just {""}
              <span className="lg:text-7xl text-5xl font-bold text-slate-800">
                Come to Easy.
              </span>
            </h1>
          </div>
        </DivMotionleft>
        <DivMotionright>
          <p className="lg:text-3xl text-2xl font-light text-slate-400">
            We provide the best services{" "}
            <span className="text-slate-800 font-bold">
              as your expectation.
            </span>
          </p>
        </DivMotionright>
        <DivMotionleft className="flex flex-col gap-2 py-10">
          <p className="lg:text-3xl text-2xl font-extralight text-slate-900">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur reprehenderit, fugiat iusto earum, repellat doloribus
            dicta fuga aperiam ut excepturi facilis eius nulla odio nemo!
            Doloremque aliquid delectus vero tempore! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quasi molestias facilis recusandae vel
            cumque expedita voluptates non magnam praesentium incidunt quia
            excepturi repellat aspernatur, distinctio aliquid, ipsam vero
            dolore! Consequatur! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Enim quasi officia illo perspiciatis recusandae
            adipisci eveniet? Quae, fugit, temporibus labore aut laudantium eius
            molestiae doloribus odit natus modi, quod optio.
          </p>
          <div className="lg:w-1/6 w-[150px]">
            <Button variant="ghost" size="lg" className="w-full">
              <a href="/">More info</a>
            </Button>
          </div>
        </DivMotionleft>
      </DivMotioncenter>
      <DivMotioncenter className="lg:w-1/2 flex flex-col gap-2 bg-slate-300">
        <h1>page</h1>
      </DivMotioncenter>
    </main>
  );
}
