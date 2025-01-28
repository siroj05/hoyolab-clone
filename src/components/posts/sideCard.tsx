import { Image, PencilLine, Video } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../card';

export default function SideCard() {
  return (
    <Card>
      <div className='flex justify-between mb-5'>
        <p className='font-bold'>Ayo Segera Posting!</p>
      </div>
      <div className='flex justify-between'>
        <Link to={'/newArticle'} className='flex flex-col items-center hover:bg-gray-700 px-6 py-3 rounded-lg'>
          <div className='bg-green-300/80 rounded-full p-2'>
            <PencilLine className='text-green-200 w-[2vw] h-[2vw]'/>
          </div>
          <p className=''>Konten</p>
        </Link>
        <div className='flex flex-col items-center hover:bg-gray-700 px-6 py-3 rounded-lg'>
          <div className='bg-blue-500 rounded-full p-2'>
            <Image className='w-[2vw] h-[2vw]'/>
          </div>
          <p>Gambar</p>
        </div>
        <div className='flex flex-col items-center hover:bg-gray-700 px-6 py-3 rounded-lg'>
          <div className='bg-orange-300 rounded-full p-2'>
            <Video className='w-[2vw] h-[2vw]'/>
          </div>
          <p>Video</p>
        </div>
      </div>
    </Card>
  );
}
