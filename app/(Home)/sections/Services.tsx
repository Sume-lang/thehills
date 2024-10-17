import { services, detailsServices } from "../datastores/services";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
export default function Services() {
  return (
    <main className="w-full p-4 flex-col gap-4 lg:justify-start lg:items-center justify-center items-start">
      <section className="w-full flex flex-col items-center justify-center">
        {" "}
        <h1 className="lg:text-7xl text-2xl font-extrabold text-slate-600 uppercase">
          An Ultimate{" "}
          <span className="text-slate-600 font-extralight">Services.</span>
        </h1>
        <p className="lg:w-1/2 w-full lg:text-3xl font-extralight text-slate-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          est? Deleniti voluptatum in dolorum incidunt? Culpa, accusantium
          reiciendis porro unde modi mollitia quia tempore animi rem quaerat
          soluta, eaque dolores! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Unde cumque voluptas maiores sunt sapiente animi
          mollitia magni, earum illo quo. Architecto nam tempore recusandae rem
          dolorem a officia quisquam praesentium.
        </p>
      </section>
      <section className="w-full flex lg:flex-row flex-col items-start justify-center">
        <div className="lg:p-20 w-full flex justify-center">
          <div className="w-full flex lg:flex-row flex-col lg:items-start lg:justify-center items-center lg:gap-20 gap-2">
            {services.map((i) => (
              <div key={i.id} className="p-4">
                <span className="text-5xl">{i.icon}</span>
                <h1 className="text-3xl uppercase font-bold">{i.name}</h1>
                <p>{i.description}</p>
                <Link href={i.link}>Read More</Link>
              </div>
            ))}
          </div>
          {}
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center p-20">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="lg:text-7xl text-2xl font-extrabold text-gray-600 uppercase">
            Our Services
          </h1>
          <p className="lg:w-1/2 w-full lg:text-3xl font-extralight text-gray-600 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            est? Deleniti voluptatum in dolorum incidunt? Culpa, accusantium
            reiciendis porro unde modi mollitia quia tempore animi rem quaerat
            soluta, eaque dolores! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Unde cumque voluptas maiores sunt sapiente animi
            mollitia magni, earum illo quo. Architecto nam tempore recusandae
            rem dolorem a officia quisquam praesentium.
          </p>
        </div>
        <div className="w-[60%] flex flex-wrap items-center justify-between gap-5 py-5">
          {detailsServices.map((i) => (
            <div className="w-full flex flex-wrap items-center justify-center gap-5">
              {i.tours.map((j) => (
                <Card>
                  <CardHeader>
                    <CardTitle>{j.name}</CardTitle>
                    <CardDescription>{j.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex flex-col items-start">
                    <p>IDR. {j.price}</p>
                    <Link href={j.link}>Read More</Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
