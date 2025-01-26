import { ChevronRight, PencilLine } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  type?: "button" | "submit";
  disable?: boolean;
  className?: string;
  label? : string
  link? : string
}

export const Button = ({
  children,
  type = "button",
  disable = false,
}: Props) => {
  return (
    <button
      disabled={disable}
      type={type}
      className="bg-blue-800/50 py-2 px-20 rounded-full font-bold text-blue-500/90 hover:text-white hover:bg-blue-600"
    >
      {children}
    </button>
  );
};

export const ButtonAuth = ({
  children,
  disable = false,
  className = "",
  type = "button",
}: Props) => {
  return (
    <button
      type={type}
      disabled={disable}
      className={`${
        disable ? "bg-[#323339]" : "bg-[#556AD0]"
      } p-2 rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

export const ButtonPosting = ({children,label, link='#'}:Props) => {
  return (
    <Link to={link} className="bg-[#343746] p-4 flex gap-3 rounded-2xl">
      <div className="w-full flex justify-between">
        <div className="flex gap-4">
          {children}
          <p className="my-auto text-xl font-semibold">
            {label}
          </p>
        </div>
        <ChevronRight className="w-5 h-5 my-auto" />
      </div>
    </Link>
  );
};
