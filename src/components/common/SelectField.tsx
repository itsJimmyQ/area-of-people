export const SelectField = ({
  label,
  name,
  options,
  onChange,
}: SelectFieldProps) => {
  return (
    <div className="flex w-full flex-1 flex-col gap-2 md:w-[120px]">
      <label htmlFor={name}>{label}</label>
      <select
        className="h-[48px] w-full rounded-md border border-gray-300 bg-gray-100 px-3"
        id={name}
        onChange={(e) => onChange(e.target.value)}
        {...{ name }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

type SelectFieldProps = {
  name: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (value: string) => void;
};
