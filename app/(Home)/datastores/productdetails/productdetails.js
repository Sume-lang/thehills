import Tourandtravels from "./tours";
import Accomodations from "./accomodations";
import Transportations from "./transportations";

const Productdesction = [
  {
    id: 1,
    name: "Tour And Travels",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "",
    link: "./TourandTravels",
  },
  {
    id: 2,
    name: "Accomodations",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "",
    link: "./Accomodations",
  },
  {
    id: 3,
    name: "Transportations",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    icon: "",
    link: "./Transportations",
  },
];

const dataDetails = [
  {
    id: 1,
    name: "Tour And Travels",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    component: <Tourandtravels />,
  },
  {
    id: 2,
    name: "Accomodations",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    component: <Accomodations />,
  },
  {
    id: 3,
    name: "Transportations",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    component: <Transportations />,
  },
];

export { dataDetails, Productdesction };
