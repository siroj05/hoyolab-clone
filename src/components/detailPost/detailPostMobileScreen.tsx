import { CustomMobileNavbar } from "../navbar/customNavbar/mobileNavbar";
import LoadingIcon from "@/assets/loading.gif";
import Avatar from "@/assets/no-profile 1.png";
import { Post } from "@/features/posts/postsApi";
import {
  Eye,
  LoaderCircle,
  MessageSquareQuote,
  Plus,
  ThumbsUp,
  X,
} from "lucide-react";
import Comments from "../comments/comments";
import PopupComment from "../comments/popupComment";
import scrollYDetect from "@/config/utils/scrollY";

interface Props {
  isLoading: boolean;
  data?: Post;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
  loadingComment: boolean;
  onSubmit: () => void;
  setComment: (value: string) => void;
  comment?: string;
}

export default function DetailPostMobileScreen({
  isLoading,
  data,
  setIsOpen,
  isOpen,
  loadingComment,
  onSubmit,
  setComment,
  comment,
}: Props) {
  const isScroll = scrollYDetect(80);

  return (
    <>
      <CustomMobileNavbar>Rincian Posting</CustomMobileNavbar>
        <div className={`${isScroll? "translate-y-0" : "-translate-y-full"} duration-300 sticky z-30 top-10 bg-[#1B1D2A]`}>
          <div className="flex relative justify-between mx-5 py-1">
            <div className="flex gap-2">
              <div className="my-auto">
                <img src={Avatar} width={35} className="rounded-full" alt="" />
              </div>
              <div className="flex flex-col">
                <h2>{data?.userInfo?.firstName}</h2>
                <p className="max-sm:text-[10px]">
                  {new Date(data?.createdAt ?? "")?.toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="my-auto">
              <button className="bg-blue-800/50 rounded-full px-2 py-1">
                <Plus className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

      {isLoading ? (
        <div className="w-full rounded-xl flex items-center justify-center h-[500px]">
          <img src={LoadingIcon} alt="" />
        </div>
      ) : (
        <div className="flex flex-col gap-1">
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
                    <p className="text-xs my-auto">{data?.comments?.length}</p>
                  </div>
                  <div className="flex gap-2">
                    <ThumbsUp className="w-5 h-5" />
                    <p className="text-xs my-auto">134 rb</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* comments section */}
          <Comments setIsOpen={setIsOpen} isOpen={isOpen} data={data} />
        </div>
      )}

      {/* popup comment */}
      <PopupComment
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        loadingComment={loadingComment}
        onSubmit={onSubmit}
        setComment={setComment}
        comment={comment}
      />
    </>
  );
}
