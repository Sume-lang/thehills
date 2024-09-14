"use client";
import Link from "next/link";
import {
  Settings,
  House,
  MessageSquareMore,
  Star,
  HandCoins,
  Calendar,
  Ticket,
  Layers,
  Bell,
  User,
  LogOut,
} from "lucide-react";
import { url } from "inspector";
const Navitems = [
  {
    title: "Menu",
    items: [
      {
        name: "Pages",
        url: "/",
        icons: <Layers className="w-5 h-5" />,
        child: [
          {
            name: "",
            url: "/",
            icons: "",
          },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <main className="text-sm ">
      <section>
        {Navitems.map((i) => (
          <div key={i.title} className="flex flex-col">
            <span className="hidden lg:block text-slate-200 font-bold my-4">
              {i.title}
            </span>
            {i.items.map((items) => (
              <Link
                key={items.name}
                href={items.url}
                className="flex items-center justify-center lg:justify-start gap-4 p-2 hover:bg-orange-600 hover:text-slate-100 hover:shadow-md hover:font-bold text-slate-200 duration-300 ease-out rounded-md cursor-pointer">
                <span className="">{items.icons}</span>
                <span className="hidden lg:block">{items.name}</span>
              </Link>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Sidebar;
