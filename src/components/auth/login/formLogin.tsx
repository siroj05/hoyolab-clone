import { useState } from "react";

import { onSubmitLogin } from "./submitLogin";
import { InputFormAuth } from "@/components/input";
import { ButtonAuth } from "@/components/button/button";

export default function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const isDisable = () => {
    if (username.length > 0 && password.length > 0) return false;
    else return true;
  };
  
  return (
    <form action="" className="flex flex-col gap-4" onSubmit={onSubmitLogin}>
      <InputFormAuth
        id={""}
        htmlFor={""}
        label={""}
        name="username"
        setVal={setUsername}
        val={username}
        placeholder="Username/Email"
      />
      <InputFormAuth
        id={""}
        htmlFor={""}
        label={""}
        name="password"
        setVal={setPassword}
        val={password}
        placeholder="Kata Sandi"
        type="password"
      />
      <ButtonAuth disable={isDisable()} className="mt-6 py-3" type="submit">
        <div
          className={`font-semibold  ${
            isDisable() ? "text-gray-600" : "text-white"
          }`}
        >
          Login Akun
        </div>
      </ButtonAuth>
    </form>
  );
}
