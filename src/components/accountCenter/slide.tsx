import { currentUser } from "@/features/auth/authSlice";
import slide1 from "@/assets/slide 1.png";
import slide2 from "@/assets/slide 2.png";
import slide3 from "@/assets/slide 3.png";

interface Props {
  currentUser: currentUser;
}

export default function Slide({ currentUser }: Props) {
  const images = [{ img: slide1 }, { img: slide2 }, { img: slide3 }];

  return (
    <div 
      className="flex gap-2 overflow-x-auto w-full " 
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {images.map((image) => (
        <div 
          key={image.img} 
          className="flex-none w-full"
        >
          <div className="bg-slate-700 rounded-t-xl p-2 flex gap-1">
            <div className="bg-slate-400 max-[425px]:p-[4vw] p-5 rounded-full" />
            <div>
              <div className="max-[425px]:text-[3vw]">
                <div className="flex gap-1">
                  <p>{currentUser.firstName}</p>
                  <div className="bg-orange-300 text-black px-1 rounded-sm">
                    Lv 60
                  </div>
                </div>
              </div>
              <div className="max-[425px]:text-[2.2vw] min-[425px]:text-[10px]">Asia Server</div>
            </div>
          </div>
          <img 
            src={image.img} 
            className="w-full h-auto rounded-b-xl" 
            alt="" 
          />
        </div>
      ))}
    </div>
  );
}
