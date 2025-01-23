import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { PopupDialog } from "../popup/popup";
import Login from "./login/login";
import { useEffect, useState } from "react";
import Register from "./regis/register";

export default function FormAuth(){
  const isOpenPopup = useSelector((state: RootState) => state.isPopupOpen);
  const [isRegis, setIsRegis] = useState(false)
  useEffect(() => {
    if(!isOpenPopup) setIsRegis(false)
  },[isOpenPopup])
  return(
    <PopupDialog isOpen={isOpenPopup}>
      {isRegis ?
        <Register setIsRegis={setIsRegis}/> :
        <Login setIsRegis={setIsRegis}/>  
      }
    </PopupDialog>
  )
}