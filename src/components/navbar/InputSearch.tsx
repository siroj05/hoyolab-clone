import { Search } from "lucide-react";
import { FormEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
export default function InputSearch() {
  const navigate = useNavigate()
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate('/')
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const value = formData.get('search') as string
    navigate(`/home?keyword=${encodeURIComponent(value)}`);
  }

  return (
    <div className="w-full max-w-md relative">
      <form action="" onSubmit={onSubmit}>
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
