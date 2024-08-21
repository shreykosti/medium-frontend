import { useState } from "react";
type InputProps = {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: any;
};
type passwordInputBoxProps = {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon1: any;
  icon2: any;
};

export function InputLabel({ label, placeholder, onChange, icon }: InputProps) {
  return (
    <div className="flex flex-col bg-zinc-600 w-full p-2">
      <label htmlFor="text" className="ml-2">
        {label}
      </label>
      <input
        id="text"
        type="text"
        title="text"
        placeholder={placeholder}
        onChange={onChange}
        className="appearance-none h-10 p-2 rounded-md mt-2 placeholder: pl-12 border-2 border-slate-400"
      />
      <div className="fixed mt-10 ml-1">{icon}</div>
    </div>
  );
}
export function PasswordInputBox({
  label,
  placeholder,
  onChange,
  icon1,
  icon2,
}: passwordInputBoxProps) {
  const [vissible, setVissible] = useState(false);
  return (
    <div className="flex flex-col bg-zinc-600 w-full p-2">
      <label htmlFor="text" className="ml-2">
        {label}
      </label>
      <input
        id="text"
        type={vissible ? "text" : "password"}
        title="text"
        placeholder={placeholder}
        onChange={onChange}
        className="appearance-none h-10 p-2 rounded-md mt-2 placeholder: pl-12 border-2 border-slate-400"
      />
      <div className="fixed mt-10 ml-1">{icon1}</div>
      <button
        type="button"
        onClick={() => {
          setVissible(!vissible);
        }}
        className="fixed left-96 mt-10"
      >
        {icon2}
      </button>
    </div>
  );
}
