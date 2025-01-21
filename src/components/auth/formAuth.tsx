import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { PopupDialog } from "../popup/popup";
import Login from "./login/login";
import { useState } from "react";
import Register from "./regis/register";

export default function FormAuth(){
  const isOpenPopup = useSelector((state: RootState) => state.isPopupOpen);
  const [isRegis, setIsRegis] = useState(true)
  return(
    <PopupDialog isOpen={isOpenPopup}>
      {isRegis ?
        <Login setIsRegis={setIsRegis}/> : 
        <Register setIsRegis={setIsRegis}/>
      }
    </PopupDialog>
  )
}