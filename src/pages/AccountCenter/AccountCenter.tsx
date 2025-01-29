import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import MobileAccountCenter from "@/components/accountCenter/mobileAccountCenter";
import { useMediaQuery } from "react-responsive";
import DesktopAccountCenter from "@/components/accountCenter/desktopAccountCenter";
import { useGetPostByUserIdQuery } from "@/features/posts/postsApi";
import { useParams } from "react-router-dom";

export default function AccountCenter() {
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const params = useParams();
  const { data, isLoading, isError, isSuccess, isFetching } =
    useGetPostByUserIdQuery(params.id!);
  return (
    // mobile vers
    (isMobile && (
      <MobileAccountCenter
        currentUser={currentUser}
        posts={data}
        loading={isLoading}
        success={isSuccess}
        error={isError}
      />
    )) ||
    (isDesktop && (
      <DesktopAccountCenter
        currentUser={currentUser}
        posts={data}
        loading={isLoading}
        success={isSuccess}
        error={isError}
      />
    ))
  );
}
