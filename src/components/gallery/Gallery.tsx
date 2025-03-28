import { FC, useState } from 'react';
import GalleryModal from '../modal/galleryModal';
import { GALLERY_IMAGES } from './../../data/gallery';

const Gallery: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedIndex, setSelectIndex] = useState(0);

  const onClickImage = (index: number) => {
    setSelectIndex(index);
    setIsOpenModal(true);
  };

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-13 gap-[2px]">
        {GALLERY_IMAGES.map((image, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden"
            style={{ gridArea: image.gridArea, height: image.height }}
            onClick={() => onClickImage(index)}
          >
            <img
              className="object-cover w-full h-full"
              src={image.mainSrc}
              alt=""
              style={{ objectPosition: image?.objectPosition }}
            />
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
  );
};

export default Gallery;


