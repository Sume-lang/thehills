import { Metadata } from "next";
import Sidebar from "./components/navi/Sidenav";
import Navigation from "./components/navi/Navigation";

export const metadata: Metadata = {
  title: "Dashboard - The Hills",
  description: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-screen flex gap-1">
      <section className="w-[10%] md:w-[15%] lg:w-[20%] xl:w-[10%] bg-gray-300  h-screen p-4 shadow-md">
        <Sidebar />
      </section>
      <section className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[90%]  min-h-screen p-2 overflow-scroll">
        <Navigation />
        {children}
      </section>
    </main>
  );
}
