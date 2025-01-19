import { convertToBase64 } from "@/config/utils/convertImageToBase64";
import { FileText } from "lucide-react";
import { ChangeEvent, useState } from "react";

interface Props {
  setSelectedFile: (value: string) => void;
}

export default function InputImage({ setSelectedFile }: Props) {
 
  return (
    <div>
      <label
        htmlFor="image"
        className="cursor-pointer inline-block px-4 py-2 bg-secondary text-gray-500 rounded-lg hover:text-blue-600"
      >
        <div className="flex gap-2">
          <FileText />
          Tambahkan Sampul
        </div>
      </label>
      <input
        type="file"
        id="image"
        className="hidden"
        onChange={(e) => convertToBase64(e, setSelectedFile)}
      />
    </div>
  );
}
