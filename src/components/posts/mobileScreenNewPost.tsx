import newPostIcon from "@/assets/new_post_icon.png"

export default function MobileScreenNewPost() {
  return (
    <>
      <button className="fixed bottom-0 right-5 mb-10">
        <img src={newPostIcon} width={80} alt="" />
      </button>
    </>
  );
}
