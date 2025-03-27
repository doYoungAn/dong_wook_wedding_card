import { FC } from 'react';
import Sign from '../icon/sign';

const TopBanner: FC = () => {

  return (
    <div className="py-[40px]">
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