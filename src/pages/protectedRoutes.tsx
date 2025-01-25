import { openPopup } from "@/features/popup/popupSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes(){
  const isAuth = useSelector((state : RootState) => state.currentUser.isLogin)
  const dispatch = useDispatch<AppDispatch>()
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