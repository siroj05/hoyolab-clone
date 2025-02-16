import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, resetApiState, RootState } from "@/store/store";
import { useLogoutMutation, useProfileQuery } from "@/features/auth/authApi";
import { resetCredential, setCredential } from "@/features/auth/authSlice";
import { useMediaQuery } from 'react-responsive'
import DekstopNavbar from "./customNavbar/desktopNavbar";
import {MobileNavbar} from "./customNavbar/mobileNavbar";
import Sidebar from "./mobileSidebar";
import scrollYDetect from "@/config/utils/scrollY";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  const dispatch = useDispatch<AppDispatch>()
  
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

  // media query

  const isDesktop= useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  },[location])

  const isScroll = scrollYDetect(245)

  return (
    <>
      <div className={` hr-color fixed top-0 z-40 w-full ${location.pathname.includes('/accountCenter') ? (isScroll ? 'bg-primary border-b duration-150' : '') : 'bg-primary border-b'} text-white min-[769px]:px-10 px-3`}>
        <div className="min-[769px]:flex min-[769px]:justify-between gap-2">
          {
            isDesktop ? <DekstopNavbar
              setOpen={setOpen}
              open={open}
              handleLogout={handleLogout}
              dispatch={dispatch}
              currentUser={currentUser}
            />:
            <MobileNavbar
              setOpen={setOpen}
              open={open}
            />
          }
        </div>
      </div>
      <div>
        {isMobile && <Sidebar
          setSidebarExpand={setOpen}
          sidebarExpand={open}
          handleLogout={handleLogout}
          currentUser={currentUser}
          dispatch={dispatch}
        />}
      </div>
    </>
    
  );
}
