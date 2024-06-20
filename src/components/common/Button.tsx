import * as React from "react";
import { cn } from "service";

export const Button = ({ children, className, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={cn(
        "h-12 rounded-lg bg-blue-500 text-base text-white md:h-16 md:px-10",
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
