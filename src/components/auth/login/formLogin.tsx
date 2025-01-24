import { useState } from "react";
import { onSubmitLogin } from "./submitLogin";
import { InputFormAuth } from "@/components/input";
import { ButtonAuth } from "@/components/button/button";
import { useLoginMutation } from "@/features/auth/authApi";
import { LoaderCircle } from "lucide-react";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";
import { closePopup } from "@/features/popup/popupSlice";

export default function FormLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const [login, {isLoading, isError, isSuccess}] = useLoginMutation()

  const isDisable = () => {
    if (username.length > 0 && password.length > 0) return false;
    else return true;
  };

  if(isSuccess) dispatch(closePopup())
  
  return (
    <form action="" className="flex flex-col gap-4" onSubmit={(e) => (login(onSubmitLogin(e)))}>
      <InputFormAuth
        id={""}
        htmlFor={""}
        label={""}
        name="username"
        setVal={setUsername}
        val={username}
        type="email"
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
          className={`font-semibold flex justify-center  ${
            isDisable() ? "text-gray-600" : "text-white"
          }`}
        >
          {
            isLoading?
              <LoaderCircle className="animate-spin"/>:
              <p>
                Login Akun
              </p>
          }
        </div>
      </ButtonAuth>
    </form>
  );
}
