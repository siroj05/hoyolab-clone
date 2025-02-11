import { LoaderCircle, X } from "lucide-react"

interface Props {
  isOpen : boolean
  setIsOpen : (value : boolean) => void
  loadingComment : boolean
  onSubmit : () => void
  setComment : (value : string) => void
  comment? : string
}

export default function PopupComment ({
  isOpen,
  setIsOpen,
  loadingComment,
  onSubmit,
  setComment,
  comment
}:Props) {
  return(
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" />
      )}
      <div
        className={`fixed bottom-0 bg-[#1B1D2A] ${
          isOpen ? "translate-y-0 h-5/6" : "translate-y-full"
        } duration-500 transition-transform w-full rounded-t-2xl z-50`}
      >
        <div className="flex flex-col gap-5 px-3 py-2">
          <div className="flex justify-between  text-xs">
            <button type="button" onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5 text-white/55" />
            </button>
            <h1 className="font-bold">Komentar</h1>
            <div>
              { loadingComment ? 
                <LoaderCircle className="animate-spin w-4 h-4"/>:
                <button onClick={onSubmit} className="text-blue-800 font-semibold">Kirim</button>
              }
            </div>
          </div>
          <textarea
          placeholder="Cepat tulis komentar kalian~"
            className="bg-[#1B1D2A] text-xs placeholder:text-white/60 w-full min-h-[200px] overflow-y-auto resize-none outline-none border-none"
            name="comment"
            id="comment"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
        </div>
      </div>
    </>
  )
}