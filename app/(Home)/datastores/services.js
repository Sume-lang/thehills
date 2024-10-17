const services = [
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

const detailsServices = [
  {
    tours: [
      {
        id: 1,
        name: "Hiking Tour",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/services/service1",
      },
      {
        id: 2,
        name: "Water Sports",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/services/service1",
      },
      {
        id: 3,
        name: "Cultural Tour",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/services/service1",
      },
      {
        id: 4,
        name: "Cultural Tour",
        description: "Lorem ipsum dolar sit amet consectetur adipisicing elit.",
        link: "/services/service1",
      },
    ],
    Accomodations: [
      {
        id: 1,
        name: "Accomodations",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/services/service2",
      },
    ],
    Transportations: [
      {
        id: 1,
        name: "Transportations",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        link: "/services/service3",
      },
    ],
  },
];

export { services, detailsServices };
