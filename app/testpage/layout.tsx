import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
