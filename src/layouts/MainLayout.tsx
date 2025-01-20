import Login from "@/components/login/login";
import Navbar from "@/components/navbar/navbar";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div>
        <Navbar />
          <div className="mt-20 w-[80rem] max-sm:w-[30rem] max-lg-[50rem] mx-auto">
            <Outlet />
          </div>
      </div>
      <Login/>
    </>
  );
}
