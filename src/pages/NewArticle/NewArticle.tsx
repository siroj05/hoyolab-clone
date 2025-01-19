import { Button } from "@/components/button/button";
import { Input } from "@/components/input";
import InputImage from "@/components/newArticle/inputImage";
import PreviewImage from "@/components/newArticle/previewImage";
import MyEditor from "@/components/wysiwyg/simple-wysiwyg/editor";

import { useState } from "react";

export default function NewArticle() {
  const [selectedFile, setSelectedFile] = useState<string>();
  const [previewFile, setPreviewFile] = useState<string>();
  
  const [title, setTitle] = useState('');

  return (
    <>
      <main className="w-[50rem] rounded-xl mx-auto bg-primary py-5 px-7">
        <h1 className="font-bold text-lg">Posting</h1>
        <hr className="hr-color-secondary my-5" />
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
          <MyEditor/>
        </div>
        <div className="my-10 flex gap-6 justify-center">
          <Button>
            Preview
          </Button>
          <Button>
            Posting
          </Button>
        </div>
      </main>
    </>
  );
}
