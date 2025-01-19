import { X } from "lucide-react"

interface Props {
  previewFile : string
  setPreviewFile : (value : string) => void
  selectedFile : string
  setSelectedFile : (value : string) => void
  isOpen : boolean
  setIsOpen : (value : boolean) => void
}

export function PopupPreview({
  previewFile, 
  setPreviewFile,
  setSelectedFile,
  selectedFile, 
  isOpen,
  setIsOpen
} : Props) {
  return (
      previewFile && <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
        <div className="bg-secondary w-[700px] p-3 rounded-xl">
          <div className="relative">
            <p className="px-3 font-semibold">Preview</p>
            <button onClick={() => {
              setPreviewFile('')
              setIsOpen(false)
              }} className="absolute right-0 top-0">
              <X className="w-5 h-5"/>
            </button>
          </div>
          <div className="px-7">
            <img
              src={previewFile}
              alt="Preview"
              className="mt-2 max-w-full"
            />
          </div>
          <div className="my-5 text-center">
            <button onClick={() => {
              setIsOpen(false)
              setSelectedFile(previewFile)
              setPreviewFile('')
              }} 
              className="bg-blue-800/50 py-2 px-14 rounded-full font-bold text-blue-500/90 hover:text-white hover:bg-blue-600">
                OK
              </button>
          </div>
        </div>
      </div>
  )
}