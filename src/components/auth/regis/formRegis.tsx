import { useState } from "react";

import { onSubmitRegis } from "./submitRegis";
import { InputFormAuth } from "@/components/input";
import { ButtonAuth } from "@/components/button/button";

export default function FormRegis() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  
  const isDisable = () => {
    if ((username.length > 0 && password.length > 0) && (password === matchPassword)) return false;
    else return true;
  };
  
  return (
    <form action="" className="flex flex-col gap-4" onSubmit={onSubmitRegis}>
      <InputFormAuth
        id={""}
        htmlFor={""}
        label={""}
        name="email"
        setVal={setUsername}
        val={username}
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
          className={`font-semibold  ${
            isDisable() ? "text-gray-600" : "text-white"
          }`}
        >
          Daftar
        </div>
      </ButtonAuth>
    </form>
  );
}
