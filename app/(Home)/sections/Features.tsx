import Tourandtravels from "../datastores/productdetails/tours";
import Accomodations from "../datastores/productdetails/accomodations";
import Transportations from "../datastores/productdetails/transportations";
import Img from "next/image";
const dataFeatures = [
  {
    id: 1,
    name: "Tour And Travels",
    img: "/icons/newicons/placeholder.png",
    content: <Tourandtravels />,
  },
  {
    id: 2,
    name: "Accomodations",
    img: "/icons/newicons/hotel.png",
    content: <Accomodations />,
  },
  {
    id: 3,
    name: "Transportations",
    img: "/icons/newicons/car.png",
    content: <Transportations />,
  },
];

export default function Features() {
  return (
    <main className="w-full min-h-screen bg-opacity-80 flex flex-col">
      <section className="w-full flex flex-row items-center justify-between p-20 gap-4">
        {dataFeatures.map((data) => (
          <div
            key={data.id}
            className="w-1/3 flex flex-col items-center justify-center border-2 border-gray-900 p-10"
          >
            <Img src={data.img} width={150} height={150} alt={data.name} />
            <div>{data.content}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
