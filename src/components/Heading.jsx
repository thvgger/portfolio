import * as React from "react";
import { cn } from "@/lib/utils";

const Heading = ({ children, className, ...props }) => {
  return (
    <>
        <h1 className={cn(
            "line-m md:hidden text-5xl md:text-7xl font-extrabold mb-4 text-white md:text-lime-200 ",
            className
            )} 
            {...props}
        >
          {children}
        </h1>

        <h1 className={cn(
            "line max-md:hidden text-5xl md:text-7xl font-extrabold mb-4 text-white md:text-lime-200",
            className
            )} 
            {...props}
        >
          {children}
        </h1>
    </>
  );
};

const Heading2 = ({ children, className, ...props }) => {
  return (
    <>
        <h2 className={cn(
            "line-m md:hidden text-4xl md:text-6xl font-bold text-center mb-12",
            className
            )} 
            {...props}
        >
          {children}
        </h2>

        <h2 className={cn(
            "line-1 max-md:hidden text-4xl md:text-6xl font-bold text-center mb-12",
            className
            )} 
            {...props}
        >
          {children}
        </h2>
    </>
  );
};



export { Heading };
export { Heading2 };