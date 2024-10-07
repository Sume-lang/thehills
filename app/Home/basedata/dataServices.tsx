import { Car, School, Earth } from "lucide-react";
import {
  DataTourandTravels,
  DataTransortation,
  DataAccomodations,
} from "./product";
const dataServices = [
  {
    id: 1,
    title: "Transportation",
    secondtitle: "Transportation",
    description: "We offer transportation services to suit your needs.",
    content: <DataTransortation />,
    Img: "/Assets/Images/Beach-1.jpg",
    icon: <Car size={48} strokeWidth={0.5} />,
  },
  {
    id: 2,
    title: "Accomodations",
    secondtitle: "Accomodations",
    description: "We offer accomodations to suit your needs.",
    content: <DataAccomodations />,
    Img: "/Assets/Images/Beach-1.jpg",
    icon: <School size={48} strokeWidth={0.5} />,
  },
  {
    id: 3,
    title: "Tour",
    secondtitle: "Tour",
    description: "We offer tour services to suit your needs.",
    content: <DataTourandTravels />,
    Img: "/Assets/Images/Beach-1.jpg",
    icon: <Earth size={48} strokeWidth={0.5} />,
  },
];
export default dataServices;
