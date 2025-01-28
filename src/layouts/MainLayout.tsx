import FormAuth from "@/components/auth/formAuth";
import Navbar from "@/components/navbar/navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div
        className={`relative max-[768px]:p-4 ${
          location.pathname.includes("/accountCenter")
            ? ""
            : "mt-20 xl:w-4/6 lg:5/6 w-[90vw]"
        } max-[768px]:w-full mx-auto`}
      >
        <Outlet />
      </div>
      <FormAuth />
    </>
  );
}
