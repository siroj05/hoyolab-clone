import { openPopup } from "@/features/popup/popupSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes(){
  const dispatch = useDispatch<AppDispatch>()
  const [isAuth, setIsAuth] = useState(() => localStorage.getItem("auth"))
  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuth(localStorage.getItem("auth")); // Perbarui state saat localStorage berubah
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  if (!isAuth) {
    dispatch(openPopup())
    return <Navigate to="/" replace />; // Redirect jika tidak terautentikasi
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}