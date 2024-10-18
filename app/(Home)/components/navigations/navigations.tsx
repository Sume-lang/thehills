"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navigationsmenu from "../../datastores/navigationsmenu";

export default function Navigation({
  menu = Navigationsmenu,
  dropdownMenu = true,
}: {
  menu: {
    name: string;
    link: string;
    child?: { name: string; link: string }[];
  }[];
  dropdownMenu?: boolean;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[10%] ${
        isScrolled ? "bg-gray-500 shadow-xl text-white" : "bg-transparent"
      } z-10 items-center flex justify-center transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center">
            <Link href="/" className="text-3xl font-extrabold uppercase">
              LOGO
            </Link>
          </div>
          <div className="hidden md:flex gap-20 items-center">
            {menu.map((item) => (
              <div key={item.name} className="relative">
                <button
                  className="font-semibold hover:text-gray-50 transition-colors duration-300 ease-soft-spring"
                  onClick={() =>
                    setOpenMenu(openMenu === item.name ? null : item.name)
                  }
                >
                  {item.name}
                </button>
                {dropdownMenu && item.child && openMenu === item.name && (
                  <div className="absolute top-10 left-0 bg-white shadow-lg p-4 mt-1 rounded-md flex flex-col w-[150px]">
                    {item.child.map((childItem) => (
                      <Link key={childItem.name} href={childItem.link}>
                        <span className="block hover:bg-gray-200 rounded p-2 font-semibold text-black">
                          {childItem.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
