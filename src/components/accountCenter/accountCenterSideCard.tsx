import Card from "../card";
import Eye from "@/assets/eye.webp"
import Like from "@/assets/like.webp"
import { Button } from "../button/button";
import { currentUser } from "@/features/auth/authSlice";
import { IdCardIcon } from "lucide-react";
import { Post } from "@/features/posts/postsApi";

interface Props {
  currentUser:currentUser
  posts : Post[] | undefined
}

export const AccountCenterSideCard = () => {
  return(
    <Card>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Creator Lab</h1>
        <div className="flex gap-2 text-sm text-white/60">
          <div className="bg-[#1F2336] w-full rounded-lg p-2">
            <div className="flex flex-col gap-1">
              <img src={Eye} width={25} alt="" />
              <p className="text-base">0</p>
              <p>Kunjungan Ke Postingan</p>
            </div>
          </div>
          <div className="bg-[#1F2336] w-full rounded-lg p-2">
            <div className="flex flex-col gap-1">
              <img src={Like} width={25} alt="" />
              <p className="text-base">0</p>
              <p>Kunjungan</p>
            </div>
          </div>
        </div>
        <Button>
          Masuk
        </Button>
      </div>
    </Card>
  )
}

export const AccountCenterSideCardPersonalData= ({currentUser, posts}:Props) => {
  return(
    <Card>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Data Pribadi</h1>
        <div className="flex gap-1">
          <IdCardIcon className="w-4 h-4 bg-violet-900"/>
          <p className="text-[9.5px]">ID Akun: {posts?.[0].userInfo?._id}</p>
        </div>
      </div>
    </Card>
  )
}

// next dev
export const AccountCenterSideCardLogin = () => {
  return(
    <Card>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">
          Hanya butuh beberapa detik untuk log in dan buka bonus lapor kehadiran serta fitur game lainnya!</h1>
        <Button>
          Masuk
        </Button>
      </div>
    </Card>
  )
}