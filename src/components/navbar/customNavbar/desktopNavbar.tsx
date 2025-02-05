import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import InputSearch from "../InputSearch";
import { Bell, PencilLine } from "lucide-react";
import { CollapseProfile, Profile } from "../collapseNavbar/collapseProfile";
import { AppDispatch } from "@/store/store";
import { currentUser } from "@/features/auth/authSlice";
import { NewArticleNav } from "../collapseNavbar/collapseNewArticle";

interface Props {
  setOpen: (value: boolean) => void;
  open: boolean;
  handleLogout: () => void;
  dispatch: AppDispatch;
  currentUser: currentUser;
}

export default function DekstopNavbar({
  setOpen,
  open,
  handleLogout,
  dispatch,
  currentUser,
}: Props) {
  

  return (
    <>
      <div className="flex gap-6 my-auto">
        <Link to={"/home"} className="font-bold text-2xl text-blue-500">
          HoYoLAB
        </Link>
        <Link to={"#"} className="font-semibold my-auto">
          Beranda
        </Link>
        <Link to={"#"} className="font-semibold my-auto">
          Kelompok
        </Link>
      </div>
      <div className="w-full flex justify-center my-1">
        <InputSearch />
      </div>
      <div className="my-auto flex gap-3">
        <NewArticleNav/>
        <Bell className="w-20 my-auto" />
        <Profile
          open={open}
          setOpen={setOpen}
          handleLogout={handleLogout}
          dispatch={dispatch}
          currentUser={currentUser}
        />
      </div>
    </>
  );
}
