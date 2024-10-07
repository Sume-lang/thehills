
import { motion } from "framer-motion";

const TourandTravels = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      className="w-full h-screen flex flex-col justify-start items-start p-4 gap-4"
    >
      <div>
        <h1>TourandTravels</h1>
      </div>
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
      className="w-full h-screen flex flex-col justify-start items-start p-4 gap-4"
    >
      <div>
        <h1>TourandTravels</h1>
      </div>
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
      className="w-full h-screen flex flex-col justify-start items-start p-4 gap-4"
    >
      <div>
        <h1>Accomodations</h1>
      </div>
    </motion.main>
  );
};
export { TourandTravels, Transportation, Accomodations };
