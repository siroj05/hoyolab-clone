import { useSelector } from "react-redux";
import SideCard from "./sideCard";
import { RootState } from "@/store/store";
import { PostCard } from "./postCard";
import { useMediaQuery } from "react-responsive";
import MobileScreenNewPost from "./mobileScreenNewPost";
import MobileScreenPostCard from "./mobileScreenPostCard";
import { usePostsQuery } from "@/features/posts/postsApi";
import { useSearchParams } from "react-router-dom";
export default function Posts() {
  const [searchParams] = useSearchParams()
  const params = searchParams.get('keyword') || ""
  console.log(params)
  const {data:posts, isLoading, isError, isSuccess} = usePostsQuery()
  const currentUser = useSelector((state : RootState) => state.currentUser)
  const isDesktop= useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <main>
      <div className="flex flex-row gap-5 items-start">
        {/* Main posts */}
        <PostCard
          loading={isLoading}
          error={isError}
          success={isSuccess}
          posts={posts}
          currentUser={currentUser}
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
    </main>
  );
}
