import { useEffect, useState } from "react";
import { onSubmitRegis } from "./submitRegis";
import { InputFormAuth } from "@/components/input";
import { ButtonAuth } from "@/components/button/button";
import { LoaderCircle } from 'lucide-react';
import { useRegisterMutation } from "@/features/auth/authApi";

interface Props {
  setIsRegis : (value : boolean) => void
}

export default function FormRegis({setIsRegis} : Props) {
  // state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [register, {isLoading, isError, isSuccess}] = useRegisterMutation()

  const isDisable = () => {
    if ((username.length > 0 && password.length > 0) && (password === matchPassword)) return false;
    if(isLoading) return true
    return true;
  };
  
  useEffect(() => {
    if(isSuccess) setIsRegis(false)
  },[isSuccess])

return (
    <form action="" className="flex flex-col gap-4" onSubmit={(e) => (register(onSubmitRegis(e)))}>
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
            isLoading?
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
