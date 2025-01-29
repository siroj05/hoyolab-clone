import { Button } from "@/components/button/button";
import { Input } from "@/components/input";
import InputImage from "@/components/newArticle/inputImage";
import PreviewImage from "@/components/newArticle/previewImage";
import MyEditor from "@/components/wysiwyg/simple-wysiwyg/editor";
import { LoaderCircle } from 'lucide-react';
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { currentUser } from "@/features/auth/authSlice";
import { useNewArticeMutation } from "@/features/posts/postsApi";

interface Props {
  currentUser : currentUser
}

export default function NewArticle({currentUser}:Props) {
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState<string>();
  const [previewFile, setPreviewFile] = useState<string>();
  const [title, setTitle] = useState('');
  const [html, setHtml] = useState('');
  const [newArticle, {isLoading, isError, isSuccess}] = useNewArticeMutation()
  const date = new Date().toLocaleDateString()
  const time = new Date().toLocaleTimeString()

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
      content : html,
      createAt : date,
      time : time
    }
    newArticle(request)
  }
  
  isSuccess && navigate('/')

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
            <Button disable={isLoading} type="submit">
              {
                isLoading ? <p className="flex gap-2">
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
