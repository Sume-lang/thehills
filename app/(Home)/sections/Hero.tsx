import { motion } from "framer-motion";
import Img from "next/image";
export default function Hero() {
  return (
    <motion.main
      layout
      layoutId="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="w-full h-screen flex flex-col justify-center items-center filter grayscale hover:grayscale-0 transition duration-500 ease-linear bg-gray-600 bg-opacity-50"
      style={{
        backgroundImage: "url('/Assets/Images/Rinjani-Mointain-3.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="w-full p-4 h-screen bg-gray-400 bg-opacity-50 flex items-center justify-center">
        <div className="lg:p-20 lg:w-1/2 w-full flex flex-col justify-center items-center">
          <h1 className="lg:text-7xl text-2xl font-extrabold text-slate-50 uppercase">
            Welcome to{" "}
            <span className="text-gray-50 font-extralight text-center">
              <img
                src="/threeplus.png"
                alt="Three Plus Hight"
                width={400}
                height={400}
              />
            </span>
          </h1>
          <h1 className="lg:w-full text-center text-4xl font-extrabold text-slate-50 uppercase p-4 rounded-sm">
            Provide{" "}
            <span className="text-gray-50 font-extralight">
              Unlimited Services
            </span>
          </h1>
          <p className="lg:text-3xl text-center font-extralight text-slate-50">
            Sebagai Pengunjung yang menyukai keindahan, Kami menyediakan Layanan
            yang Terbaik sesuai dengan referensi yang diinginkan,dan yang anda
            bayangkan. Orientasi yang kami miliki bukan nya mendapatkan
            keuntungan lebih banyak, namun lebih dari itu. Kami sangat menyadari
            kesedaran kolektif bagi anda yang ingin mengunjungi Lombok untuk
            bersama membangun sumber daya melalui pariwisata yang menjujung
            tinggu keberlanjutan alam, manusia, dan ekonomi.
          </p>
        </div>
      </section>
    </motion.main>
  );
}
