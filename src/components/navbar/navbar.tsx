import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";
import { Bell, CircleUser, PencilLine, LogIn, Power  } from 'lucide-react';
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { openPopup } from "../../features/popup/popupSlice";
import { useProfileQuery } from "@/features/auth/authApi";
import { setCredential } from "@/features/auth/authSlice";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch<AppDispatch>()
  const {data, isFetching} = useProfileQuery('profile',{
    pollingInterval: 900000, // 15 menit
  })
  const currentUser = useSelector((state : RootState) => state.currentUser)

  useEffect(() => {
    if(data) dispatch(setCredential({
      id : data?.user.id,
      firstName : data?.user.firstName,
      email : data?.user.email
    }))
  },[data, dispatch])

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

  return (
    <div className="border-b hr-color fixed top-1 z-50 w-full bg-primary text-white px-10 p-3 ">
      <div className="flex justify-between gap-2">
        <div className="flex gap-6 my-auto">
          <Link to={'/home'} className="font-bold text-2xl text-blue-500">HoYoLAB</Link>
          <Link to={'#'} className="font-semibold my-auto">Beranda</Link>
          <Link to={'#'} className="font-semibold my-auto">Kelompok</Link>
        </div>
        <div className="w-full flex justify-center">
          <InputSearch />
        </div>
        <div className="my-auto flex gap-10">
          <PencilLine />
          <Bell />
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setOpen(!open)}>
              <CircleUser />
            </button>
            {open && (
              <div className="absolute bg-primary w-[350px] right-0 top-12 rounded-lg">
                <div className="flex flex-col gap-4 p-3">
                  <div className="text-left font-semibold">
                    Pengaturan sistem
                  </div>
                  <div className="flex flex-col gap-3 text-sm font-semibold">
                    <button className="text-left">Ganti Bahasa</button>
                    <button className="text-left">Pengaturan Tampilan</button>
                  </div>
                </div>
                <hr className="hr-color-secondary" />
                <div className="my-2 text-left px-3">
                  {
                    currentUser.id ?
                    <button className="w-full py-1 px-1 rounded-md text-sm font-bold flex gap-2 hover:text-blue-500 hover:bg-slate-600">
                      <Power className="w-4 h-4 my-auto" />
                      Log Out
                    </button>:
                    <button onClick={() => dispatch(openPopup())} className="w-full py-1 px-1 rounded-md text-sm font-bold flex gap-2 hover:text-blue-500 hover:bg-slate-600">
                      <LogIn className="w-4 h-4 my-auto" />
                      Masuk
                    </button> //lanjutin logout
                  }
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
