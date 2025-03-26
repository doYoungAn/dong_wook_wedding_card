import { FC } from 'react';
import { Gallery_IMAGES } from './../../data/gallery2';

const Gallery: FC = () => {

  return (
    <>
      <div className='flex overflow-y-auto gap-[10px] flex-nowrap mb-[10px] px-[10px]'>
        {Gallery_IMAGES.slice(0, 10).map((image) => (
          <div className='min-w-[130px] max-w-[130px]'>
            <img src={image.src} />
          </div>
        ))}
      </div>
      <div className='flex overflow-y-auto gap-[10px] flex-nowrap px-[10px]'>
        {Gallery_IMAGES.slice(11, Gallery_IMAGES.length).map((image) => (
          <div className='min-w-[130px] max-w-[130px]'>
            <img src={image.src} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Gallery