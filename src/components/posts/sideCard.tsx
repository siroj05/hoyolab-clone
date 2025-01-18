import { Image, PencilLine, Video } from 'lucide-react';

export default function SideCard() {
  return (
    <div className="bg-primary rounded-xl p-4 w-[600px]">
      <div className='flex justify-between mb-5'>
        <p className='font-bold'>Ayo Segera Posting!</p>
      </div>
      <div className='flex justify-between px-10'>
        <div className='flex flex-col items-center'>
          <div className='bg-green-300/80 rounded-full p-2'>
            <PencilLine className='text-green-200 w-8 h-8'/>
          </div>
          <p>Konten</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-blue-500 rounded-full p-2'>
            <Image className='w-8 h-8'/>
          </div>
          <p>Gambar</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-orange-300 rounded-full p-2'>
            <Video className='w-8 h-8'/>
          </div>
          <p>Video</p>
        </div>
      </div>
    </div>
  );
}
