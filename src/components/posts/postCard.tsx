import TabPosts from "./tabPosts";
import noPosts from "@/assets/no_post.png";
import { Post } from "@/features/posts/postsApi";
import LoadingIcon from "@/assets/loading.gif"
import NoProfile from "@/assets/no-profile 1.png"
import { formatDate } from "@/config/utils/formatDate";
import PostAction from "./postAction";
import { currentUser } from "@/features/auth/authSlice";
import { Eye, MessageSquareQuote, ThumbsUp } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  posts? : Post[]
  loading : boolean
  error : boolean
  success : boolean
  currentUser : currentUser
}

export const PostCard = ({posts, loading, error, success, currentUser}:Props) => {

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
            <>
              {
                posts.map((item:Post, i:number) =>(
                  <div key={item._id} className="max-[768px]:bg-[#1B1D2A] max-[768px]:rounded-3xl max-[768px]:mb-3">
                    <div className="p-5">
                      <div  className="mb-10">
                        <div className="flex flex-col gap-4">
                          <div className="flex justify-between">
                            {/* <CircleUser className="w-10 h-10"/> */}
                            <div className="flex gap-2">
                              <Link to={`/accountCenter/${item.userId}`}>
                                <img src={NoProfile} width={50} className="rounded-full" alt="" /> 
                              </Link>
                              <div className="flex flex-col">
                                <p className="my-auto font-bold">{item.userInfo?.firstName}</p>
                                <p className="text-xs">{new Date(item?.createdAt??'')?.toLocaleDateString()}</p> 
                              </div>
                            </div>
                              <PostAction 
                                _id={item._id}
                                currentUser={currentUser} 
                                userId={item.userId}
                              />
                          </div>
                          <h1 className="font-bold text-lg">{item.title}</h1>
                          <div dangerouslySetInnerHTML={{ __html: item.content }}/>
                          <img src={item.cover} alt="" width={300} className="object-contain" />
                        </div>
                      </div>
                      {/* comments section */}
                      <div className="text-white/55 flex justify-between">
                        <div className="flex gap-2">
                          <Eye className="w-5 h-5"/>
                          <p className="text-xs my-auto">134 rb</p>
                        </div>
                        <div className="flex gap-6">
                          <Link to={`/post/comments/${item._id}`} className="flex gap-2">
                            <MessageSquareQuote className="w-5 h-5"/>
                            <p className="text-xs my-auto">134 rb</p>
                          </Link>
                          <button className="flex gap-2">
                            <ThumbsUp  className="w-5 h-5"/>
                            <p className="text-xs my-auto">134 rb</p>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="hr-color"/>
                  </div>
                ))
              }
              
            </>
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
