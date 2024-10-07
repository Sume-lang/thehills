"use client";
import { useState } from "react";
import Child from "./child";

export default function Main() {
  const [setOpen, setIsOpen] = useState(false);
  const handler = () => setIsOpen(!setOpen);
  return (
    <div className="h-screen">
      <h1 className="p-2" onClick={handler}>
        Button
      </h1>
      {setOpen && (
        <div>
          <Child />
        </div>
      )}
    </div>
  );
}
