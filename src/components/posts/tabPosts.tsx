export default function TabPosts() {
  return (
    <div className="max-[768px]:hidden sticky top-[3rem] bg-primary rounded-t-xl">
      <div className="flex gap-6 p-5">
        <button className="font-semibold">Ikuti</button>
        <button className="font-semibold">Rekomendasi</button>
        <button className="font-semibold">Event</button>
      </div>
      <hr className="hr-color" />
    </div>
  );
}
