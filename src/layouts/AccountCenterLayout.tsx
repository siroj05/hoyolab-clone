import { Outlet, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import UserInfo from "@/components/accountCenter/userInfo";

export default function AccountCenterLayout() {
  const navigate = useNavigate()
  const isDesktop= useMediaQuery({ query: '(min-width: 769px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  
  return (
    <>
      {isMobile && <nav className="w-full fixed top-0 z-40 bg-primary p-2">
        <button onClick={() => navigate(-1)} className="flex w-full text-white/60">
          <ChevronLeft/>
          <p className="text-center w-full text-sm my-auto font-semibold ">
            Info Akun
          </p>
        </button>
      </nav>}
      {isDesktop && <UserInfo/>}
      <main className="relative lg:w-5/6 xl:w-4/6 p-4 mt-10 sm:w-full mx-auto">
        <Outlet />
      </main>
    
    </>
  );
}
