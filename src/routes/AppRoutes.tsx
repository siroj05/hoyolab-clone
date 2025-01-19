import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../pages/protectedRoutes";
import AccountCenter from "@/pages/AccountCenter/AccountCenter";
import Home from "@/pages/Home/Home";
import MainLayout from "@/layouts/MainLayout";
import NewArticle from "@/pages/NewArticle/NewArticle";

export default function AppRoutes () {
  return(
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Navigate to={'/home'} replace/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/accountCenter' element={<AccountCenter/>}/>
          <Route path='/newArticle' element={<NewArticle/>}/>
        </Route>
      </Route>
    </Routes>
  )
}