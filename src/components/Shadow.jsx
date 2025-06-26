import * as React from "react";
import { cn } from "@/lib/utils";

const Shadow = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "border-2 border-black rounded-full shadow-[8px_8px_0_0_rgb(0,0,0)] p-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const Shadowsq = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "border-2 border-black rounded-xl shadow-[8px_8px_0_0_rgb(0,0,0)] p-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Shadow };

export { Shadowsq };