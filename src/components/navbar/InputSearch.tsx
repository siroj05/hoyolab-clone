import { Search } from "lucide-react";
export default function InputSearch() {
  return (
    <div className="w-full max-w-md relative">
      <input
        className="w-full rounded-full p-2 pl-4 pr-10 text-sm bg-slate-700 border border-transparent focus:border-blue-500 focus:bg-primary focus:outline-none hover:border-blue-500 hover:bg-primary"
        type="text"
        placeholder="Absen"
      />
      <Search className="absolute top-2 right-3 w-5 h-5 text-gray-400" />
    </div>
  );
}
