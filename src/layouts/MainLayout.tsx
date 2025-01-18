import Navbar from "@/components/navbar/navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
        <div className="mt-20 w-[80rem] max-sm:w-[30rem] max-lg-[50rem] mx-auto">
          <Outlet />
        </div>
    </div>
  );
}
