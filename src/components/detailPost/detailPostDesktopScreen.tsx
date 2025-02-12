import { Post } from "@/features/posts/postsApi"

interface Props {
  data? : Post
}

export default function DetailPostDesktopScreen({
  data
}:Props){
  return(
    <div className="w-full min-[769px]:bg-[#1B1D2A] min-[769px]:rounded-xl">
      <div className="sticky z-30 bg-primary rounded-t-xl top-[3rem]">
        <h1 className="p-5 font-bold">
          Rincian Posting
        </h1>
        <hr className="hr-color" />
      </div>
      <div className="p-5 flex flex-col">
        <div>
          {data?.title}
        </div>
      </div>
    </div>
  )
}