import { CircleUser } from "lucide-react";
import TabPosts from "./tabPosts";
import noPosts from "@/assets/no_post.png";

interface Props {
  posts : any[]
}

export const PostCard = ({posts}:Props) => {
  return (
    <div
        className={`w-full min-[769px]:bg-[#1B1D2A] min-[769px]:rounded-xl ${
          posts.length > 0 ? "" : "h-[50vh]"
        }`}
      >
          <TabPosts />
          {posts.length > 0 ? 
          (
            <div>
              {
                posts.map((item:any, i:number) =>(
                  <div key={item._id} className="max-[768px]:bg-[#1B1D2A] max-[768px]:rounded-3xl max-[768px]:mb-3">
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
  );
};
