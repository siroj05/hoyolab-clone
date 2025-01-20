import { X } from "lucide-react";

interface Props {
  id: string;
  htmlFor: string;
  label: string;
  placeholder?: string;
  setVal: (value: string) => void;
  val: string;
  maxLength? : number
  type? : string
}

export const Input = ({
  id,
  htmlFor,
  label,
  placeholder = "",
  setVal,
  val,
  maxLength = 200
}: Props) => {
  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        onChange={(e) => {
          if (e.target.value.length <= 200) {
            setVal(e.target.value);
          }
        }}
        value={val}
        className="text-sm pr-20 p-5 bg-primary border hr-color-secondary rounded-md border-transparent focus:border-blue-500 focus:outline-none "
        type="text"
        name=""
        placeholder={placeholder}
        id={id}
      />
      <p className="text-gray-400 absolute top-12 mt-1 right-5">
        {val.length}/{maxLength}
      </p>
    </div>
  );
};

export const InputFormLogIn = ({
  id,
  placeholder = "",
  setVal,
  val,
  type = 'text'
}: Props) => {
  return(
    <div className="relative w-full">
      <input
          onChange={(e) => setVal(e.target.value)}
          value={val}
          className="w-full text-sm font-se px-2 py-3 bg-[#212226] border hr-color-secondary rounded-lg border-transparent focus:border-blue-500 focus:outline-none "
          type={type}
          name=""
          placeholder={placeholder}
          id={id}
        />
      { val.length>0&&
        <button onClick={() => setVal('')} className="absolute right-2 p-1 top-4 rounded-full bg-secondary">
          <X className="w-2 h-2"/>
        </button>
      }
    </div>
  )
}
