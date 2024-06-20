import * as React from "react";
import { cn } from "service";

export const Button = ({ children, className, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={cn(
        "h-12 rounded-md bg-blue-500 px-4 text-white md:h-16 md:rounded-lg md:px-10",
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
