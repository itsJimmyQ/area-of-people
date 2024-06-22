import * as React from "react";
import { cn } from "service";

export const Button = ({
  children,
  className,
  disabled,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "h-12 rounded-md bg-blue-500 px-4 text-white transition hover:bg-blue-600 md:h-16 md:rounded-lg md:px-10",
        {
          "cursor-not-allowed opacity-60": disabled,
        },
        className,
      )}
      {...{ ...otherProps, disabled }}
    >
      {children}
    </button>
  );
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
