import { desc } from "framer-motion/client";
import {
  ShieldCheck,
  UsersRound,
  CircleDollarSign,
  Sprout,
  Headset,
} from "lucide-react";
const Discovery = [
  {
    id: 1,
    title: "Safety",
    link: "#",
    icons: <ShieldCheck size={48} strokeWidth={1.5} />,
    desc: "We prioritize the safety and comfort of our guests above all else. Our dedicated team is committed to delivering reliable and enjoyable travel experiences.",
  },

  {
    id: 2,
    title: "Affordable",
    link: "#",
    icons: <CircleDollarSign size={48} strokeWidth={1.5} />,
    desc: "Your satisfaction is our priority. That's why we offer affordable prices without compromising on quality",
  },
  {
    id: 3,
    title: "Reliability",
    link: "#",
    icons: <Sprout size={48} strokeWidth={1.5} />,
    desc: "Everyone is different, and that's why we offer a personalized approach to ensure you get the best possible experience. ",
  },
  {
    id: 4,
    title: "Family Friendly",
    link: "#",
    icons: <UsersRound size={48} strokeWidth={1.5} />,
    desc: "Unforgettable memories with family, friends, or loved ones, come experience a different atmosphere and share your adventures together",
  },
  {
    id: 5,
    title: "24/7 Support",
    link: "#",
    icons: <Headset size={48} strokeWidth={1.5} />,
    desc: "Access our services anytime, anywhere. We are ready to provide you with the information you need, 24/7",
  },
];

const dataServices = [
  {
    id: 1,
    title: "Transportations",
    link: "/Home/Transportations",
    icons: "lorem",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas. Voluptates, voluptas. Voluptates, voluptas. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas. Voluptates, voluptas. Voluptates, voluptas.",
  },
  {
    id: 2,
    title: "Accomodations",
    link: "/Home/Accommodations",
    icons: "lorem",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas. Voluptates, voluptas. Voluptates, voluptas. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas. Voluptates, voluptas. Voluptates, voluptas.",
  },
  {
    id: 3,
    title: "Tours",
    link: "/Home/Tour",
    icons: "lorem",
    desc: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas. Voluptates, voluptas. Voluptates, voluptas. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, voluptas. Voluptates, voluptas. Voluptates, voluptas.",
  },
];
export default Discovery;
export { dataServices };
