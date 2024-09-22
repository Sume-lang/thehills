import { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Home",
  description: "The Hills Copy",
};

export default function RootWebpages({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="">{children}</main>;
}
