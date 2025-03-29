import { FC, useState } from 'react';
import GalleryModal from '../modal/galleryModal';
import { Gallery_IMAGES } from './../../data/gallery2';

const Gallery: FC = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedIndex, setSelectIndex] = useState(0);
  
    const onClickImage = (index: number) => {
      setSelectIndex(index);
      setIsOpenModal(true);
    };

  return (
    <>
      <div className='flex overflow-y-auto gap-[10px] flex-nowrap mb-[10px] px-[10px]'>
        {Gallery_IMAGES.slice(0, 10).map((image, index) => (
          <div
            className='min-w-[140px] max-w-[140px] h-[205px]'
            onClick={() => onClickImage(index)}
          >
            <img src={image.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className='flex overflow-y-auto gap-[10px] flex-nowrap px-[10px]'>
        {Gallery_IMAGES.slice(10, Gallery_IMAGES.length).map((image, index) => (
          <div
            className='min-w-[140px] max-w-[140px] h-[205px]'
            onClick={() => onClickImage(10 + index)}
          >
            <img src={image.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      {isOpenModal ? (
        <GalleryModal
          initialSlide={selectedIndex}
          onClickOutSide={() => setIsOpenModal(false)}
        />
      ) : null}
    </>
  )
}

export default Gallery