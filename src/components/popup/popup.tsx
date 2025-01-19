import { ReactNode } from "react"

interface Props {
  children : ReactNode
}

export const PopupDialog = ({children}:Props) => {
  return(
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      {children}
    </div>
  )
}