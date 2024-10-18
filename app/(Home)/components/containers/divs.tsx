import * as React from "react";
//mains
const Mains = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <main
    ref={ref}
    className={
      "px-4 p-16 sm:px-6 lg:px-8 filter grayscale hover:grayscale-0 transition duration-500 ease-linear bg-gray-400" +
      className
    }
    {...props}
  />
));
Mains.displayName = "Mains";
//Sections
const Sections = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={" px-4 p-16 sm:px-6 lg:px-8 bg-gray-400" + className}
    {...props}
  />
));
Mains.displayName = "Sections";

//Divs
const Divs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={"px-4 p-16 sm:px-6 lg:px-8" + className}
    {...props}
  />
));
Mains.displayName = "Divs";

//H1
const H1 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <h1
    ref={ref}
    className={
      "font-Extrabold lg:text-7xl text-5xl text-gray-800 font-sans " + className
    }
    {...props}
  />
));
Mains.displayName = "H1";

//P
const P = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={"font-extralight lg:text-3xl text-2xl font-sans " + className}
    {...props}
  />
));
Mains.displayName = "P";

export { Mains, Sections, Divs, P, H1 };
