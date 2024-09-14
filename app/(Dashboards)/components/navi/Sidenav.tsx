"use client";
const Navitems = [
  {
    title: "Web Management",
  },
  {
    title: "Revenues",
  },
  {
    title: "Booking",
  },
  {
    title: "Data Service",
  },
  {
    title: "Settings",
  },
];

function Sidebar() {
  return (
    <main className="text-sm">
      <section className="text-slate-200 font-bold">
        <h1 className="hidden lg:block text-slate-200 font-extrabold text-3xl">
          LOGO <br />
        </h1>
      </section>
      <section>
        {Navitems.map((i) => (
          <div key={i.title} className="flex flex-col">
            <span className="hidden lg:block text-slate-900 font-bold my-10">
              {i.title}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Sidebar;
