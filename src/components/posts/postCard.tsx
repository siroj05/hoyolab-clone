import { CircleUser } from "lucide-react";
import TabPosts from "./tabPosts";
import noPosts from "@/assets/no_post.png";
import { Post } from "@/features/posts/getPostsApi";
import LoadingIcon from "@/assets/loading.gif"
import NoProfile from "@/assets/no-profile 1.png"
interface Props {
  posts? : Post[]
  loading : boolean
  error : boolean
  success : boolean
}

export const PostCard = ({posts, loading, error, success}:Props) => {

  if(loading) return (
    <div className="w-full bg-[#1B1D2A] rounded-xl flex items-center justify-center h-[500px]">
      <img src={LoadingIcon} alt="" />
    </div>
  )

  return (
    <div
        className={`w-full min-[769px]:bg-[#1B1D2A] min-[769px]:rounded-xl ${
          posts && posts?.length > 0 ? "" : "h-[50vh]"
        }`}
      >
          <TabPosts />
          {posts && posts.length > 0 ? 
          (
            <div>
              {
                posts.map((item:Post, i:number) =>(
                  <div key={item._id} className="max-[768px]:bg-[#1B1D2A] max-[768px]:rounded-3xl max-[768px]:mb-3">
                    <div className="p-5">
                      <div  className="mb-10">
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-2">
                            {/* <CircleUser className="w-10 h-10"/> */}
                            <img src={NoProfile} width={50} className="rounded-full" alt="" /> 
                            <p className="my-auto font-bold">{item.userInfo?.firstName}</p> 
                          </div>
                          <h1 className="font-bold text-lg">{item.title}</h1>
                          <h1 className="">{item.content}</h1>
                          <img src={item.cover} alt="" width={300} className="object-contain" />
                        </div>
                        
                      </div>
                    </div>
                    <hr className="hr-color"/>
                  </div>
                ))
              }
              
            </div>
          ):
          (
            <div className="flex justify-center items-center h-full">
              <div className="flex flex-col">
                <img src={noPosts} alt="no-posts" className="" />
                <caption className="text-gray-500">
                  Kamu belum pernah memposting konten nih~
                </caption>
              </div>
            </div>
          )
        }
      </div>
  );
};
