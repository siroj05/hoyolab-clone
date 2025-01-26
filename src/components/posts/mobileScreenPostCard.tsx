import { X, ChevronRight, PencilLine, Image, Video } from "lucide-react";
import { ButtonPosting } from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { closePopup } from "@/features/popup/popupSlice";

export default function MobileScreenPostCard () {
  const isOpenPopup = useSelector((state: RootState) => state.isPopupOpen);
  const dispatch = useDispatch<AppDispatch>()
  return(
    <>
      {isOpenPopup && <div className="fixed inset-0 bg-black bg-opacity-50  z-40 transition-opacity duration-300" />}
      <div className={`fixed bottom-0 w-full rounded-t-3xl z-50 bg-[#1B1D2A] ${isOpenPopup ? 'translate-y-0 h-1/3' : 'translate-y-full'} transition-transform`}>
        <div className="p-5 flex flex-col gap-3">
          <button onClick={() => dispatch(closePopup())}>
            <X className="text-white/50 mb-4"/>
          </button>
          <div className="flex justify-between">
            <p className="font-semibold">Posting</p>
            <div className="flex gap-2">
              <p className="text-white/70 text-sm my-auto">Ketentuan</p>
              <ChevronRight className="w-4 h-4 my-auto"/>
            </div>
          </div>
          <ButtonPosting label="Konten" link="/newArticle">
            <div className="bg-green-300/80 rounded-full p-2">
              <PencilLine className="text-green-200 w-8 h-8" />
            </div>
          </ButtonPosting>
          <ButtonPosting label="Gambar">
            <div className='bg-blue-500 rounded-full p-2'>
              <Image className='w-8 h-8'/>
            </div>
          </ButtonPosting>
          <ButtonPosting label="Video">
            <div className='bg-orange-300 rounded-full p-2'>
              <Video className='w-8 h-8'/>
            </div>
          </ButtonPosting>
        </div>
      </div>
    </>
  )
}