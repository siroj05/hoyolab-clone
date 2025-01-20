import { useState } from "react";
import { InputFormLogIn } from "../input";
import { PopupDialog } from "../popup/popup";
import hoyoverseLogoLight from "@/assets/hoyoverse-logo-light.png";
import { ButtonLogin } from "../button/button";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { closePopup } from "../popup/popupSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isOpenPopup = useSelector((state : RootState) => state.isPopupOpen)
  const dispatch = useDispatch<AppDispatch>()
  const isDisable = () => {
    if (username.length > 0 && password.length > 0) return false;
    else return true;
  };

  return (
    <PopupDialog isOpen={isOpenPopup}>
      <div className="bg-[#18191B] p-5 rounded-3xl w-[450px]">
        <div className="flex flex-col text-center justify-center w-full gap-4 my-1">
          <div className="relative">
              <button onClick={() => dispatch(closePopup())} className="hover:bg-[#212226] absolute right-0 top-1 z-10 rounded-lg p-1">
                <X className="w-7 h-7 text-white" />
              </button>
          </div>
          <div className="w-full flex justify-center relative">
            <img src={hoyoverseLogoLight} alt="" width={190} />
          </div>
          <h1 className="text-2xl font-bold mb-4">Log In</h1>
          <InputFormLogIn
            id={""}
            htmlFor={""}
            label={""}
            setVal={setUsername}
            val={username}
            placeholder="Username/Email"
          />
          <InputFormLogIn
            id={""}
            htmlFor={""}
            label={""}
            setVal={setPassword}
            val={password}
            placeholder="Kata Sandi"
            type="password"
          />
          <ButtonLogin disable={isDisable()} className="mt-6">
            <div
              className={`font-semibold  ${
                isDisable() ? "text-gray-600" : "text-white"
              }`}
            >
              Login Akun
            </div>
          </ButtonLogin>
          <div className="flex justify-between text-sm text-[#556AD0] mb-5">
            <button>Bantuan Masalah</button>
            <button>Daftar Sekarang</button>
          </div>
        </div>
      </div>
    </PopupDialog>
  );
}
