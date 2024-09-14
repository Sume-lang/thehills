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
const Navitems = [
  {
    title: "Menu",
    items: [
      {
        name: "Dashboard",
        url: "/Admin",
        icons: <House className="w-5 h-5" />,
      },
      {
        name: "Notification",
        url: "",
        icons: <Bell className="w-5 h-5" />,
      },
      {
        name: "Rating",
        url: "",
        icons: <Star className="w-5 h-5" />,
      },
      {
        name: "Revanue",
        url: "",
        icons: <HandCoins className="w-5 h-5" />,
      },
      {
        name: "Events",
        url: "",
        icons: <Calendar className="w-5 h-5" />,
      },
      {
        name: "Web Pages",
        url: "",
        icons: <Layers className="w-5 h-5" />,
        child: [
          {
            name: "Add Post",
            url: "/",
            icons: "",
          },
          {
            name: "Add Page",
            url: "",
            icons: "",
          },
          {
            name: "Add Product",
            url: "",
            icons: "",
          },
          {
            name: "Category",
            url: "",
            icons: "",
          },
        ],
      },
      {
        name: "Booking List",
        url: "",
        icons: <Ticket className="w-5 h-5" />,
      },
      {
        name: "Comments",
        url: "",
        icons: <MessageSquareMore className="w-5 h-5" />,
      },
    ],
  },
  {
    title: "Setting",
    items: [
      {
        name: "Account",
        url: "",
        icons: <User className="w-5 h-5" />,
      },
      {
        name: "Logout",
        url: "",
        icons: <LogOut className="w-5 h-5" />,
      },
      {
        name: "Setting",
        url: "",
        icons: <Settings className="w-5 h-5" />,
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
            <span className="hidden lg:block text-slate-800 font-bold my-2">
              {i.title}
            </span>
            {i.items.map((items) => (
              <Link
                key={items.name}
                href={items.url}
                className="flex items-center justify-center lg:justify-start gap-4 p-2 hover:bg-slate-800 hover:text-slate-100 hover:shadow-md hover:font-bold duration-300 ease-out rounded-md cursor-pointer"
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
};

export default Sidebar;
