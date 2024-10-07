import { motion } from "framer-motion";

const TourandTravels = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="w-full h-auto flex flex-col justify-start items-start gap-4 rounded-md"
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
      className="w-full h-auto bg-slate-500 flex flex-col justify-start items-start gap-4 rounded-lg"
      style={{
        backgroundImage: "url('/Assets/Images/Beach-5.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="w-full bg-slate-400 bg-opacity-70 p-10">
        <h1 className="text-7xl font-extrabold text-slate-50 uppercase">
          Our{" "}
          <span className="text-slate-600 font-extralight">
            Transportations
          </span>
        </h1>
        <p className="font-extralight text-3xl text-slate-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          consequuntur maiores enim reprehenderit itaque maxime hic qui porro at
          corporis, reiciendis repellat saepe incidunt sequi? Maiores animi eius
          voluptate voluptatibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis laudantium incidunt minus possimus aut
          aspernatur consequatur, dolorum qui provident iure facilis itaque
          autem, enim voluptas repellendus accusamus? Eum, cumque accusamus.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5 }}
          className="w-[100%] flex flex-row justify-start items-start gap-10 py-4"
        >
          <div>
            <h1 className="text-5xl font-extrabold uppercase text-slate-50">
              Private{" "}
              <span className="text-slate-800 font-extralight">
                Transportation
              </span>
            </h1>
          </div>
          <div>
            <h1 className="text-5xl font-extrabold uppercase text-slate-50">
              Pick and{" "}
              <span className="text-slate-800 font-extralight">Drop</span>
            </h1>
          </div>
          <div>
            <h1 className="text-5xl font-extrabold uppercase text-slate-50">
              All in One{" "}
              <span className="text-slate-800 font-extralight">Trans</span>
            </h1>
          </div>
          <div>
            <h1 className="text-5xl font-extrabold uppercase text-slate-50">
              Shared With{" "}
              <span className="text-slate-800 font-extralight">Others</span>
            </h1>
          </div>
        </motion.div>
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
