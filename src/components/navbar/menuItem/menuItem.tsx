import { ChevronRight } from "lucide-react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

interface Props {
  to : string
  children : ReactNode
  className? : string
}

export default function MenuItem (
  {to='#', children, className}:Props
) {
  return(
    <Link to={to} className={`${className} flex justify-between pr-6 font-semibold`}>
      <p className="my-auto">{children}</p>
      <ChevronRight className="my-auto w-8 h-8"/>
    </Link>
  )
}