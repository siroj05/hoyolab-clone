import { Link, useNavigate } from "react-router-dom";
import Avatar from "@/assets/no-profile 1.png";
import { Bell, ChevronLeft, Search } from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";

interface Props {
  setOpen?: (value : boolean) => void
  open? : boolean
  children? : ReactNode
  onSearch : (e : FormEvent<HTMLFormElement>) => void
}

export const MobileNavbar = ({setOpen , open, onSearch}:Props) => {
  const [openSearch, setOpenSearch] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <div className="flex justify-between p-1">
        {
          openSearch ? 
          <>
            <form action="" className="w-full mx-1" onSubmit={onSearch}>
              <input className="w-full text-xs py-1 px-3 font-semibold rounded-full bg-slate-700 border border-transparent focus:border-blue-500 focus:bg-primary focus:outline-none hover:border-blue-500 hover:bg-primary" placeholder="Telusuri konten yang menarik" type="text" name="search"/>
            </form>
            <button className="text-blue-600 text-xs font-semibold" onClick={() => {
              navigate('/')
              setOpenSearch(false)
            }}>Batalkan</button>
          </>
          :
          <>
            <button onClick={() => setOpen!(!open)}>
              {/* <CircleUser /> */}
              <img src={Avatar} width={35} className="rounded-full" alt="" />
            </button>
            <Link to={"/home"} className="font-bold text-xl my-auto text-blue-500">
              HoYoLAB
            </Link>
            <div className="flex justify-between gap-5">
              <button className="my-auto" onClick={() => setOpenSearch(true)}>
                <Search className="w-5 h-5 aspect-square" />
              </button>
              <Bell className="my-auto w-5 h-5 aspect-square"/>
            </div>
          </>
        }
      </div>
      
    </>
  );
}

export const CustomMobileNavbar = ({children}:Props) => {
  const navigate = useNavigate()
  return (
    <nav className="w-full fixed top-0 z-40 bg-primary p-2">
        <button onClick={() => navigate(-1)} className="flex w-full text-white/60">
          <ChevronLeft/>
          <p className="text-center w-full text-sm my-auto font-semibold ">
            {children}
          </p>
        </button>
      </nav>
  )
}

