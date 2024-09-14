"use client";
import Link from "next/link";
import { Layers } from "lucide-react";
const Navitems = [
  {
    title: "Web Management",
    items: [
      {
        name: "Pages",
        url: "/",
        icons: <Layers className="w-5 h-5" />,
        child: [
          {
            name: "Create Post",
            url: "/",
            icons: "",
          },
          {
            name: "Edit Post",
            url: "/",
            icons: "",
          },
        ],
      },
    ],
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
            <span className="hidden lg:block text-slate-900 font-bold my-4">
              {i.title}
            </span>
            {i.items.map((items) => (
              <Link
                key={items.name}
                href=""
                className="flex items-center justify-center lg:justify-start gap-4 p-2 hover:bg-gray-500 hover:text-slate-100 hover:shadow-md hover:font-bold text-slate-900 duration-300 ease-out rounded-md cursor-pointer"
              >
                <span className="">{items.icons}</span>
                <span className="hidden lg:block">{items.name}</span>
              </Link>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}

export default Sidebar;
