import newPostIcon from "@/assets/new_post_icon.png"
import { openPopup } from "@/features/popup/popupSlice";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";

export default function MobileScreenNewPost() {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <>
      <button onClick={() => dispatch(openPopup())} className="fixed bottom-10 right-5">
        <img src={newPostIcon} width={80} alt="" />
      </button>
    </>
  );
}
