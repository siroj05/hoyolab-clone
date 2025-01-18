import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes(){
  let isAuth = true

  if (!isAuth) {
    return <Navigate to="/" replace />; // Redirect jika tidak terautentikasi
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}