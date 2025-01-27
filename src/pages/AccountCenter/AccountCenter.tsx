import Sampul from "@/assets/sampul.webp"
import Avatar from "@/assets/no-profile 1.png"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { IdCardIcon, MessageSquareText } from "lucide-react"
import noData from "@/assets/noData.png"
import Slide from "@/components/accountCenter/slide"
export default function AccountCenter(){
  const currentUser = useSelector((state:RootState) => state.currentUser)
  return(
    // mobile vers
    <main className="flex flex-col gap-2">
      <div className="bg-[#1B1D2A] rounded-xl">
        <div className="relative h-[11vh]">
          <img src={Sampul} alt="" className="rounded-t-xl h-[11vh] w-full object-cover object-top" />
          <img src={Avatar} width={75} className="rounded-full absolute bottom-0 left-4 transform translate-y-1/2" alt="" />
        </div>
        <div className="w-full flex justify-end my-2">
          <button className="mx-3 bg-[#1A224D] text-sm text-[#3F5CDD] font-semibold rounded-full py-2 px-6">Ubah</button>
        </div>
        <div className="px-4">
          {/* profile section */}
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold max-[425px]:text-[6vw] text-[25px]">
              {currentUser.firstName}
            </h1>
            <div className="flex gap-1">
              <IdCardIcon className="w-4 h-4 bg-violet-900"/>
              <p className="text-[9.5px]">ID Akun: {currentUser.id}</p>
            </div>
            <div className="flex gap-1">
              <MessageSquareText className="w-4 h-4"/>
              <p className="text-[9.5px]">Tanda tangan ini diperlihatkan untuk semua orang~</p>
            </div>
            {/* user info item */}
            <div className="flex justify-between mx-4 min-[768px]:mx-16 text-[10px] my-4">
              <div className="text-center flex flex-col gap-2">
                <h1>0</h1>
                <p>Postingan</p>
              </div>
              <div className="text-center flex flex-col gap-2">
                <h1>0</h1>
                <p>Ikuti</p>
              </div>
              <div className="text-center flex flex-col gap-2">
                <h1>0</h1>
                <p>Pengikut</p>
              </div>
              <div className="text-center flex flex-col gap-2">
                <h1>0</h1>
                <p>Suka</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slide section */}
      <Slide currentUser={currentUser}/>

       {/* section 2 */}
      <div className="bg-[#1B1D2A] rounded-xl">
        <div className="flex gap-5 px-3 py-4 text-xs font-semibold text-white/60">
          <h1 className="text-white">Postingan</h1>
          <h1>Komentar</h1>
          <h1>Favorit</h1>
          <h1>Topik</h1>
        </div>
      </div>

      {/* Section posts */}
      <div className="w-full h-[40vh] flex items-center justify-center">
        <div className="flex flex-col">
          <img src={noData} alt="No data available" className="max-w-[150px] brightness-50" />
          <h1 className="text-xs text-center text-white/65">Kosong sama sekali...</h1>
        </div>
      </div>

    </main>
  )
}