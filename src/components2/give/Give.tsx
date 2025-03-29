import { FC } from 'react';
import AccountInfo from '../common/accountInfo';
import { GROOM_ACCOUNTS, BRIDE_ACCOUNTS } from './../../data/account';

const Give: FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 text-contentPrimary font-GowunBatang px-[40px]">

      <div className="w-full flex justify-center items-center flex-col rounded-md overflow-hidden" style={{ boxShadow: '0 0 20px 0 rgba(217,217,217,.6)' }}>
        <div className="w-full bg-darkBg py-3 rounded-md pl-[18px]">
          신랑측 계좌번호
        </div>
        <div className='w-full' style={{ boxShadow: 'inset 0 7px 9px -7px rgba(217,217,217,.6)' }}>
          {GROOM_ACCOUNTS.map((groomAccount, index) => (
            <AccountInfo
              key={index}
              account={groomAccount}
              isBorderTop={index !== 0}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-col rounded-md overflow-hidden" style={{ boxShadow: '0 0 20px 0 rgba(217,217,217,.6)' }}>
        <div className="w-full bg-darkBg py-3 rounded-md pl-[18px]">
          신부측 계좌번호
        </div>
        <div className='w-full' style={{ boxShadow: 'inset 0 7px 9px -7px rgba(217,217,217,.6)' }}>
          {BRIDE_ACCOUNTS.map((groomAccount, index) => (
            <AccountInfo
              key={index}
              account={groomAccount}
              isBorderTop={index !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Give;
