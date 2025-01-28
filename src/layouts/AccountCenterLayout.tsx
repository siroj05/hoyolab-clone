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

      {/* desktop */}
      {
        isDesktop && <UserInfo/>
      }
      <main className="relative max-[768px]:p-4 mt-10 w-[80rem] max-[768px]:w-full max-lg-[50rem] mx-auto">
        <Outlet />
      </main>
    
    </>
  );
}
