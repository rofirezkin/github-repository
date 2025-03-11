import { ChangeEvent } from "react";

type InputProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, onChange }: InputProps) {
  return (
    <input
      type="text"
      value={value}
      role="textbox"
      onChange={onChange}
      placeholder="Enter username"
      className="w-full p-2  rounded mb-2 border border-gray-300 bg-gray-200"
    />
  );
}
