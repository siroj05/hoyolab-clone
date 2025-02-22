import { Search } from "lucide-react";
import { FormEvent } from "react";

interface Props {
  onSearch : (e : FormEvent<HTMLFormElement>) => void
}

export default function InputSearch({onSearch}:Props) {
  return (
    <div className="w-full max-w-md relative">
      <form action="" onSubmit={onSearch}>
        <input
          className="w-full rounded-full p-2 pl-4 pr-10 text-sm bg-slate-700 border border-transparent focus:border-blue-500 focus:bg-primary focus:outline-none hover:border-blue-500 hover:bg-primary"
          type="text"
          placeholder="Absen"
          name="search"
        />
        <Search className="absolute top-2 right-3 w-5 h-5 text-gray-400" />
      </form>
    </div>
  );
}
