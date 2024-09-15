"use client";
import { Search, CircleUserRound } from "lucide-react";

export default function Navigation() {
  return (
    <main className="sticky top-0 flex items-center justify-between p-4 bg-gray-300 shadow-md rounded-md h-[8%]">
      <section className="hidden md:flex items-center gap-2">
        <Search className="w-8 h-8 text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-100 rounded-md w-[100%] py-2 px-2 text-white"
        />
      </section>
      <section>
        <CircleUserRound className="w-10 h-10 text-white" />
      </section>
    </main>
  );
}
