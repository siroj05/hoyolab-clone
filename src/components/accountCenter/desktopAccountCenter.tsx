
import { currentUser } from "@/features/auth/authSlice";

import { PostCard } from "../posts/postCard";
import SideCard from "../posts/sideCard";

interface Props {
  currentUser: currentUser;
}

export default function DesktopAccountCenter({ currentUser }: Props) {
  const posts : any = []
  return (
    <>
      {/* main posts user */}
      <div className="flex flex-row gap-5 items-start">
        <PostCard
          posts={posts}
        />
        <SideCard/>
      </div>
    </>
  );
}
