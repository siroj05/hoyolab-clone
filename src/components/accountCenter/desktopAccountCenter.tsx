
import { currentUser } from "@/features/auth/authSlice";

import { PostCard } from "../posts/postCard";
import SideCard from "../posts/sideCard";
import { AccountCenterSideCard, AccountCenterSideCardPersonalData } from "./accountCenterSideCard";
import UserInfo from "./userInfo";

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
