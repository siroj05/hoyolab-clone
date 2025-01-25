import { openPopup } from "@/features/popup/popupSlice";
import { AppDispatch } from "@/store/store";
import { LogIn, Power } from "lucide-react";

interface Props {
  handleLogout : () => void
  dispatch : AppDispatch
  currentUser : {
    id : string | null
    email : string | null
    firstName : string | null
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

  return (
    <div className="absolute bg-primary w-[350px] right-0 top-12 rounded-lg">
      <div className="flex flex-col gap-4 p-3">
        <div className="text-left font-semibold">Pengaturan sistem</div>
        <div className="flex flex-col gap-3 text-sm font-semibold">
          <button className="text-left">Ganti Bahasa</button>
          <button className="text-left">Pengaturan Tampilan</button>
        </div>
      </div>
      <hr className="hr-color-secondary" />
      <div className="my-2 text-left px-3">
        {currentUser.id ? (
          <button
            onClick={handleLogout}
            className="w-full py-1 px-1 rounded-md text-sm font-bold flex gap-2 hover:text-blue-500 hover:bg-slate-600"
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
