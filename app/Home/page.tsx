import React from "react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col">
      <section
        className="flex min-h-screen flex-col items-center justify-center filter grayscale hover:grayscale-0 duration-300"
        style={{
          backgroundImage: "url('/Assets/Images/Beach-3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>The Hills</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
          impedit iure. Magnam sint ipsum accusantium eligendi aut magni unde
          velit, ex tempore ab dolorum soluta. Cum neque asperiores dicta iusto.
        </p>
      </section>
    </main>
  );
}
