import { FC } from 'react';
import { Gallery_IMAGES } from './../../data/gallery2';

const Gallery: FC = () => {

  return (
    <>
      <div className='flex overflow-y-auto gap-[10px] flex-nowrap mb-[10px] px-[10px]'>
        {Gallery_IMAGES.slice(0, 10).map((image) => (
          <div className='min-w-[140px] max-w-[140px] h-[205px]'>
            <img src={image.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className='flex overflow-y-auto gap-[10px] flex-nowrap px-[10px]'>
        {Gallery_IMAGES.slice(11, Gallery_IMAGES.length).map((image) => (
          <div className='min-w-[140px] max-w-[140px] h-[205px]'>
            <img src={image.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </>
  )
}

export default Gallery