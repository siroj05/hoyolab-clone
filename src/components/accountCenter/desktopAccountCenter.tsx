
import { currentUser } from "@/features/auth/authSlice";
import { PostCard } from "../posts/postCard";
import { AccountCenterSideCard, AccountCenterSideCardPersonalData } from "./accountCenterSideCard";
import { Post } from "@/features/posts/postsApi";
import UserInfo from "./userInfo";

interface Props {
  currentUser: currentUser;
  posts? : Post[] | undefined
  loading : boolean
  error : boolean
  success : boolean
}

export default function DesktopAccountCenter({ 
  currentUser,
  posts,
  loading,
  error,
  success 
}: Props) {

  return (
    <>
      <UserInfo posts={posts}/>
      {/* main posts user */}
      <div className="relative lg:w-5/6 xl:w-4/6 p-4 mt-10 sm:w-full mx-auto">
        <div className="flex flex-row gap-5 items-start">
          <PostCard
            posts={posts}
            loading={loading}
            error={error}
            success={success}
            currentUser={currentUser}
          />
          <div className="flex flex-col w-[430px] gap-4">
            <AccountCenterSideCard/>
            <AccountCenterSideCardPersonalData posts={posts} currentUser={currentUser}/>
          </div>
        </div>
      </div>
    </>
  );
}
