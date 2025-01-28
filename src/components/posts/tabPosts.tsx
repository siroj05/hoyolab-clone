import { useLocation } from "react-router-dom";

export default function TabPosts() {
  const location = useLocation()

  return (
    <div className={`max-[768px]:hidden sticky z-30 bg-primary rounded-t-xl
      ${location.pathname.includes('/accountCenter') ? 'top-[6rem]' : 'top-[3rem]'}
    `}>
      <div className="flex gap-6 p-5">
        <button className="font-semibold">Ikuti</button>
        <button className="font-semibold">Rekomendasi</button>
        <button className="font-semibold">Event</button>
      </div>
      <hr className="hr-color" />
    </div>
  );
}
