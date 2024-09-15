"use client";

import { Layers } from "lucide-react";

const Navitems = [
  {
    title: "Web Management",
    items: [
      {
        name: "Pages",
        icons: <Layers className="w-5 h-5" />,
        child: [
          {
            name: "Add Pages",
            url: "/",
          },
          {
            name: "Edit Pages",
            url: "/",
          },
        ],
      },
    ],
  },
  {
    title: "Revenues",
  },
  {
    title: "Booking",
  },
  {
    title: "Data Service",
  },
  {
    title: "Settings",
  },
];

function Sidebar() {
  return (
    <main className="text-sm">
      <section className="text-slate-200 font-bold">
        <h1 className="hidden lg:block text-slate-200 font-extrabold text-3xl">
          LOGO <br />
        </h1>
      </section>
      <section>
        {Navitems.map((i) => (
          <div key={i.title} className="flex flex-col">
            <div className="hidden lg:block text-slate-900 font-bold my-2">
              <h1>{i.title}</h1>
            </div>
            {i.items?.map((j) => (
              <div
                key={j.name}
                className="flex items-center gap-4 cursor-pointer hover:bg-slate-100 duration-300 ease-in-out p-2 rounded-md px-4">
                {j.icons}
                <h1>{j.name}</h1>
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}

export default Sidebar;
