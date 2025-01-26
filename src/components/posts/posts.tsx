import { useDispatch, useSelector } from "react-redux";
import SideCard from "./sideCard";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { getPosts } from "@/features/posts/getPostsSlice";
import { PostCard } from "./postCard";
import { useMediaQuery } from "react-responsive";
import MobileScreenNewPost from "./mobileScreenNewPost";
import MobileScreenPostCard from "./mobileScreenPostCard";
export default function Posts() {
  const dispatch = useDispatch<AppDispatch>()
  const {posts, loading, error} = useSelector((state : RootState) => state.getPosts)
  const currentUser = useSelector((state : RootState) => state.currentUser)
  const isDesktop= useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])
  
  return (
    <>
      <div className="flex flex-row gap-5 items-start">
        {/* Main posts */}
        <PostCard
          posts={posts}
        />

        {/* Side card */}
        {
          isDesktop ? 
            <SideCard/>
            :
            <MobileScreenNewPost/>
        }
      </div>
      {
        isMobile && currentUser.isLogin &&
        <div className="absolute right-0 left-0">
          <MobileScreenPostCard/>
        </div>
      }
    </>
  );
}
