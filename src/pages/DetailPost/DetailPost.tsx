import { CustomMobileNavbar } from "@/components/navbar/customNavbar/mobileNavbar";
import { useCreateCommentMutation, useGetDetailPostQuery } from "@/features/posts/postsApi";
import { useParams } from "react-router-dom";
import Avatar from "@/assets/no-profile 1.png";
import {
  ChevronDown,
  Eye,
  LoaderCircle,
  MessageSquareQuote,
  Plus,
  ThumbsUp,
  Triangle,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { currentUser } from "@/features/auth/authSlice";

interface Props {
  currnetUser : currentUser
}

export default function DetailPost({currnetUser}:Props) {
  const { postId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isFetching } = useGetDetailPostQuery(postId);
  const [createComment, {isLoading:lodingComment, isSuccess:commentSuccess}] = useCreateCommentMutation()
  const [comment, setComment] = useState<string>()
  const [error, setError] = useState()
  const onSubmit = () => {
    const request = {
      postId : postId,
      userId : currnetUser.id,
      comment : comment
    }
    if(comment?.length == 0) {

      return
    }
    createComment(request)
  }

  useEffect(() => {
    if(commentSuccess){
      setIsOpen(false)
      setComment('')
    } 
  },[lodingComment])

  return (
    <>
      <CustomMobileNavbar>Rincian Posting</CustomMobileNavbar>
      <div className="flex flex-col my-10 gap-1">
        <div className="w-full bg-[#1B1D2A] min-[769px]:rounded-xl px-4">
          <div className="flex flex-col gap-2">
            {/* title */}
            <h1 className="font-bold text-2xl">{data?.title}</h1>
            {/* image & user info */}
            <div className="flex relative justify-between">
              <img src={Avatar} width={35} className="rounded-full" alt="" />
              <div className="absolute left-10 -top-1">
                <h2>{data?.userInfo?.firstName}</h2>
                <p className="max-sm:text-[10px]">
                  {new Date(data?.createdAt ?? "")?.toLocaleDateString()}
                </p>
              </div>
              <div className="my-auto">
                <button className="bg-blue-800/50 rounded-full px-2 py-1">
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
            <img src={data?.cover} alt="" />
            {/* content */}
            <div className="my-3 flex flex-col gap-4">
              <p className="text-xs">{data?.content}</p>
              <hr className="hr-color-secondary" />

              {/* icon */}
              <div className="text-white/55 flex justify-between">
                <div className="flex gap-2">
                  <Eye className="w-5 h-5" />
                  <p className="text-xs my-auto">134 rb</p>
                </div>
                <div className="flex gap-2">
                  <MessageSquareQuote className="w-5 h-5" />
                  <p className="text-xs my-auto">134 rb</p>
                </div>
                <div className="flex gap-2">
                  <ThumbsUp className="w-5 h-5" />
                  <p className="text-xs my-auto">134 rb</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#1B1D2A] min-[769px]:rounded-xl px-4 py-4 flex flex-col gap-4">
          <button
            className="w-full flex justify-start bg-[#1B1D2A] text-white/60 py-[1vh] rounded-lg border-[1px] border-white/20 text-[3vw] px-2 font-bold"
            onClick={() => setIsOpen(true)}
          >
            Cepat tulis komentar kalian~
          </button>
          <div>
            <button className="text-xs text-white/90 font-semibold flex gap-1">
              <p className="my-auto">Semua Komentar</p>{" "}
              <ChevronDown className="w-4 h-4 my-auto" />
            </button>
          </div>
          <hr className="hr-color-secondary" />
          {data?.comments && data?.comments?.length > 0 ? data?.comments.map((comment) => {
            return(
              <div className="flex flex-col gap-2" key={comment.postId}>
                <div className="flex gap-1">
                  <img src={Avatar} alt="" className="w-[25px] rounded-full" />
                  <h1 className="text-xs my-auto">{comment?.userInfo?.firstName}</h1>
                </div>
                <div className="ml-5">
                  <div className="bg-slate-600 text-xs rounded-lg font-bold w-full p-2">
                    {comment.comment}
                  </div>
                </div>
              </div>
            )
          }):
          <h2 className="text-center  text-[3vw] px-2 text-white/55 font-bold">
            Masih belum ada komentar
          </h2> 
          }
        </div>
      </div>

      {/* comment section */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" />
      )}
      <div
        className={`fixed bottom-0 bg-[#1B1D2A] ${
          isOpen ? "translate-y-0 h-5/6" : "translate-y-full"
        } duration-500 transition-transform w-full rounded-t-2xl z-50`}
      >
        <div className="flex flex-col gap-5 px-3 py-2">
          <div className="flex justify-between  text-xs">
            <button type="button" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-white/55" />
            </button>
            <h1 className="font-bold">Komentar</h1>
            <div>
              { lodingComment ? 
                <LoaderCircle className="animate-spin w-4 h-4"/>:
                <button onClick={onSubmit} className="text-blue-800 font-semibold">Kirim</button>
              }
            </div>
          </div>
          <textarea
          placeholder="Cepat tulis komentar kalian~"
            className="bg-[#1B1D2A] text-xs placeholder:text-white/60 w-full min-h-[200px] overflow-y-auto resize-none outline-none border-none"
            name="comment"
            id="comment"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        </div>
      </div>
    </>
  );
}
