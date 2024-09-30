"use client";
import { useEffect, useState } from "react";

export default function Testing() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data);
      console.log(data);
    };

    fecthData();
  }, []);

  return (
    <main className="felx flex-col items-center justify-center gap-2 p-20 ">
      <section>
        {posts.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-col items-start justify-center">
            <h1 className="text-3xl font-bold text-slate-900 text-center">
              {item.name}
            </h1>
            <p className="text-2xl font-light text-slate-900 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
