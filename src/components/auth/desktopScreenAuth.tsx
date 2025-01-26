import { PopupDialog } from "../popup/popup";
import Login from "./login/login";
import Register from "./regis/register";

interface Props {
  isOpenPopup : boolean
  isRegis : boolean
  setIsRegis : (value : boolean) => void
}

export default function DesktopScreenAuth({
  isOpenPopup,
  isRegis,
  setIsRegis
}:Props){
  return(
    <PopupDialog isOpen={isOpenPopup}>
      {isRegis ?
        <Register setIsRegis={setIsRegis}/> :
        <Login setIsRegis={setIsRegis}/>  
      }
    </PopupDialog>
  )
}