import { Button } from "@/components/button/button";
import { Input } from "@/components/input";
import InputImage from "@/components/newArticle/inputImage";
import PreviewImage from "@/components/newArticle/previewImage";
import MyEditor from "@/components/wysiwyg/simple-wysiwyg/editor";
import { LoaderCircle } from 'lucide-react';
import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { currentUser } from "@/features/auth/authSlice";
import { useGetDetailPostQuery, useNewArticeMutation, useUpdatePostMutation } from "@/features/posts/postsApi";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { clearPost, setPost } from "@/features/posts/postSlice";
import LoadingIcon from "@/assets/loading.gif"

interface Props {
  currentUser : currentUser
}

export default function NewArticle({currentUser}:Props) {
  const {postId, userId, status} = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const [previewFile, setPreviewFile] = useState<string>();
  const post = useSelector((state : RootState) => state.postAction)
  const [newArticle, {isLoading, isError, isSuccess}] = useNewArticeMutation()
  const {data, isLoading:detailLoading, isFetching} = useGetDetailPostQuery(
    postId, 
    {skip : !postId || status !== 'edit'}
  )
  const [updatePost, {isLoading:isUpdate, isError:isUpdateError, isSuccess:isSuccessUpdate}] = useUpdatePostMutation()

  useEffect(() => {
    dispatch(clearPost())
    if(status == 'edit' && data){
      if(userId == currentUser.id){
        dispatch(setPost(data))
      }else{
        navigate('/')
      }
    }
  },[data])

  const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const request = {...post, userId : currentUser.id!}
    if(status !== 'edit'){
      newArticle(request)
    }
    if(status == 'edit'){
      updatePost({body : request, currentUserId : currentUser.id})
    }
  }
  if(isSuccess || isSuccessUpdate){
    dispatch(clearPost())
    navigate('/')
  }

  if(detailLoading){
    return (
      <div className="w-full bg-[#1B1D2A] rounded-xl flex items-center justify-center h-[500px]">
        <img src={LoadingIcon} alt="" />
      </div>
    )
  }

  return (
    <>
      <main className="w-[50rem] max-[768px]:w-full rounded-xl mx-auto md:bg-[#1B1D2A] md:py-5 md:px-5">
        <h1 className="font-bold text-lg">Posting</h1>
        <hr className="hr-color-secondary my-5" />

        {/* form */}
        <form action="" onSubmit={onSubmit}>
          <div className="flex flex-col gap-5">
            <label htmlFor="image" className="">
              Sampul
            </label>
            {/* upload image */}
            {previewFile || post.cover ? 
              <PreviewImage 
                selectedFile={post.cover} 
                setSelectedFile={(file) => dispatch(setPost({...post, cover : file}))}
                previewFile={previewFile!}
                setPreviewFile={setPreviewFile}
                />
            :
              <InputImage setSelectedFile={setPreviewFile}/>
            }
            <Input
            setVal={(val) => dispatch(setPost({...post, title : val}))}
            val={post.title} 
            id="judul" 
            htmlFor="judul" 
            label="Judul" 
            placeholder="Masukan Judul (wajib)"/>
            {/* wysiwyg */}
            <MyEditor
              setHtml={(val) => dispatch(setPost({...post, content : val}))}
              html={post.content}
            />
          </div>
          <div className="my-10 flex md:gap-6 gap-1 justify-center">
            <Button>
              Preview
            </Button>
            <Button disable={isLoading || isUpdate} type="submit">
              {
                (isLoading || isUpdate) ? <p className="flex gap-2">
                  Loading <LoaderCircle className="animate-spin"/>
                </p> :
                <p>Posting</p>
              }
            </Button>
          </div>
        </form>
      </main>
    </>
  );
}
