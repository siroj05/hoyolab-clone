import { useDispatch, useSelector } from "react-redux";
import SideCard from "./sideCard";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { getPosts } from "@/features/posts/getPostsSlice";
import { PostCard } from "./postCard";

export default function Posts() {
  const dispatch = useDispatch<AppDispatch>()
  const {posts, loading, error} = useSelector((state : RootState) => state.getPosts)

  useEffect(() => {
    dispatch(getPosts())
  },[dispatch])
  
  return (
    <div className="flex flex-row gap-5 items-start">
      {/* Main posts */}
      <PostCard
        posts={posts}
      />

      {/* Side card */}
      <SideCard/>
    </div>
  );
}
