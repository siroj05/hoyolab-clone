import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DesktopScreenAuth from "./desktopScreenAuth";
import { useMediaQuery } from "react-responsive";
import MobileScreenAuth from "./mobileScreenAuth";

export default function FormAuth(){
  const isDesktop= useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isOpenPopup = useSelector((state: RootState) => state.isPopupOpen);
  const [isRegis, setIsRegis] = useState(false)
  useEffect(() => {
    if(!isOpenPopup) setIsRegis(false)
  },[isOpenPopup])
  return(
    isDesktop ?<DesktopScreenAuth
      isOpenPopup={isOpenPopup}
      setIsRegis={setIsRegis}
      isRegis={isRegis}
    /> :
    <MobileScreenAuth
      setIsRegis={setIsRegis}
      isRegis={isRegis}
      isOpenPopup={isOpenPopup}
    />
  )
}