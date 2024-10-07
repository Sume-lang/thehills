import { TourandTravels, Transportation, Accomodations } from "../product";
import { Car, School, Earth } from "lucide-react";

const ProductDatas = [
  {
    id: 1,
    title: "Transportation",
    icons: <Car size={48} strokeWidth={1} />,
    desc: "We offer transportation services to suit your needs.",
    content: <Transportation />,
  },
  {
    id: 2,
    title: "Accomodations",
    icons: <School size={48} strokeWidth={1} />,
    desc: "We offer accomodations to suit your needs.",
    content: <Accomodations />,
  },
  {
    id: 3,
    title: "Tour",
    icons: <Earth size={48} strokeWidth={1} />,
    desc: "We offer tour services to suit your needs.",
    content: <TourandTravels />,
  },
];
export default ProductDatas;
