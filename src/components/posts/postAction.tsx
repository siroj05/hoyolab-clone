import { useEffect, useRef, useState } from "react";
import { Ban, EllipsisVertical, Pencil, Trash, X } from "lucide-react";
import { useDeletedPostMutation } from "@/features/posts/postsApi";
import { PopupDialog } from "../popup/popup";
import { Button } from "../button/button";
import LoadingIcon from "@/assets/loading.gif";
import { currentUser } from "@/features/auth/authSlice";

interface Props {
  _id: string | undefined;
  currentUser: currentUser;
  userId: string;
}

export default function DropdownMenu({ _id, currentUser, userId }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [confirm, setIsConfirm] = useState(false);
  const [deletedPost, { isLoading, isError, isSuccess }] =
    useDeletedPostMutation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  // handle delete action
  const handleDelete = () => {
    deletedPost(_id);
    setIsConfirm(false);
  };
  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <EllipsisVertical className="h-5 w-5" />
        </button>

        {isOpen && (
          <div className="absolute z-50 right-0 mt-1 w-[300px] rounded-xl bg-primary shadow-[0_1px_15px_rgba(0,0,0,0.7)] ">
            <div className="p-1.5 space-y-1">
              <h1 className="font-bold px-3 mt-2">Lainnya</h1>
              {currentUser?.id == userId ? (
                <>
                  <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-blue-500 hover:bg-slate-600">
                    <Pencil className="h-4 w-4" />
                    Edit Postingan
                  </button>
                  <button
                    onClick={() => setIsConfirm(true)}
                    className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-blue-500 hover:bg-slate-600"
                  >
                    <Trash className="h-4 w-4" />
                    Hapus Postingan
                  </button>
                </>
              ) : (
                <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-blue-500 hover:bg-slate-600">
                  <Ban className="h-4 w-4" />
                  Aku tidak suka konten sejenis ini
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      {/* popup konfirmasi */}
      <PopupDialog isOpen={confirm}>
        <div className="bg-[#18191B] py-6 px-10 rounded-3xl w-[400px]">
          <div>
            <div className="relative">
              <h2 className="text-sm text-center text-white/70 mt-2">
                Postingan tidak akan bisa dipulihkan lagi setelah dihapus. Yakin
                mau menghapusnya?
              </h2>
              <button onClick={() => setIsConfirm(false)}>
                <X className="absolute -top-5 -right-5 w-5 h-5 text-white/70" />
              </button>
            </div>
            <div className="flex justify-center gap-2">
              <Button
                onClick={() => setIsConfirm(false)}
                className="px-6 bg-white/10 text-white/50 hover:bg-white/50"
              >
                Batalkan
              </Button>
              <Button onClick={handleDelete} className="px-8">
                Hapus
              </Button>
            </div>
          </div>
        </div>
      </PopupDialog>

      {isLoading && (
        <PopupDialog>
          <img src={LoadingIcon} alt="" />
        </PopupDialog>
      )}
    </>
  );
}
