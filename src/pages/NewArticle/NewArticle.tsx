import { Button } from "@/components/button/button";
import { Input } from "@/components/input";
import InputImage from "@/components/newArticle/inputImage";
import PreviewImage from "@/components/newArticle/previewImage";
import MyEditor from "@/components/wysiwyg/simple-wysiwyg/editor";
import { AppDispatch, RootState } from "@/store/store";
import { LoaderCircle } from 'lucide-react';
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../features/newArticle/postSlice";
import { redirect, useNavigate } from "react-router-dom";
import { currentUser } from "@/features/auth/authSlice";

interface Props {
  currentUser : currentUser
}

export default function NewArticle({currentUser}:Props) {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { loading, error } = useSelector((state : RootState) => state.posts)
  const [selectedFile, setSelectedFile] = useState<string>();
  const [previewFile, setPreviewFile] = useState<string>();
  const [title, setTitle] = useState('');
  const [html, setHtml] = useState('');
  

  const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const title = formData.get('title') as string
    const html = formData.get('html') as string
    const image = formData.get('image') as string
    let request = {
      cover : image,
      title : title,
      userId : currentUser.id!,
      content : html
    }
    const res = await dispatch(createPost(request))
    if (res.payload.success) {
      navigate('/')
    }
  }

  return (
    <>
      <main className="w-[50rem] max-[768px]:w-full rounded-xl mx-auto md:bg-[#1B1D2A] md:py-5 md:px-5">
        <h1 className="font-bold text-lg">Posting</h1>
        <hr className="hr-color-secondary my-5" />

        {/* form */}
        <form action="" onSubmit={onSubmit}>
          <input type="hidden" name="title" value={title}/>
          <input type="hidden" name="html" value={html}/>
          <input type="hidden" name="image" value={selectedFile}/>
          <div className="flex flex-col gap-5">
            <label htmlFor="image" className="">
              Sampul
            </label>
            {/* upload image */}
            {previewFile || selectedFile ? 
              <PreviewImage 
                selectedFile={selectedFile!} 
                setSelectedFile={setSelectedFile}
                previewFile={previewFile!}
                setPreviewFile={setPreviewFile}
                />
            :
              <InputImage setSelectedFile={setPreviewFile}/>
            }
            <Input
            setVal={setTitle}
            val={title} 
            id="judul" 
            htmlFor="judul" 
            label="Judul" 
            placeholder="Masukan Judul (wajib)"/>
            {/* wysiwyg */}
            <MyEditor
              html={html}
              setHtml={setHtml}
            />
          </div>
          <div className="my-10 flex md:gap-6 gap-1 justify-center">
            <Button>
              Preview
            </Button>
            <Button disable={loading} type="submit">
              {
                loading ? <p className="flex gap-2">
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
