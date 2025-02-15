import { useCreateCommentMutation, useGetDetailPostQuery } from "@/features/posts/postsApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { currentUser } from "@/features/auth/authSlice";
import { useMediaQuery } from "react-responsive";
import DetailPostMobileScreen from "@/components/detailPost/detailPostMobileScreen";
import DetailPostDesktopScreen from "@/components/detailPost/detailPostDesktopScreen";

interface Props {
  currnetUser : currentUser
}

export default function DetailPost({currnetUser}:Props) {
  const isDesktop = useMediaQuery({ query: "(min-width: 769px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const { postId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, isFetching } = useGetDetailPostQuery(postId);
  const [createComment, {isLoading:loadingComment, isSuccess:commentSuccess}] = useCreateCommentMutation()
  const [comment, setComment] = useState<string>()
  const onSubmit = () => {
    const request = {
      postId : postId,
      userId : currnetUser.id,
      comment : comment
    }
    if(comment?.length == 0) {

      return
    }
    createComment(request)
  }

  useEffect(() => {
    if(commentSuccess){
      setIsOpen(false)
      setComment('')
    } 
  },[loadingComment])


  return (
    <>
      {
        isMobile &&
        <DetailPostMobileScreen
          isLoading={isLoading}
          data={data}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          loadingComment={loadingComment}
          onSubmit={onSubmit}
          setComment={setComment}
          comment={comment}
        />
      }
      {
        isDesktop &&
        <DetailPostDesktopScreen 
          data={data}
          setComment={setComment}
          comment={comment??""}
          loadingComment={loadingComment}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      }
    </>
  );
}
