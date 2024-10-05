import { Metadata } from "next";
import Navigations from "./components/navigations";

export const metadata: Metadata = {
  title: "The Hills: Start Your Chille",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navigations />
      {children}
    </main>
  );
}
