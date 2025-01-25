import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";
import { Bell, PencilLine } from 'lucide-react';
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, resetApiState, RootState } from "@/store/store";
import { useLogoutMutation, useProfileQuery } from "@/features/auth/authApi";
import { resetCredential, setCredential } from "@/features/auth/authSlice";
import CollapseProfile from "./collapseProfile";
import Avatar from "@/assets/no-profile 1.png"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch<AppDispatch>()
  const {data, isFetching} = useProfileQuery('profile',{
    pollingInterval: 900000, // 15 menit
  })
  const currentUser = useSelector((state : RootState) => state.currentUser)
  const [logout, {isLoading : logoutLoading}] = useLogoutMutation()
  // handle logout
  const handleLogout = async () => {
    await logout().unwrap()
    dispatch(resetApiState());
    dispatch(resetCredential());
    localStorage.removeItem('items')
    setOpen(false)
  }
  // set credential
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
    <div className="border-b hr-color fixed top-1 z-50 w-full bg-primary text-white px-10 p-1 ">
      <div className="flex justify-between gap-2">
        <div className="flex gap-6 my-auto">
          <Link to={'/home'} className="font-bold text-2xl text-blue-500">HoYoLAB</Link>
          <Link to={'#'} className="font-semibold my-auto">Beranda</Link>
          <Link to={'#'} className="font-semibold my-auto">Kelompok</Link>
        </div>
        <div className="w-full flex justify-center">
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
      </div>
    </div>
  );
}
