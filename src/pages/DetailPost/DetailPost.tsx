import { CustomMobileNavbar } from "@/components/navbar/customNavbar/mobileNavbar";
import { useGetDetailPostQuery } from "@/features/posts/postsApi";
import { useParams } from "react-router-dom";
import Avatar from "@/assets/no-profile 1.png";
import { Eye, MessageSquareQuote, Plus, ThumbsUp } from "lucide-react";

export default function DetailPost() {
  const { postId } = useParams();
  const { data, isLoading, isFetching } = useGetDetailPostQuery(postId);
  console.log(isLoading);
  console.log(data);
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
        <div className="w-full bg-[#1B1D2A] min-[769px]:rounded-xl px-4">
          disini ntar komen
        </div>
      </div>
    </>
  );
}
