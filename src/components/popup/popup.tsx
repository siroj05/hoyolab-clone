import { ReactNode, useEffect } from "react"

interface Props {
  children : ReactNode
  isOpen? : boolean
}

export const PopupDialog = ({children, isOpen=true}:Props) => {
  useEffect(() => {
    if(isOpen){
      document.body.classList.add("overflow-hidden")
    }else{
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  },[isOpen])
  return(
    isOpen && <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      {children}
    </div>
  )
}