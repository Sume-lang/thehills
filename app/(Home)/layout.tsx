import { Metadata } from "next";
import "./module.Home.css";
import Navigations from "./components/navigations/navigations";
import { Car } from "lucide-react";

export const metadata: Metadata = {
  title: "The Hills",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = [
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Discovery",
      link: "/AboutUs",
    },
    {
      name: "Activities",
      link: "/services",
      child: [
        {
          name: "Tour And Travels",
          link: "/TourandTravels",
        },
        {
          name: "Accomodations",
          link: "/Accomodations",
        },
        {
          name: "Transportations",
          link: "/Transportations",
        },
      ],
    },
    {
      name: "Destinations",
      link: "/Blog",
    },
    {
      name: "Contact Us",
      link: "/ContactUs",
    },
  ];
  return (
    <main className="w-full h-screen">
      <Navigations menu={menu} />
      {children}
    </main>
  );
}
