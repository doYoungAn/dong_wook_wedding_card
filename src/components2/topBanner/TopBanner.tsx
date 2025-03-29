import { FC } from 'react';
import Love from '../icon/love';
import Sign from '../icon/sign';
import Left from '../icon/left';
import Right from '../icon/right';
import MainImage from './../../assets/images/main.webp';

const TopBanner: FC = () => {

  return (
    <div className="py-[40px] mt-[40px]">
      <div className=' text-primary2 w-full mb-[50px] flex items-center justify-center text-xl'>
        <span>DONGWOOK</span>
        <span className='w-[11px] flex mx-[11px]'>
          <Love />
        </span>
        <span>BOGYEONG</span>
      </div>

      <div className='px-[16px] w-full mb-[48px] flex items-center justify-start'>
        <Left />
        <div className='mx-[1em] w-full max-w-full'>
          <div className='w-full relative overflow-hidden' style={{ paddingBottom: '100%' }}>
            <img src={MainImage} alt="" className='absolute top-[-70px] left-0 object-cover' />
          </div>
        </div>
        <Right />
      </div>



      <p className="w-full text-center font-BodoniModa text-primary2 font-semibold" style={{ fontSize: '1.625em', letterSpacing: '0.5px' }}>
        2025.06.07
      </p>
      <p className='font-GowㅌunBatang text-primary2 text-center'>11:20 AM</p>
      
      <div className='flex items-center justify-center my-[12px]'>
        <div className='w-[22px]'>
          <Sign />
        </div>
      </div>

      <p className='font-GowunBatang text-primary2 text-center'>더 베뉴지 1F 네이처홀</p>
    </div>
  )
}

export default TopBanner;