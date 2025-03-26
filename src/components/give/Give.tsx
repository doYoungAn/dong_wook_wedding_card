import { FC } from 'react';
import AccountInfo from '../common/accountInfo';
import { GROOM_ACCOUNTS, BRIDE_ACCOUNTS } from './../../data/account';

const Give: FC = () => {
  return (
    <>
      <div className='flex items-center justify-center w-full h-[200px]'>
        마음 전하실 곳
      </div>
      <div className="w-full flex flex-col items-center gap-4">
        <div className="w-full flex justify-center items-center flex-col">
          <div className="w-5/6 p-[18px] bg-custom-gray rounded-md">
            신랑측 계좌번호
          </div>
          {GROOM_ACCOUNTS.map((groomAccount, index) => (
            <AccountInfo
              key={index}
              account={groomAccount}
              isBorderTop={index !== 0}
            />
          ))}
        </div>

        <div className="w-full flex justify-center items-center flex-col">
          <div className="w-5/6 p-[18px] bg-custom-gray rounded-md">
            신부측 계좌번호
          </div>
          {BRIDE_ACCOUNTS.map((groomAccount, index) => (
            <AccountInfo
              key={index}
              account={groomAccount}
              isBorderTop={index !== 0}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Give;
