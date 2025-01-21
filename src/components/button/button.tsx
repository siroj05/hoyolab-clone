import { ReactNode } from "react"

interface Props {
  children : ReactNode
  type? : 'button' | 'submit'
  disable? : boolean
  className? : string
}

export const Button = ({children, type = "button", disable = false} : Props) => {
  return(
    <button disabled={disable} type={type} className="bg-blue-800/50 py-2 px-20 rounded-full font-bold text-blue-500/90 hover:text-white hover:bg-blue-600">
      {children}
    </button>
  )
}

export const ButtonAuth = ({
  children,
  disable = false,
  className="",
  type="button"
}:Props) => {
  return(
    <button 
      type={type}
      disabled={disable}
      className={`${disable ? "bg-[#323339]" : "bg-[#556AD0]"} p-2 rounded-xl ${className}`}
      >
      {children}
    </button>
  )
}