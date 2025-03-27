import { FC } from 'react';
import InvitationImage from './../../assets/invitation.jpeg';

export const Invitation: FC = () => {

  return (
    <>
      <div className="my-[30px]">
        <img src={InvitationImage} />
      </div>
      <div className="font-GowunBatang text-center" style={{ lineHeight: 2 }}>
        <p>
          싱그러운 여름 햇살 아래 <br />
          저희 두 사람이 하나가 됩니다. <br /><br />
          소중한 걸음으로 축복해 주시면 감사하겠습니다.
        </p>
      </div>
      <div className='transform:rotate(undefineddeg) w-[10px]' style={{
        margin: '17px auto 20px',
        borderTop: '1px solid #0C6A31'
      }}></div>

      <div className='flex items-center justify-center mb-[8px] font-GowunBatang text-secondaryText'>
        <div>차상식</div>
        <div className=' mx-[5px]'>·</div>
        <div>이병순</div>
        <div className=' mx-[5px]'>의</div>
        <div className=' mr-[5px]'>아들</div>
        <div>차동욱</div>
      </div>

      <div className='flex items-center justify-center mb-[8px] font-GowunBatang text-secondaryText'>
        <div>정근길</div>
        <div className=' mx-[5px]'>·</div>
        <div>김해영</div>
        <div className=' mx-[5px]'>의</div>
        <div className=' mr-[5px]'>딸</div>
        <div>정보경</div>
      </div>
    </>
  )
}

export default Invitation;