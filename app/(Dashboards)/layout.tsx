import { Metadata } from "next";
import Sidebar from "./components/navi/Sidenav";

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
    <main className="flex h-screen items-start justify-start">
      <section className="w-[10%] md:w-[15%] lg:w-[20%] xl:w-[10%] bg-orange-900 min-h-screen p-2 shadow-md">
        <Sidebar />
      </section>
      {/* <section className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[90%] bg-slate-600 min-h-screen p-2 shadow-md overflow-scroll">
        Right
        {children}
      </section> */}
    </main>
  );
}
