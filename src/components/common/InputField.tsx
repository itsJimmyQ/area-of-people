import * as React from "react";

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, name, ...otherProps }, ref) => {
    return (
      <div className="flex flex-1 flex-col gap-2">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          ref={ref}
          className="h-12 w-full rounded-md border border-gray-300 bg-gray-100 px-3 focus:border-gray-400 md:h-16 md:rounded-lg md:px-4 md:text-lg"
          {...otherProps}
        />
      </div>
    );
  },
);

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};
