import { openPopup } from "@/features/popup/popupSlice";
import { AppDispatch } from "@/store/store";
import { LogIn, Power, ChevronRight, Ghost, Gift, LockKeyhole, Ban, Earth, Moon } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  handleLogout : () => void
  dispatch : AppDispatch
  currentUser : {
    id : string | null
    email : string | null
    firstName : string | null
    isLogin : boolean
  }
  setOpen : (value : boolean) => void
}

export default function CollapseProfile(
  {
    handleLogout,
    dispatch,
    currentUser,
    setOpen
  }:Props
) {
  
  const informasiku = [
    {name : 'Halamanku', path : '/accountCenter', icon : <Ghost/>},
    {name : 'Pengaturan Informasi', path : '#', icon : <Gift/>},
    {name : 'Pengaturan Privasi', path : '#', icon : <LockKeyhole/>},
    {name : 'Pengaturan Blocklist', path : '#', icon : <Ban/>}
  ]

  return (
    <div className="absolute bg-primary w-[350px] right-0 top-12 rounded-lg">
      {currentUser.isLogin && <div className="flex flex-col gap-4 p-3">
        <div className="text-left font-bold text-white/90 mb-3">Informasiku</div>
        <div className="flex flex-col gap-5 text-sm font-semibold text-white/60">
        {
          informasiku.map((item) => (
            <Link to={item.path} key={item.name} className="text-left flex justify-between hover:text-blue-500 hover:bg-slate-600 p-1 rounded-md">
              <div className="flex gap-2">
                <div>
                  {item.icon}
                </div>
                <p className="my-auto">
                  {item.name}
                </p>
              </div>
              <ChevronRight/>
            </Link>
          ))
        }
        </div>
      </div>}
      <div className="flex flex-col gap-4 p-3">
        <div className="text-left font-bold text-white/90">Pengaturan sistem</div>
        <div className="flex flex-col gap-3 text-sm font-semibold text-white/60">
          <button className="text-left flex justify-between hover:text-blue-500 hover:bg-slate-600 p-1 rounded-md">
            <div className="flex gap-2">
              <Earth/>
              <p className="my-auto">
                Ganti Bahasa
              </p>
            </div>
            <ChevronRight/>
          </button>
          <button className="text-left flex justify-between hover:text-blue-500 hover:bg-slate-600 p-1 rounded-md">
            <div className="flex  gap-2">
              <Moon/>
              <p className="my-auto">
                Pengaturan Tampilan
              </p>
            </div>
            <ChevronRight/>
          </button>
        </div>
      </div>
      <hr className="hr-color-secondary" />
      <div className="my-4 text-left px-3">
        {currentUser.isLogin ? (
          <button
            onClick={handleLogout}
            className="text-white/60 w-full py-1 px-1 rounded-md text-sm font-bold flex gap-2 hover:text-blue-500 hover:bg-slate-600"
          >
            <Power className="w-4 h-4 my-auto" />
            Log Out
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(openPopup())
              setOpen(false)
              }
            }
            className="w-full py-1 px-1 rounded-md text-sm font-bold flex gap-2 hover:text-blue-500 hover:bg-slate-600"
          >
            <LogIn className="w-4 h-4 my-auto" />
            Masuk
          </button>
        )}
      </div>
    </div>
  );
}
