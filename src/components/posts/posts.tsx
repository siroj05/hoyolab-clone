import SideCard from "./sideCard";
import TabPosts from "./tabPosts";
import noPosts from "@/assets/no_post.png";

export default function Posts() {
  let isNoPosts = true;
  return (
    <div className="flex flex-row gap-5 items-start">
      {/* Main posts */}
      <div
        className={`w-full bg-primary rounded-xl ${
          isNoPosts ? "h-[50vh]" : ""
        }`}
      >
        <div>
          <TabPosts />
          {isNoPosts && (
            <div className="flex justify-center items-center h-full">
              <div className="flex flex-col">
                <img src={noPosts} alt="no-posts" className="" />
                <caption className="text-gray-500">
                  Kamu belum pernah memposting konten nih~
                </caption>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Side card */}
      <SideCard/>
    </div>
  );
}
