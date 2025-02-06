import { Link, useNavigate } from "react-router-dom";
import Avatar from "@/assets/no-profile 1.png";
import { Bell, ChevronLeft, Search } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  setOpen?: (value : boolean) => void
  open? : boolean
  children? : ReactNode
}

export const MobileNavbar = ({setOpen , open}:Props) => {
  
  return (
    <>
      <div className="flex justify-between p-1">
        <button onClick={() => setOpen!(!open)}>
          {/* <CircleUser /> */}
          <img src={Avatar} width={35} className="rounded-full" alt="" />
        </button>
        <Link to={"/home"} className="font-bold text-xl my-auto text-blue-500">
          HoYoLAB
        </Link>
        <div className="flex justify-between gap-5">
          <Search className="my-auto w-5 h-5 aspect-square" />
          <Bell className="my-auto w-5 h-5 aspect-square"/>
        </div>
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

