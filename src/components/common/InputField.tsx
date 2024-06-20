import * as React from "react";

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ ...otherProps }, ref) => {
    return (
      <div className="flex flex-1 flex-col gap-2">
        <label htmlFor="package_name">Search by name</label>
        <input
          ref={ref}
          className="h-12 w-full rounded-lg border border-gray-300 bg-gray-100 px-3 focus:border-gray-400 md:h-16 md:px-4"
          {...otherProps}
        />
      </div>
    );
  },
);

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement>;
