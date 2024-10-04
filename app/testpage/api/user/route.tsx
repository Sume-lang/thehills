import type { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "@/lib/db";

type User = {
  id: number;
  nama: string;
  alamat: Text;
  telepon: string;
  email: string;
  pekerjaan: string;
  tanggal_lahir: Date;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // Fetch data from MySQL database
      const connection = await createConnection();
      const [rows] = await connection.query<any>("SELECT * FROM users");
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Error fetching users from the database" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
