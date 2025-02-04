import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../pages/protectedRoutes";
import AccountCenter from "@/pages/AccountCenter/AccountCenter";
import Home from "@/pages/Home/Home";
import MainLayout from "@/layouts/MainLayout";
import NewArticle from "@/pages/NewArticle/NewArticle";
import AccountCenterLayout from "@/layouts/AccountCenterLayout";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import DetailPost from "@/pages/DetailPost/DetailPost";

export default function AppRoutes() {
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
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
          <Route path="/post/comments/:postId" element={<DetailPost/>} />
        </Route>
      </Route>

      {/* mobile accounCenter */}
      {isMobile && (
        <Route element={<AccountCenterLayout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="/accountCenter/:id" element={<AccountCenter />} />
          </Route>
        </Route>
      )}
    </Routes>
  );
}
