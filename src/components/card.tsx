import { ReactNode } from "react"

interface Props {
  children : ReactNode
}

export default function Card({children}:Props){
  return(
    <div className="max-[768px]:hidden bg-primary rounded-xl p-4">
      {children}
    </div>
  )
}