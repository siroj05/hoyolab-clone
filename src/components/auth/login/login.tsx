import hoyoverseLogoLight from "@/assets/hoyoverse-logo-light.png";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { closePopup } from "../../../features/popup/popupSlice";
import FormLogin from "./formLogin";

interface Props {
  setIsRegis: (value : boolean) => void
}

export default function Login({setIsRegis}:Props) {
  
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="bg-[#18191B] p-5 rounded-3xl w-[450px]">
      <div className="flex flex-col text-center justify-center w-full gap-4 my-1">
        <div className="relative">
          <button
            onClick={() => dispatch(closePopup())}
            className="hover:bg-[#212226] absolute right-0 top-1 z-10 rounded-lg p-1"
          >
            <X className="w-7 h-7 text-white" />
          </button>
        </div>
        <div className="w-full flex justify-center relative">
          <img src={hoyoverseLogoLight} alt="" width={190} />
        </div>
        <h1 className="text-2xl font-bold mb-4">Log In</h1>
        <FormLogin />
        <div className="flex justify-between text-sm text-[#556AD0] mb-5">
          <button>Bantuan Masalah</button>
          <button onClick={() => setIsRegis(false)}>Daftar Sekarang</button>
        </div>
      </div>
    </div>
  );
}
