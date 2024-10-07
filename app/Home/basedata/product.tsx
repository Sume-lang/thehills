import { motion } from "framer-motion";

const TourandTravels = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="w-full h-auto bg-slate-500 flex flex-col justify-start items-start gap-4 rounded-md"
      style={{
        backgroundImage: "url('/Assets/Images/Beach-4.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="w-full bg-slate-400 bg-opacity-70 p-10">
        <h1 className="text-7xl font-extrabold text-slate-600 uppercase">
          Tour and{" "}
          <span className="text-slate-600 font-extralight">Travels</span>
        </h1>
        <p className="font-extralight text-2xl text-slate-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          consequuntur maiores enim reprehenderit itaque maxime hic qui porro at
          corporis, reiciendis repellat saepe incidunt sequi? Maiores animi eius
          voluptate voluptatibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis laudantium incidunt minus possimus aut
          aspernatur consequatur, dolorum qui provident iure facilis itaque
          autem, enim voluptas repellendus accusamus? Eum, cumque accusamus.
        </p>
      </section>
    </motion.main>
  );
};

const Transportation = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="w-full h-auto bg-slate-500 flex flex-col justify-start items-start gap-4 rounded-md"
      style={{
        backgroundImage: "url('/Assets/Images/Beach-5.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="w-full bg-slate-400 bg-opacity-70 p-10">
        <h1 className="text-7xl font-extrabold text-slate-600 uppercase">
          Our{" "}
          <span className="text-slate-600 font-extralight">
            Transportations
          </span>
        </h1>
        <p className="font-extralight text-2xl text-slate-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          consequuntur maiores enim reprehenderit itaque maxime hic qui porro at
          corporis, reiciendis repellat saepe incidunt sequi? Maiores animi eius
          voluptate voluptatibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis laudantium incidunt minus possimus aut
          aspernatur consequatur, dolorum qui provident iure facilis itaque
          autem, enim voluptas repellendus accusamus? Eum, cumque accusamus.
        </p>
      </section>
    </motion.main>
  );
};

const Accomodations = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="w-full h-auto bg-slate-500 flex flex-col justify-center items-center gap-4 rounded-md"
      style={{
        backgroundImage: "url('/Assets/Images/Beach-2.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="w-full bg-slate-400 bg-opacity-70 p-10">
        <h1 className="text-7xl font-extrabold text-slate-600 uppercase">
          Our{" "}
          <span className="text-slate-600 font-extralight">Accomodations</span>
        </h1>
        <p className="font-extralight text-2xl text-slate-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          consequuntur maiores enim reprehenderit itaque maxime hic qui porro at
          corporis, reiciendis repellat saepe incidunt sequi? Maiores animi eius
          voluptate voluptatibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis laudantium incidunt minus possimus aut
          aspernatur consequatur, dolorum qui provident iure facilis itaque
          autem, enim voluptas repellendus accusamus? Eum, cumque accusamus.
        </p>
      </section>
    </motion.main>
  );
};
export { TourandTravels, Transportation, Accomodations };
