const NavigationData = [
  {
    title: "About Us",
    href: "/",
    children: [
      { title: "Mission", href: "/Tour" },
      { title: "History", href: "/Transportation" },
      { title: "Next Step", href: "/Accomodations" },
    ],
  },
  {
    title: "Discovery",
    href: "/",
    children: [
      { title: "Tour And Travels", href: "/Tour" },
      { title: "Transportation", href: "/Transportation" },
      { title: "Accomodations", href: "/Accomodations" },
    ],
  },
  {
    title: "Activities",
    children: [
      { title: "Items 1", href: "/services/web-development" },
      { title: "Items 2", href: "/services/seo" },
      { title: "Content Writing", href: "/services/content-writing" },
    ],
  },
  {
    title: "Destinations",
    href: "/about",
    children: [
      { title: "Items 1", href: "/services/web-development" },
      { title: "Items 2", href: "/services/seo" },
      { title: "Content Writing", href: "/services/content-writing" },
    ],
  },

  {
    title: "News and Event",
    href: "/blog",
  },
];
export default NavigationData;
