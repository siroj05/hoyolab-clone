import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";
import { Bell, PencilLine } from "lucide-react";
import CollapseProfile from "./collapseProfile";
import Avatar from "@/assets/no-profile 1.png"
import { AppDispatch } from "@/store/store";
import { currentUser } from "@/features/auth/authSlice";

interface Props {
  setOpen : (value : boolean) => void
  open : boolean
  handleLogout : () => void
  dispatch : AppDispatch
  currentUser : currentUser
}

export default function DekstopNavbar (
  {
    setOpen,
    open,
    handleLogout,
    dispatch, 
    currentUser
  }:Props
) {

  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return(
    <>
      <div className="flex gap-6 my-auto">
          <Link to={'/home'} className="font-bold text-2xl text-blue-500">HoYoLAB</Link>
          <Link to={'#'} className="font-semibold my-auto">Beranda</Link>
          <Link to={'#'} className="font-semibold my-auto">Kelompok</Link>
        </div>
        <div className="w-full flex justify-center my-1">
          <InputSearch />
        </div>
        <div className="my-auto flex gap-3">
          <PencilLine className="w-20 my-auto" />
          <Bell className="w-20 my-auto"/>
          <div className="relative" ref={dropdownRef}>
            {/* avatar */}
            <button onClick={() => setOpen(!open)}>
              {/* <CircleUser /> */}
              <img src={Avatar} width={55} className="rounded-full" alt="" />
            </button>

            {/* collapse profile */}
            {open && (
              <CollapseProfile
                handleLogout={handleLogout}
                dispatch={dispatch}
                currentUser={currentUser}
                setOpen={setOpen}
              />
            )}
          </div>
        </div>
    </>
  )
}