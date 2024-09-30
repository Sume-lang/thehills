"use client";
import {
  DivMotionleft,
  DivMotionright,
  DivMotioncenter,
} from "../Resources/UI/divmotion";
import { Button } from "@/components/ui/button";
import { dataServices } from "../Resources/Discovery";
// import Test from "../../components/Costumize/TestLab";
import Img from "next/image";

const imgData = [
  {
    id: 1,
    src: "/Assets/Images/Beach-1.jpg",
    alt: "image",
    title: "image",
    desc: "image",
  },
  {
    id: 2,
    src: "/Assets/Images/Beach-2.jpg",
    alt: "image",
    title: "image",
    desc: "image",
  },
  {
    id: 3,
    src: "/Assets/Images/Beach-3.jpg",
    alt: "image",
    title: "image",
    desc: "image",
  },
  {
    id: 4,
    src: "/Assets/Images/Beach-4.jpg",
    alt: "image",
    title: "image",
    desc: "image",
  },
  {
    id: 5,
    src: "/Assets/Images/Beach-5.jpg",
    alt: "image",
    title: "image",
    desc: "image",
  },
  {
    id: 6,
    src: "/Assets/Images/Beach-6.jpg",
    alt: "image",
    title: "image",
    desc: "image",
  },
  {
    id: 7,
    src: "/Assets/Images/Beach-7.jpg",
    alt: "image",
    title: "image",
    desc: "image",
  },
  {
    id: 8,
    src: "/Assets/Images/Beach-8.jpg",
    alt: "image",
    title: "image",
    desc: "image",
  },
  {
    id: 9,
    src: "/Assets/Images/Rinjani-Mointain-1.jpg",
    alt: "image",
    title: "image",
    desc: "image",
  },
];

export default function Services() {
  return (
    <main className="w-full min-h-screen flex flex-col lg:items-start lg:justify-start lg:gap-10 gap-2 lg:p-24 p-4 py-10">
      <section className="flex lg:flex-row flex-col lg:items-start lg:justify-start lg:gap-10 gap-2">
        <DivMotioncenter className="lg:w-1/2 w-full flex flex-col p-2 gap-2">
          <DivMotionleft>
            <div className="flex flex-col gap-2 w-full">
              <h1 className="lg:text-5xl text-2xl font-light text-slate-800 border-b-2">
                Everything Just {""}
                <span className="lg:text-5xl text-5xl font-bold text-slate-800">
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
          <DivMotionleft className="flex flex-col gap-2 py-4">
            <p className="lg:text-xl text-2xl font-extralight text-slate-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur reprehenderit, fugiat iusto earum, repellat doloribus
              dicta fuga aperiam ut excepturi facilis eius nulla odio nemo!
              Doloremque aliquid delectus vero tempore! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quasi molestias facilis
              recusandae vel cumque expedita voluptates non magnam praesentium
              incidunt quia excepturi repellat aspernatur, distinctio aliquid,
              ipsam vero dolore! Consequatur! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Enim quasi officia illo perspiciatis
              recusandae adipisci eveniet? Quae, fugit, temporibus labore aut
              laudantium eius molestiae doloribus odit natus modi, quod optio.
            </p>
            <div className="lg:w-1/6 w-[150px]">
              <Button variant="ghost" size="lg" className="w-full">
                <a href="/">More info</a>
              </Button>
            </div>
          </DivMotionleft>
        </DivMotioncenter>
        <DivMotioncenter className="lg:w-full flex flex-col items-start justify-start gap-2 p-2">
          <div className="w-full">
            <h1 className="text-5xl font-light text-slate-800 border-b-2">
              The Three Goal{" "}
              <span className="text-slate-800 font-bold">Services.</span>
            </h1>
          </div>
          <div>
            <DivMotioncenter className="w-full flex lg:flex-row flex-col items-start justify-start gap-2">
              {dataServices.map((data, idx) => {
                return (
                  <div
                    key={idx}
                    className="w-full h-1/6 flex flex-col items-start justify-start gap-5">
                    <h1 className="lg:text-2xl text-3xl font-bold text-slate-800">
                      {data.title}
                    </h1>
                    <p className="text-xl font-light text-slate-900">
                      {data.desc}
                    </p>
                    <div className="lg:w-1/5 w-[200px]">
                      <Button
                        variant="ghost"
                        size="lg"
                        className="p-4 py-4 px-4">
                        <a href={data.link}>More info</a>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </DivMotioncenter>
          </div>
        </DivMotioncenter>
      </section>
      <section className="flex lg:flex-row flex-col lg:items-start lg:justify-start">
        <div className="lg:w-1/2 w-full h-screen flex flex-col">
          <DivMotionleft>
            <div className="flex flex-col w-full">
              <h1 className="lg:text-7xl text-5xl font-light text-slate-800 border-b-2">
                All In One {""}
                <span className="lg:text-7xl text-5xl font-bold text-slate-800">
                  Arrangement.
                </span>
              </h1>
            </div>
          </DivMotionleft>
          {/* <div className="py-10">
          <Test />
        </div> */}
          <DivMotionright>
            <p className="text-2xl font-light text-slate-400">
              We provide the best services{" "}
              <span className="text-slate-800 font-bold">
                as your expectation.
              </span>
            </p>
          </DivMotionright>
          <DivMotionleft className="flex flex-col gap-2 py-4">
            <DivMotioncenter>
              <Img
                src="/Assets/Images/Rinjani-Mointain-2.jpg"
                width={800}
                height={500}
                alt=""
                className="float-left object-cover filter grayscale hover:grayscale-0 duration-300 ease-linear"
                style={{
                  objectFit: "fill",
                  overflowBlock: "auto",
                  width: "90%",
                  objectPosition: "50% 50%",
                  height: "auto",
                }}
              />
            </DivMotioncenter>
            <p className="w-full text-xl font-light text-slate-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur reprehenderit, fugiat iusto earum, repellat doloribus
              dicta fuga aperiam ut excepturi facilis eius nulla odio nemo!
              Doloremque aliquid delectus vero tempore! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Quasi molestias facilis
              recusandae vel cumque expedita voluptates non magnam praesentium
              incidunt quia excepturi repellat aspernatur, distinctio aliquid,
              ipsam vero dolore! Consequatur! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Enim quasi officia illo perspiciatis
              recusandae adipisci eveniet? Quae, fugit, temporibus labore aut
              laudantium eius molestiae doloribus odit natus modi, quod optio.
            </p>
          </DivMotionleft>
        </div>
        <div className="lg:w-full hidden h-screen lg:flex flex-col items-center justify-center"></div>
      </section>
      <section className="flex flex-row items-start justify-start p-4 gap-8">
        <div className="w-1/4"></div>
      </section>
    </main>
  );
}
