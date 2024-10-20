import Img from "next/image";
import {
  Contents,
  Set,
  Reports,
  Vendors,
} from "../../addatastores/sidebardata";
export default function Sidebar() {
  return (
    <main className="w-full h-full border-r-1 border-gray-50 p-4 flex flex-col items-center justify-between gap-4 bg-gray-900 bg-opacity-50">
      <section className="w-full h-[10%] p-10 flex flex-col items-center justify-center">
        <Img
          src="/threepluswhite.png"
          width={250}
          height={250}
          alt="Three Plus Hight"
        />
      </section>
      <section className="w-full h-[80%] p-10 flex flex-col items-start justify-start">
        <div>
          <h1 className="lg:text-2xl md:text-md sm:text-sm text-xl font-bold ">
            Content Management
          </h1>
        </div>
        <div>
          {Contents.map((I: any) => (
            <div
              key={I.id}
              className="w-full flex flex-col items-start justify-start"
            >
              <div className="w-full h-auto p-4 flex flex-row items-center justify-start gap-10">
                <span>{I.Icons}</span>
                <h1 className="lg:text-xl md:text-md sm:text-sm text-xl font-light ">
                  {I.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-auto flex flex-row items-center justify-start gap-4 pt-10">
          <h1 className="lg:text-2xl md:text-md sm:text-sm text-xl font-bold ">
            Reports
          </h1>
        </div>
        {Reports.map((I: any) => (
          <div
            key={I.id}
            className="w-full flex flex-col items-start justify-start"
          >
            <div className="w-full h-auto p-4 flex flex-row items-center justify-start gap-10">
              <span>{I.Icons}</span>
              <h1 className="lg:text-xl md:text-md sm:text-sm text-xl font-light ">
                {I.title}
              </h1>
            </div>
          </div>
        ))}
        <div className="w-full h-auto flex flex-row items-center justify-start gap-4 pt-10">
          <h1 className="lg:text-2xl md:text-md sm:text-sm text-xl font-bold ">
            Vendors
          </h1>
        </div>
        {Vendors.map((I: any) => (
          <div
            key={I.id}
            className="w-full flex flex-col items-start justify-start"
          >
            <div className="w-full h-auto p-4 flex flex-row items-center justify-start gap-10">
              <span>{I.Icons}</span>
              <h1 className="lg:text-xl md:text-md sm:text-sm text-xl font-light ">
                {I.title}
              </h1>
            </div>
          </div>
        ))}
      </section>
      <section></section>

      <section className="w-full h-auto p-4 flex flex-col items-start justify-start">
        <div>
          <h1 className="lg:text-2xl md:text-md sm:text-sm text-xl font-bold ">
            Accounts
          </h1>
        </div>
        {Set.map((I: any) => (
          <div
            key={I.id}
            className="w-full flex flex-col items-start justify-start"
          >
            <div className="w-full h-auto p-4 flex flex-row items-center justify-start gap-10">
              <span>{I.Icons}</span>
              <h1 className="lg:text-xl md:text-md sm:text-sm text-xl font-light ">
                {I.title}
              </h1>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
