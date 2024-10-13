import { services } from "../datastores/services";
export default function Services() {
  return (
    <main className="w-full h-screen lg:p-24 p-4 flex-col gap-4 lg:justify-start lg:items-center justify-center items-start">
      <section className="w-full flex flex-col items-center justify-center">
        {" "}
        <h1 className="lg:text-7xl text-2xl font-extrabold text-slate-600 uppercase">
          An Ultimate{" "}
          <span className="text-slate-600 font-extralight">Services.</span>
        </h1>
        <p className="lg:w-1/2 w-full lg:text-3xl font-extralight text-slate-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          est? Deleniti voluptatum in dolorum incidunt? Culpa, accusantium
          reiciendis porro unde modi mollitia quia tempore animi rem quaerat
          soluta, eaque dolores! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Unde cumque voluptas maiores sunt sapiente animi
          mollitia magni, earum illo quo. Architecto nam tempore recusandae rem
          dolorem a officia quisquam praesentium.
        </p>
      </section>
      <section className="flex lg:flex-row flex-col items-start justify-center">
        <div className="lg:p-20 h-screen w-full flex justify-center">
          <div className="w-full flex lg:flex-row flex-col lg:items-start lg:justify-center items-center lg:gap-20 gap-2">
            {services.map((i) => (
              <div key={i.id} className="p-4">
                <span>{i.icon}</span>
                <h1>{i.name}</h1>
                <p>{i.description}</p>
              </div>
            ))}
          </div>
          {}
        </div>
      </section>
    </main>
  );
}
