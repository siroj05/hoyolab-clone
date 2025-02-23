import { Post } from "@/features/posts/postsApi";
import { ChevronDown } from "lucide-react";
import Avatar from "@/assets/no-profile 1.png";

interface Props {
  setIsOpen? : (value : boolean) => void
  isOpen? : boolean
  data? : Post
  useButton? : boolean
}

export default function Comments({
  setIsOpen,
  data,
  useButton=true
}:Props) {
  return (
    <div className="w-full bg-[#1B1D2A] min-[769px]:rounded-xl px-4 py-4 flex flex-col gap-4">
     {useButton && <button
        className="w-full flex justify-start bg-[#1B1D2A] text-white/60 py-[1vh] rounded-lg border-[1px] border-white/20 text-[3vw] px-2 font-bold"
        onClick={() => setIsOpen!(true)}
      >
        Cepat tulis komentar kalian~
      </button>}
      <div>
        <button className="text-xs text-white/90 font-semibold flex gap-1">
          <p className="my-auto">Semua Komentar</p>{" "}
          <ChevronDown className="w-4 h-4 my-auto" />
        </button>
      </div>
      <hr className="hr-color-secondary" />
      {data?.comments && data?.comments?.length > 0 ? (
        data?.comments.map((comment) => {
          return (
            <div className="flex flex-col gap-2" key={comment.postId}>
              <div className="flex gap-1">
                <img src={Avatar} alt="" className="w-[25px] rounded-full" />
                <h1 className="text-xs my-auto font-bold">
                  {comment?.userInfo?.firstName}
                </h1>
              </div>
              <div className="ml-7 space-y-1 gap-1">
                <div className="bg-slate-600 text-xs rounded-lg font-bold w-full px-2 py-3 break-words inline-block max-w-fit">
                  {comment.comment}
                </div>
                <p className="text-[60%]">{new Date(comment.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h2 className="text-center  text-[3vw] px-2 text-white/55 font-bold">
          Masih belum ada komentar
        </h2>
      )}
    </div>
  );
}
