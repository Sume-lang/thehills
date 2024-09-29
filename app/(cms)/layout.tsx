import { Metadata } from "next";
import Navigations from "./components/nabvar/navigations";
import Sidebar from "./components/nabvar/sidebar";

export const metadata: Metadata = {
  title: "Dashboards",
  description: "Generated by create next app",
};

export default function Dashboards({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex flex-row items-start justify-start">
      <section className="w-[10%] bg-slate-400 shadow-md min-h-screen">
        <Sidebar />
      </section>
      <section className="w-full min-h-screen">
        <Navigations />
        {children}
      </section>
    </main>
  );
}
