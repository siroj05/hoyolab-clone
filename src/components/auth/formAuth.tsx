import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DesktopScreenAuth from "./desktopScreenAuth";
import { useMediaQuery } from "react-responsive";
import MobileScreenAuth from "./mobileScreenAuth";
import { closePopup } from "@/features/popup/popupSlice";
import { useLocation } from "react-router-dom";

export default function FormAuth(){
  const isDesktop= useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isOpenPopup = useSelector((state: RootState) => state.isPopupOpen);
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const dispatch = useDispatch<AppDispatch>();
  const [isRegis, setIsRegis] = useState(false)
  const location = useLocation();
  useEffect(() => {
    if(!isOpenPopup) setIsRegis(false)
  },[isOpenPopup])
  
  useEffect(() => {
    !isDesktop && dispatch(closePopup())
  },[location])

  return(
    !currentUser.isLogin && (isDesktop ?<DesktopScreenAuth
      isOpenPopup={isOpenPopup}
      setIsRegis={setIsRegis}
      isRegis={isRegis}
    /> :
    <MobileScreenAuth
      setIsRegis={setIsRegis}
      isRegis={isRegis}
      isOpenPopup={isOpenPopup}
    />)
  )
}