import {
  CirclePlus,
  Car,
  Home,
  Globe,
  FilePenLine,
  User,
  HelpCircle,
  LogOut,
  Settings,
  BookCheck,
  Loader2Icon,
  Currency,
  DoorClosed,
  Signature,
} from "lucide-react";
import { title } from "process";
const Contents = [
  {
    id: 1,
    title: "Add Packages",
    Icons: <CirclePlus size={20} />,
    link: "",
    child: [
      {
        id: 1,
        title: "Tour And Travels",
        Icons: <Globe size={20} />,
        link: "",
      },

      {
        id: 2,
        title: "Accomodations",
        Icons: <Home size={20} />,
        link: "",
      },

      {
        id: 3,
        title: "Transportations",
        Icons: <Car size={20} />,
        link: "",
      },
    ],
  },
  {
    id: 2,
    title: "Edit Packages",
    Icons: <FilePenLine size={20} />,
    link: "",
    child: [
      {
        id: 1,
        title: "Tour And Travels",
        Icons: <Globe size={20} />,
        link: "",
      },

      {
        id: 2,
        title: "Accomodations",
        Icons: <Home size={20} />,
        link: "",
      },

      {
        id: 3,
        title: "Transportations",
        Icons: <Car size={20} />,
        link: "",
      },
    ],
  },
  ,
];

const Reports = [
  { id: 1, title: "Booking", Icons: <BookCheck size={25} />, link: "" },
  { id: 2, title: "Onprogress", Icons: <Loader2Icon size={25} />, link: "" },
  { id: 3, title: "Cancelled", Icons: <DoorClosed size={25} />, link: "" },
  { id: 4, title: "Revenue", Icons: <Currency size={25} />, link: "" },
];

const Vendors = [
  { id: 1, title: "Add Vendors", Icons: <CirclePlus size={20} />, link: "" },
  { id: 2, title: "Edit Vendors", Icons: <FilePenLine size={20} />, link: "" },
  { id: 3, title: "Delete Vendors", Icons: <Signature size={25} />, link: "" },
  { id: 4, title: "View Vendors", Icons: <Signature size={25} />, link: "" },
];

const Users = [
  { id: 1, title: "Add Users", Icons: <Signature size={25} />, link: "" },
  { id: 2, title: "Edit Users", Icons: <Signature size={25} />, link: "" },
  { id: 3, title: "Delete Users", Icons: <Signature size={25} />, link: "" },
  { id: 4, title: "View Users", Icons: <Signature size={25} />, link: "" },
];

const Set = [
  { id: 1, title: "My Accounts", Icons: <User size={25} />, link: "" },
  { id: 2, title: "Help", Icons: <HelpCircle size={25} />, link: "" },
  { id: 3, title: "Log-Out", Icons: <LogOut size={25} />, link: "" },
  { id: 4, title: "Settings", Icons: <Settings size={25} />, link: "" },
];

const DataSidebars = [
  {
    id: 1,
    title: "Service Management",
    icons: "",
    items: [
      {
        id: 1,
        title: "Tour And Travels",
        icons: <Globe size={20} />,
        items: [
          { id: 1, title: "add Packages", icons: "", urls: "" },
          { id: 2, title: "Edit Packages", icons: "", urls: "" },
          { id: 3, title: "Delete Packages", icons: "", urls: "" },
          { id: 4, title: "View Packages", icons: "", urls: "" },
        ],
      },

      {
        id: 2,
        title: "Accomodations",
        icons: <Home size={20} />,
        items: [
          { id: 1, title: "add Packages", icons: "", urls: "" },
          { id: 2, title: "Edit Packages", icons: "", urls: "" },
          { id: 3, title: "Delete Packages", icons: "", urls: "" },
          { id: 4, title: "View Packages", icons: "", urls: "" },
        ],
      },

      {
        id: 3,
        title: "Transportations",
        icons: <Car size={20} />,
        items: [
          { id: 1, title: "add Packages", icons: "", urls: "" },
          { id: 2, title: "Edit Packages", icons: "", urls: "" },
          { id: 3, title: "Delete Packages", icons: "", urls: "" },
          { id: 4, title: "View Packages", icons: "", urls: "" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Reports",
    icons: "",
    items: [{}],
  },
  {
    id: 3,
    title: "Vendors",
    icons: "",
    items: [{}],
  },
];

export { Contents, Set, Reports, Vendors, Users, DataSidebars };
