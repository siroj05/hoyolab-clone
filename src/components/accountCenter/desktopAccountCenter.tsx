
import { currentUser } from "@/features/auth/authSlice";

import { PostCard } from "../posts/postCard";
import SideCard from "../posts/sideCard";
import { AccountCenterSideCard, AccountCenterSideCardPersonalData } from "./accountCenterSideCard";
import UserInfo from "./userInfo";
import { Post } from "@/features/posts/postsApi";

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
      
      {/* main posts user */}
        <div className="flex flex-row gap-5 items-start">
          <PostCard
            posts={posts}
            loading={loading}
            error={error}
            success={success}
          />
          <div className="flex flex-col w-[430px] gap-4">
            <AccountCenterSideCard/>
            <AccountCenterSideCardPersonalData currentUser={currentUser}/>
          </div>
        </div>
      {/* <div className="mt-10 lg:w-5/6 xl:w-4/6 mx-auto">
      </div> */}
         
    </>
  );
}
