import { IdCardIcon, MessageSquareText } from "lucide-react";
import noData from "@/assets/noData.png";
import Slide from "@/components/accountCenter/slide";
import Sampul from "@/assets/sampul.webp";
import Avatar from "@/assets/no-profile 1.png";
import { currentUser } from "@/features/auth/authSlice";
import { PostCard } from "../posts/postCard";
import { Post } from "@/features/posts/postsApi";
import LoadingIcon from "@/assets/loading.gif";
import { Skeleton } from "../ui/skeleton";
interface Props {
  currentUser: currentUser;
  posts?: Post[] | undefined;
  loading: boolean;
  error: boolean;
  success: boolean;
}

export default function MobileAccountCenter({
  currentUser,
  posts,
  loading,
  success,
  error,
}: Props) {
  return (
    <main className="flex flex-col gap-2">
      <div className="bg-[#1B1D2A] rounded-xl">
        <div className="relative h-[11vh]">
          <img
            src={Sampul}
            alt=""
            className="rounded-t-xl h-[11vh] w-full object-cover object-top"
          />
          <img
            src={Avatar}
            width={75}
            className="rounded-full absolute bottom-0 left-4 transform translate-y-1/2"
            alt=""
          />
        </div>
        <div className="w-full flex justify-end my-2">
          <button className="mx-3 bg-[#1A224D] text-sm text-[#3F5CDD] font-semibold rounded-full py-2 px-6">
            Ubah
          </button>
        </div>
        <div className="px-4">
          {/* profile section */}
          <div className="flex flex-col gap-1">
            {
              loading ?
              <>
                <Skeleton className="w-[150px] h-[20px] bg-slate-500" /> 
                <Skeleton className="w-[200px] h-[10px] bg-slate-500 rounded-sm" /> 
                <Skeleton className="w-[220px] h-[10px] bg-slate-500 rounded-sm" /> 
              </>
              :
              <>
                <h1 className="font-semibold max-[425px]:text-[6vw] text-[25px]">
                  {posts?.[0]?.userInfo?.firstName}
                </h1>
                <div className="flex gap-1">
                  <IdCardIcon className="w-4 h-4 bg-violet-900" />
                  <p className="text-[9.5px]">ID Akun: {posts?.[0]?.userInfo?._id}</p>
                </div>
                <div className="flex gap-1">
                  <MessageSquareText className="w-4 h-4" />
                  <p className="text-[9.5px]">
                    Tanda tangan ini diperlihatkan untuk semua orang~
                  </p>
                </div>
              </>
            }
            {/* user info item */}
            <div className="flex justify-between mx-4 min-[768px]:mx-16 text-[10px] my-4">
              <div className="text-center flex flex-col gap-2">
                <h1>{posts?.length}</h1>
                <p>Postingan</p>
              </div>
              <div className="text-center flex flex-col gap-2">
                <h1>0</h1>
                <p>Ikuti</p>
              </div>
              <div className="text-center flex flex-col gap-2">
                <h1>0</h1>
                <p>Pengikut</p>
              </div>
              <div className="text-center flex flex-col gap-2">
                <h1>0</h1>
                <p>Suka</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* slide section */}
      <Slide currentUser={currentUser} />

      {/* section 2 */}
      <div className="bg-[#1B1D2A] rounded-xl">
        <div className="flex gap-5 px-3 py-4 text-xs font-semibold text-white/60">
          <h1 className="text-white">Postingan</h1>
          <h1>Komentar</h1>
          <h1>Favorit</h1>
          <h1>Topik</h1>
        </div>
      </div>

      {/* Section posts */}

      {!loading && posts && posts?.length > 0 ? (
        <div className="flex flex-row gap-5 items-start">
          <PostCard
            posts={posts}
            loading={loading}
            error={error}
            success={success}
            currentUser={currentUser}
          />
        </div>
      ) : loading ? (
        loading && (
          <div className="w-full bg-[#1B1D2A] rounded-xl flex items-center justify-center h-[500px]">
            <img src={LoadingIcon} alt="" />
          </div>
        )
      ) : (
        <div className="w-full h-[40vh] flex items-center justify-center">
          <div className="flex flex-col">
            <img
              src={noData}
              alt="No data available"
              className="max-w-[150px] brightness-50"
            />
            <h1 className="text-xs text-center text-white/65">
              Kosong sama sekali...
            </h1>
          </div>
        </div>
      )}
    </main>
  );
}
