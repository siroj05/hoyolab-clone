import { useDispatch, useSelector } from "react-redux";
import SideCard from "./sideCard";
import TabPosts from "./tabPosts";
import noPosts from "@/assets/no_post.png";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { getPosts } from "@/pages/Home/getPostsSlice";
import { CircleUser } from "lucide-react";

export default function Posts() {
  const dispatch = useDispatch<AppDispatch>()
  const {posts, loading, error} = useSelector((state : RootState) => state.getPosts)

  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])
  
  return (
    <div className="flex flex-row gap-5 items-start">
      {/* Main posts */}
      <div
        className={`w-full bg-primary rounded-xl ${
          posts.length > 0 ? "" : "h-[50vh]"
        }`}
      >
        <div>
          <TabPosts />
          {posts.length > 0 ? 
          
          (
            <div>
              {
                posts.map((item:any, i:number) =>(
                  <div key={item._id}>
                    <div className="p-5">
                      <div  className="mb-10">
                        <div className="flex flex-col gap-4">
                          <div className="flex gap-2">
                            <CircleUser className="w-10 h-10"/> 
                            <p className="my-auto">Users1233</p> 
                          </div>
                          <h1 className="font-bold text-lg">{item.title}</h1>
                          <h1 className="">{item.content}</h1>
                          <img src={item.cover} alt="" />
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
      </div>

      {/* Side card */}
      <SideCard/>
    </div>
  );
}
