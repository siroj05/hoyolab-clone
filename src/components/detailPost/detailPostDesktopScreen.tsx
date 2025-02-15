import { Post } from "@/features/posts/postsApi";
import Avatar from "@/assets/no-profile 1.png";
import Card from "../card";
import { Eye, LoaderCircle, MessageSquareQuote, PlusIcon, ThumbsUp } from "lucide-react";
import { Button } from "../button/button";
import { useState } from "react";
import Comments from "../comments/comments";

interface Props {
  data?: Post;
  onSubmit: () => void;
  setComment: (value: string) => void;
  comment: string;
  isLoading: boolean;
  loadingComment: boolean;
}

export default function DetailPostDesktopScreen({ 
  data,
  onSubmit,
  setComment,
  comment,
  isLoading,
  loadingComment,
}: Props) {
  return (
    <div className="flex gap-2 flex-row items-start">
      <div className="w-full min-[769px]:bg-[#1B1D2A] min-[769px]:rounded-xl">
        <div className="sticky z-30 bg-primary rounded-t-xl top-[3rem]">
          <h1 className="p-5 font-bold">Rincian Posting</h1>
          <hr className="hr-color" />
        </div>
        <div className="p-5 flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{data?.title}</h1>
          <div className="flex gap-2">
            <img src={Avatar} width={50} alt="" className="rounded-full" />
            <div className="flex flex-col gap-1">
              <p className="font-bold">{data?.userInfo?.firstName}</p>
              <p className="text-xs text-white/45">
                {new Date(data?.createdAt!).toLocaleDateString()}
              </p>
            </div>
          </div>
          <img src={data?.cover} className="w-full h-[500px] object-cover" />

          {/* content */}
          <div
            className="my-2"
            dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
          />

          {/* comments */}
          <div className="text-white/55 flex justify-between mx-16">
            <div className="flex flex-col gap-2">
              <Eye className="w-8 h-8" />
              <p className="text-xs text-center">134 rb</p>
            </div>
            <div className="flex flex-col gap-2">
              <MessageSquareQuote className="w-8 h-8" />
              <p className="text-xs text-center">{data?.comments?.length}</p>
            </div>
            <div className="flex flex-col gap-2">
              <ThumbsUp className="w-8 h-8" />
              <p className="text-xs text-center">134 rb</p>
            </div>
          </div>

          {/* text area comments */}
          <div className="">
            <textarea onChange={(e) => setComment(e.target.value)} value={comment} placeholder="Cepat tulis komentar kalian~" className="p-2 min-h-20 rounded-xl resize-none w-full bg-[#0C0F1D] outline-none border-none" name="" id=""></textarea>
            <div className="flex justify-end">
                <Button onClick={onSubmit} disable={comment.length==0 || loadingComment} className={`${comment.length==0 && `bg-[#2f3340] text-[#636668]`} flex justify-center`}>
                  {
                    loadingComment? 
                    <LoaderCircle className="animate-spin w-4 h-4"/> :
                    <p>Kirim</p>
                  }
                </Button>
            </div>
          </div>
        </div>
        <hr className="hr-color" />
        
        {/* all comments */}
        <Comments data={data} useButton={false} />
      </div>

      {/*detail sidecard */}
      <Card>
        <div className="w-[300px] flex flex-col gap-2">
          <div>
            <h1 className="font-bold">Informasi Penulis</h1>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img src={Avatar} width={50} alt="" className="rounded-full" />
              <span className="font-bold my-auto">
                {data?.userInfo?.firstName}
              </span>
            </div>
            <div className="my-auto">
              <button className="py-1 px-4 text-xs bg-blue-800/50 rounded-full font-bold text-blue-500/90 hover:text-white hover:bg-blue-600">
                <PlusIcon />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
