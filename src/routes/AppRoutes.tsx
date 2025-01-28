import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../pages/protectedRoutes";
import AccountCenter from "@/pages/AccountCenter/AccountCenter";
import Home from "@/pages/Home/Home";
import MainLayout from "@/layouts/MainLayout";
import NewArticle from "@/pages/NewArticle/NewArticle";
import AccountCenterLayout from "@/layouts/AccountCenterLayout";
import { useMediaQuery } from "react-responsive";

export default function AppRoutes() {
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Navigate to={"/home"} replace />} />
        <Route path="/home" element={<Home />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/newArticle" element={<NewArticle />} />
          {isDesktop && <Route element={<AccountCenterLayout />}>
            <Route path="/accountCenter" element={<AccountCenter />} />
          </Route>}
        </Route>
      </Route>

      {/* mobile accounCenter */}
      {isMobile && (
        <Route element={<AccountCenterLayout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="/accountCenter" element={<AccountCenter />} />
          </Route>
        </Route>
      )}
    </Routes>
  );
}
