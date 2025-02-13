import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../pages/protectedRoutes";
import AccountCenter from "@/pages/AccountCenter/AccountCenter";
import Home from "@/pages/Home/Home";
import MainLayout from "@/layouts/MainLayout";
import NewArticle from "@/pages/NewArticle/NewArticle";
import AccountCenterLayout from "@/layouts/AccountCenterLayout";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import DetailPost from "@/pages/DetailPost/DetailPost";
import { useProfileQuery } from "@/features/auth/authApi";
import { useEffect } from "react";
import { setCredential } from "@/features/auth/authSlice";

export default function AppRoutes() {
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const dispatch = useDispatch<AppDispatch>()
  const {data, isFetching} = useProfileQuery('profile',{
    pollingInterval: 900000, // 15 menit
  })
  useEffect(() => {
    if(data) dispatch(setCredential({
      id : data?.user.id,
      firstName : data?.user.firstName,
      email : data?.user.email
    }))
  },[data, dispatch])
  const currentUser = useSelector((state : RootState) => state.currentUser)
  
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to={"/home"} replace />} />
        <Route path="/home" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/newArticle" element={<NewArticle currentUser={currentUser} />} />
          {isDesktop && <Route element={<AccountCenterLayout />}>
            <Route path="/accountCenter/:id" element={<AccountCenter />} />
          </Route>}
          <Route path="/newArticle/:postId/:userId/:status" element={<NewArticle currentUser={currentUser} />} />
          {isDesktop && <Route path="/post/comments/:postId" element={<DetailPost currnetUser={currentUser}/>} />}
        </Route>
      </Route>

      {/* mobile accounCenter */}
      {isMobile && (
        <Route element={<AccountCenterLayout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="/accountCenter/:id" element={<AccountCenter />} />
            <Route path="/post/comments/:postId" element={<DetailPost currnetUser={currentUser}/>} />
          </Route>
        </Route>
      )}
    </Routes>
  );
}
