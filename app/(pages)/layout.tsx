import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootWebpages({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="">{children}</main>;
}
