import { FC } from 'react';
import InformationImage from './../../assets/information.jpeg';

const Information: FC = () => {

  return (
    <>
      <div className="font-GowunBatang w-full text-center" style={{ color: '#4a4949' }}>
        2025년 6월 7일 토요일 오전 11시 20분
      </div>
      <div className="font-GowunBatang w-full text-center" style={{ color: '#4a4949' }}>
        더 베뉴지 1F 네이처홀
      </div>
      <div className='transform:rotate(undefineddeg) w-[10px]' style={{
        margin: '17px auto 20px',
        borderTop: '1px solid #0C6A31'
      }}></div>
      
      <div style={{ width: 'calc(100% - 125px)', margin: '0 auto' }}>
        <img src={InformationImage} />
      </div>
    </>
  )
}

export default Information;