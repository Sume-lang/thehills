import { contents, settings } from "../../addatastores/navigationsdata";
const Navigations = () => {
  return (
    <nav className="sticky top-0 z-10 w-full h-[10vh] shadow-lg bg-gray-600 bg-opacity-45 py-10 flex flex-row items-center justify-between p-4 gap-4">
      <section className="lg:w-[15%] md:w-[10%] h-full p-4 gap-4 flex justify-start items-center">
        <h1 className="lg:text-xl md:text-md sm:text-sm text-xl font-bold uppercase">
          Title Navigations
        </h1>
      </section>
      <section className="lg:w-[80%] md:w-[80%] sm:w-[80%] h-full p-4 gap-4 flex justify-center items-center uppercase">
        {contents.map((content) => (
          <div
            key={content.id}
            className="flex flex-row justify-center items-center gap-2 py-4 hover:bg-slate-600 text-gray-50 hover:text-gray-100  rounded-2xl hover:shadow-md duration-300 transition ease-soft-spring p-4 cursor-pointer"
          >
            <h1 className="lg:text-xl md:text-md sm:text-sm font-light">
              {content.title}
            </h1>
          </div>
        ))}
      </section>
      <section className="w-[10%] h-full border border-gray-50 rounded-full p-4 gap-4 flex justify-center items-center">
        <h1 className="lg:text-2xl md:text-md sm:text-sm text-xl font-light">
          Accounts
        </h1>
      </section>
    </nav>
  );
};
export default Navigations;
