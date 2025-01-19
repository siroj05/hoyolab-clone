import { useState } from "react";
import { PopupPreview } from "./popupPreview";
import { Pencil, Trash2 } from "lucide-react";
import { convertToBase64 } from "@/config/utils/convertImageToBase64";
import { TooltipFragment } from "../tooltipComponents";

interface Props {
  selectedFile: string;
  setSelectedFile: (value: string) => void;
  setPreviewFile: (value: string) => void;
  previewFile: string;
}

export default function PreviewImage({ 
  selectedFile, 
  setSelectedFile,
  setPreviewFile, 
  previewFile 
}: Props) {

  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      {selectedFile && (
        <div className="mt-5 relative">
          <img
            src={selectedFile}
            alt="Preview"
            className="mt-2 max-w-full rounded-md"
          />
          <button className="absolute right-4 bottom-4 ">
            <div className="flex gap-3">
              <div className="bg-black hover:bg-blue-600 p-2 rounded-full">
                <label htmlFor="image">
                  <TooltipFragment label="Ubah Sampul">
                    <Pencil className="cursor-pointer" />
                  </TooltipFragment>
                </label>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={(e) => convertToBase64(e, setPreviewFile)}
                />
              </div>
              <TooltipFragment label="Hapus Sampul">
                <button onClick={() => setSelectedFile('')} className=" bg-black hover:bg-blue-600 p-2 rounded-full">
                  <Trash2 />
                </button>
              </TooltipFragment>
            </div>
          </button>
        </div>
      )}
      <PopupPreview
        previewFile={previewFile}
        setPreviewFile={setPreviewFile}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
      />
    </>
  );
}
