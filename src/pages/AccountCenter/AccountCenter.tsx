import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import MobileAccountCenter from "@/components/accountCenter/mobileAccountCenter"
import { useMediaQuery } from "react-responsive"
import DesktopAccountCenter from "@/components/accountCenter/desktopAccountCenter"

export default function AccountCenter(){
  const isDesktop= useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const currentUser = useSelector((state:RootState) => state.currentUser)
  return(
    // mobile vers
    isMobile && (<MobileAccountCenter currentUser={currentUser}/>) ||
    isDesktop && (<DesktopAccountCenter currentUser={currentUser}/>)
  )
}