import FormAuth from "@/components/auth/formAuth";
import Navbar from "@/components/navbar/navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation()
  return (
    <>
      <div>
        <Navbar />
          <div className={`relative max-[768px]:p-4 ${location.pathname.includes('/accountCenter') ? "" : "mt-20 w-[80rem]"} max-[768px]:w-full max-lg-[50rem] mx-auto`}>
            <Outlet />
          </div>
      </div>
      <FormAuth/>
    </>
  );
}
