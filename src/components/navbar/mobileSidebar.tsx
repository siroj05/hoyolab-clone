import { X, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import Avatar from "@/assets/no-profile 1.png";
import MenuItem from "./menuItem/menuItem";
import { currentUser } from "@/features/auth/authSlice";
import { AppDispatch } from "@/store/store";
import { openPopup } from "@/features/popup/popupSlice";
interface Props {
  setSidebarExpand :(value : boolean) => void
  sidebarExpand : boolean
  handleLogout : () => void
  currentUser : currentUser
  dispatch : AppDispatch
}
export default function Sidebar ({sidebarExpand, setSidebarExpand, handleLogout, currentUser, dispatch}:Props) {
  return(
    <>
      {sidebarExpand && <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setSidebarExpand(false)}
        />}
      <div
        className={`flex flex-col h-full w-5/6 fixed top-0 text-white z-50 bg-[#1B1D2A] ${
          sidebarExpand ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-100`}
      >
        <div className="flex-1 pl-4 py-4">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between pr-4">
              <h1 className="font-bold text-2xl text-blue-500">
                HoYoLAB
              </h1>
              <button onClick={()=> setSidebarExpand(false)}><X className="text-white text-white/40"/></button>
            </div>

            {/* login button */}
            <div className="flex flex-col gap-6 pr-4">
              {/* account center link */}
              {currentUser.isLogin ? 
              <button className="py-4 px-2 bg-[#343746] rounded-xl flex justify-between">
                <div className="flex gap-2">
                  <img src={Avatar} width={45} className="rounded-full" alt="" />
                  <p className="my-auto text-lg font-bold">
                    {currentUser.firstName}
                  </p>
                </div>
                <ChevronRight className="my-auto w-8 h-8"/>
              </button>:
              <button onClick={() => {
                setSidebarExpand(false)
                dispatch(openPopup())
                }} className="py-4 px-2 bg-[#343746] rounded-xl flex justify-between">
                <div className="flex gap-2">
                  <img src={Avatar} width={45} className="rounded-full" alt="" />
                  <p className="my-auto text-lg font-bold">
                    Belum Log in
                  </p>
                </div>
                <ChevronRight className="my-auto w-8 h-8"/>
              </button>
              }
            </div>
            
            <hr className="hr-color-secondary my-4"/>
            {/* list menu */}
            <div className="flex flex-col gap-5">
              <Link className="text-blue-500 font-semibold" to={'#'}>Kelompok</Link>
              <MenuItem to={'#'}>Ikuti</MenuItem>
              <MenuItem to={'#'}>Event</MenuItem>
            </div>

             <hr className="hr-color-secondary my-4"/>
             <MenuItem to={'#'}>Pengaturan</MenuItem>
             <hr className="hr-color-secondary my-4"/>
             <MenuItem to={'#'}>Perjanjian Komunitas </MenuItem>
          </div>

        </div>
          {!currentUser.isLogin && <div className="p-4 mb-8">
            <button onClick={handleLogout} className="bg-blue-950 w-full text-xl p-2 border-white/20 border-2 rounded-full text-white/50 font-bold">Log Out</button>
          </div>}
      </div>
    </>
  )
}