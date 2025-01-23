import { useEffect, useState } from "react";
import { onSubmitRegis } from "./submitRegis";
import { InputFormAuth } from "@/components/input";
import { ButtonAuth } from "@/components/button/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { LoaderCircle } from 'lucide-react';
import { registerUser } from "@/features/auth/register/registerAPI";
import { reset } from "@/features/auth/registerSlice";

interface Props {
  setIsRegis : (value : boolean) => void
}

export default function FormRegis({setIsRegis} : Props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const { loading, message, error, success } = useSelector((state : RootState)=> state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const isDisable = () => {
    if ((username.length > 0 && password.length > 0) && (password === matchPassword)) return false;
    if(loading) return true
    return true;
  };
  useEffect(() => {
    if(success) setIsRegis(false)
    dispatch((reset()))
  },[success])

return (
    <form action="" className="flex flex-col gap-4" onSubmit={(e) => dispatch(registerUser(onSubmitRegis(e)))}>
      <InputFormAuth
        id={""}
        htmlFor={""}
        label={""}
        name="firstName"
        setVal={setUsername}
        val={username}
        placeholder="First Name"
      />
      <InputFormAuth
        id={""}
        htmlFor={""}
        label={""}
        name="email"
        setVal={setEmail}
        val={email}
        placeholder="Alamat Email"
      />
      <InputFormAuth
        id={""}
        htmlFor={""}
        label={""}
        name="password"
        setVal={setPassword}
        val={password}
        placeholder="Masukkan Kata Sandi"
        type="password"
      />
      <InputFormAuth
        id={""}
        htmlFor={""}
        label={""}
        setVal={setMatchPassword}
        val={matchPassword}
        placeholder="Silahkan Masukkan Kata Sandi Lagi"
        type="password"
      />
      <ButtonAuth disable={isDisable()} className="mt-6 py-3" type="submit">
        <div
          className={`font-semibold flex justify-center  ${
            isDisable() ? "text-gray-600" : "text-white"
          }`}
        >
          {
            loading?
              <LoaderCircle className="animate-spin"/>:
              <p>
                Daftar
              </p>
          }
        </div>
      </ButtonAuth>
    </form>
  );
}
