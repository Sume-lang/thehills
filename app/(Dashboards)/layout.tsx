import { Metadata } from "next";
import SideBar from "./UI/Navigations/Sidebar";
import Navigation from "./UI/Navigations/navigations";
export const metadata: Metadata = {
  title: "Dashboards" + " | " + "The Hills",
  description: "",
  icons: {
    icon: {
      url: "/threeplus.png",
      type: "image/png",
      sizes: "any",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://the-hills.vercel.app/",
    siteName: "The Hills",
    title: "Dashboards" + " | " + "The Hills",
    description: "",
    images: [
      {
        url: "/threeplus.png",
        width: 800,
        height: 600,
        alt: "Three Plus Hight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dashboards" + " | " + "The Hills",
    description: "",
    images: [
      {
        url: "/threeplus.png",
        width: 800,
        height: 600,
        alt: "Three Plus Hight",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full flex flex-row min-h-screen bg-gray-600 text-white">
      <section className="w-[15%] min-h-screen">
        <SideBar />
      </section>
      <section className="w-[85%] min-h-screen bg-[#F9F9F9]%]">
        <div className="w-full flex flex-row items-center justify-start">
          <Navigation />
        </div>
        <div className="w-full">{children}</div>
      </section>
    </main>
  );
}
