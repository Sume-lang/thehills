import { dataProducts } from "../datastores/productdata";

export default function Services() {
  return (
    <main>
      <section className="w-full flex flex-row items-center justify-between p-20 gap-4">
        {dataProducts.map((data) => (
          <div
            key={data.id}
            className="w-1/3 flex flex-col items-center justify-center  p-10"
          ></div>
        ))}
      </section>
    </main>
  );
}
