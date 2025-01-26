import FormAuth from "@/components/auth/formAuth";
import Navbar from "@/components/navbar/navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div>
        <Navbar />
          <div className="max-[768px]:p-4 mt-20 w-[80rem] max-sm:w-[30rem] max-lg-[50rem] mx-auto">
            <Outlet />
          </div>
      </div>
      <FormAuth/>
    </>
  );
}
