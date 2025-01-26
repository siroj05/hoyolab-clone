import { X, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import Avatar from "@/assets/no-profile 1.png";
interface Props {
  setSidebarExpand :(value : boolean) => void
  sidebarExpand : boolean
}
export default function Sidebar ({sidebarExpand, setSidebarExpand}:Props) {
  return(
    <>
      {sidebarExpand && <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setSidebarExpand(false)}
        />}
      <div
        className={`flex h-full w-5/6 fixed top-0 text-white z-50 bg-[#1B1D2A] ${
          sidebarExpand ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-100`}
      >
        <div className="flex-1 p-4">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h1 className="font-bold text-2xl text-blue-500">
                HoYoLAB
              </h1>
              <button onClick={()=> setSidebarExpand(false)}><X className="text-white text-white/40"/></button>
            </div>
            <div className="flex flex-col">
              {/* account center link */}
              <Link to={'#'} className="py-4 px-2 bg-[#343746] rounded-xl flex justify-between">
                <div className="flex gap-2">
                  <img src={Avatar} width={45} className="rounded-full" alt="" />
                  <p className="my-auto text-lg font-bold">
                    Belum Log in
                  </p>
                </div>
                <ChevronRight className="my-auto w-8 h-8"/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}