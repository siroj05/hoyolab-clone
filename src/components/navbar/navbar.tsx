import { Link } from "react-router-dom";
import InputSearch from "./InputSearch";
import { Bell, CircleUser, PencilLine } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="border-b hr-color fixed top-0 z-50 w-full bg-primary text-white px-10 p-3 ">
      <div className="flex justify-between gap-2">
        <div className="flex gap-6 my-auto">
          <Link to={'#'} className="font-bold text-2xl text-blue-500">HoYoLAB</Link>
          <Link to={'#'} className="font-semibold my-auto">Beranda</Link>
          <Link to={'#'} className="font-semibold my-auto">Kelompok</Link>
        </div>
        <div className="w-full flex justify-center">
          <InputSearch/>
        </div>
        <div className="my-auto flex gap-10">
          <PencilLine/>
          <Bell />
          <CircleUser />
        </div>
      </div>
    </div>
  );
}
