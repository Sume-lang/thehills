import React, { useState } from "react";

export default function Dropdowns() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Dropdown
      </button>
      <div
        className={`${
          open ? "block" : "hidden"
        } absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
      >
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}



{
  Navitems.map((i) => (
    <div key={i.title} className="flex flex-col">
      <span className="hidden lg:block text-slate-900 font-bold my-4">
        {i.title}
      </span>
      {i.items.map((items) => (
        <Link
          key={items.name}
          href={items.url}
          className="flex items-center justify-center lg:justify-start gap-4 p-2 hover:bg-gray-500 hover:text-slate-100 hover:shadow-md hover:font-bold text-slate-900 duration-300 ease-out rounded-md cursor-pointer"
        >
          <span className="">{items.icons}</span>
          <span className="hidden lg:block">{items.name}</span>
        </Link>
      ))}
    </div>
  ));
}


  <div
    onClick={() => setIsOpen(!isOpen)}
    className="flex items-center gap-4 p-2 hover:bg-gray-500 hover:text-slate-100 hover:shadow-md hover:font-bold text-slate-900 duration-300 ease-out rounded-md cursor-pointer"
  >
    <span className="">{isOpen ? <ChevronDown /> : <ChevronUp />}</span>
    <span className="hidden lg:block">Pages</span>
  </div>;
  {
    isOpen && (
      <ul className="py-2 text-sm text-gray-700">
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-500 hover:text-slate-100 hover:shadow-md hover:font-bold text-slate-900 duration-300 ease-out rounded-md cursor-pointer"
          ></a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 hover:bg-gray-500 hover:text-slate-100 hover:shadow-md hover:font-bold text-slate-900 duration-300 ease-out rounded-md cursor-pointer"
          >
            Edit Post
          </a>
        </li>
      </ul>
    );
  }