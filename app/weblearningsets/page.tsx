"use client";
import { useState, useEffect } from "react";
import { createConnection } from "@/lib/db";

type Props = {
  id: number;
  nama: string;
  age: number;
};
export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      const connection = await createConnection();
      // Fetch data from MySQL database
      const [rows] = await connection.query<any>("SELECT * FROM users");
      console.log(rows);
      setData(rows);
    };
    fecthData();
  }, []);

  return (
    <div>
      {data.map((Props) => (
        <div key={Props.id}>{Props.name}</div>
      ))}
    </div>
  );
}
