
export default function Hero() {
  return (
    <main
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
        <div className="lg:p-20 lg:w-1/2 w-full">
          <h1 className="lg:text-7xl text-2xl font-extrabold text-slate-50 uppercase">
            Welcome to{" "}
            <span className="text-gray-50 font-extralight">The Hills</span>
          </h1>
          <h1 className="lg:w-1/2 text-4xl font-extrabold text-slate-50 uppercase bg-gray-400 bg-opacity-80 p-4 rounded-sm">
            Provide{" "}
            <span className="text-gray-50 font-extralight">
              Unlimited Services
            </span>
          </h1>
          <p className="lg:text-3xl font-extralight text-slate-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            quibusdam aspernatur iusto quia dolorum adipisci sunt officia
            consequuntur exercitationem eos temporibus sit ipsa alias molestias
            tempore eum illo accusamus atque. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam maxime similique praesentium
            ullam itaque laborum, nobis repellat in fugiat, aliquam doloribus.
            Numquam doloremque atque voluptates consectetur, aspernatur
            asperiores ad reiciendis.
          </p>
        </div>
      </section>
    </main>
  );
}
