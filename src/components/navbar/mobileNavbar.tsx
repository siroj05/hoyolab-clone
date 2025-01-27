import { Link } from "react-router-dom";
import Avatar from "@/assets/no-profile 1.png";
import { Bell, Search } from "lucide-react";

interface Props {
  setOpen: (value : boolean) => void
  open : boolean
}

export default function MobileNavbar({setOpen, open}:Props) {
  
  return (
    <>
      <div className="flex justify-between p-1">
        <button onClick={() => setOpen(!open)}>
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
