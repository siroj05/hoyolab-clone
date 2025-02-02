import { Backpack, ChevronDown, MessageSquareMore } from "lucide-react";
import SampulDesktop from "@/assets/sampul-desktop.webp";
import Avatar from "@/assets/no-profile 1.png";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import scrollYDetect from "@/config/utils/scrollY";
import { Post } from "@/features/posts/postsApi";

interface Props {
  posts : Post[] | undefined
}

export default function UserInfo({posts}:Props) {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const isScroll = scrollYDetect()
  const userInfo = [
    {name : "Postingan", count : posts?.length?? 0},
    {name : "Ikuti", count : 0},
    {name : "Pengikut", count : 0},
    {name : "Suka", count : 0}
  ]
  return (
    <>
      <img
        src={SampulDesktop}
        alt=""
        className=" w-full inset-0 h-[300px] object-none object-top"
      />

      {/* section 2 */}
      <div className="lg:w-5/6 xl:w-4/6 mx-auto">
        {/* avatar */}
        <div className="absolute -translate-y-3/4 mx-1">
          <div className="flex">
            <div className="flex gap-5 relative">
              <div className="right-0 -translate-y-1/2 mx-28">
                <h1 className="my-auto text-2xl">{posts?.[0]?.userInfo?.firstName}</h1>
                <div className="flex gap-1 text-white/55">
                  <MessageSquareMore className="w-5 h-5" />
                  <p className="text-xs">
                    Tanda tangan ini diperlihatkan untuk semua orang~
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* edit button */}
        <div className="flex justify-end mx-5">
          <div className="absolute -translate-y-12">
            <div className="flex gap-6">
              <button className="bg-[#020208] rounded-full py-1 px-2">
                <Backpack className="w-4 h-4" />
              </button>
              <button className="bg-[#020208] px-5 py-1 rounded-full font-bold flex justify-between gap-2">
                <p>Ubah</p>
                <ChevronDown />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* fix this section */}
      {/* info user */}
      <div className="p-3 bg-[#1B1D2A] h-[55px] sticky top-12 z-50 border-b-[1px] hr-color">
        <div className="lg:w-5/6 xl:w-4/6 mx-auto">
          <div className="flex gap-4">
            {/* besar -my-[80px] kecil -my-[10px]*/}
            <div className={`${isScroll ? '-my-[10px]' : '-my-[80px]'} duration-200`}>
              {/* ketika di scroll mengecil jadi w-[40px] w-[100px]*/}
              <img src={Avatar} className={`rounded-full ${isScroll? 'w-[40px]' : 'w-[100px]'} duration-200`} alt="" />
            </div>
            {
              userInfo.map((item, i:number) => (
                <>
                  <div key={item.name}>
                    <span>{item.count}</span> <span className="text-white/70">{item.name}</span>
                  </div>
                  {i < 3 && <span className="text-white/35">/</span>}
                </>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
