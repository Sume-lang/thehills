import { TourandTravels, Transportation, Accomodations } from "../product";
import { Car, School, Earth } from "lucide-react";

const ProductDatas = [
  {
    id: 1,
    title: "Transportation",
    icons: <Car size={48} strokeWidth={0.5} />,
    desc: "We offer transportation services to suit your needs.",
    content: <Transportation />,
  },
  {
    id: 2,
    title: "Accomodations",
    icons: <School size={48} strokeWidth={0.5} />,
    desc: "We offer accomodations to suit your needs.",
    content: <Accomodations />,
  },
  {
    id: 3,
    title: "Tour",
    icons: <Earth size={48} strokeWidth={0.5} />,
    desc: "We offer tour services to suit your needs.",
    content: <TourandTravels />,
  },
];
export default ProductDatas;



// {
//   mainProductdata.map((i) => (
//     <motion.main
//       className="w-full h-screen flex flex-row justify-start items-start p-4 gap-4"
//       key={i.id}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 2.5 }}
//     >
//       <motion.section
//         className="w-1/2"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 2.5 }}
//       >
//         <div>
//           <h1 className="text-5xl font-extrabold uppercase text-slate-900">
//             Our{" "}
//             <span className="text-slate-600 font-extralight">Services.</span>
//           </h1>
//           <motion.p
//             initial="initial"
//             animate="animate"
//             className="w-full text-start lg:text-2xl text-xl font-extralight text-slate-900"
//           >
//             We offer a variety of services to suit your needs. From reservations
//             to transportation, we have you covered. Whether you need a ride to
//             explore the city or just want to take some time to relax, we've got
//             you covered. Our services are designed to cater to every traveler's
//             needs, all while prioritizing sustainability and respect for the
//             environment.
//           </motion.p>
//         </div>
//         <motion.div
//           initial="initial"
//           animate="animate"
//           className="w-full flex flex-col justify-start items-start text-start lg:text-4xl text-xl font-extralight text-slate-900 gap-3"
//         >
//           <div className="flex flex-col justify-start items-start gap-3 p-2">
//             {" "}
//             <span className="text-4xl font-extralight">{i.icons}</span>
//             <h1 className="text-4xl font-bold text-slate-500">{i.title}</h1>
//             <p className="text-2xl font-extralight text-slate-500">{i.desc}</p>
//           </div>
//           <div className="flex flex-col">
//             <h1
//               className="text-xl flex flex-row font-extralight text-slate-500 p-3 border border-slate-500 rounded-md hover:cursor-pointer hover:bg-slate-500 hover:text-slate-300 duration-300 ease-linear"
//               onClick={handler}
//               style={{ cursor: "pointer" }}
//               key={i.id}
//             >
//               Check More <ChevronRight />
//             </h1>
//           </div>
//         </motion.div>
//       </motion.section>
//       {setOpen && <motion.section>{i.content}</motion.section>}
//     </motion.main>
//   ));
// }