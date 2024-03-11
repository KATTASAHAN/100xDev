import { ChangeEvent } from "react";

const LabeledInput = ({
  label,
  type,
  placeHolder,
  onchange,
}: {
  label: string;
  type?: string;
  placeHolder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={label || ""} className="font-bold m-1">
        {label}
      </label>
      <input
        type={type || "text"}
        placeholder={placeHolder}
        onChange={onchange}
        className="border p-2 px-3 m-1 rounded"
      />
    </div>
  );
};

export default LabeledInput;
