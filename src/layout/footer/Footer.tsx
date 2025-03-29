import { FC } from 'react';
import { toast } from 'react-toastify';

// https://dong-wook-wedding-card.vercel.app/

const Footer: FC = () => {

  const onClickCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://dong-wook-wedding-card.vercel.app/');
      toast(`링크가 복사되었습니다.`);
    } catch {
      toast('링크 복사에 실패하였습니다.');
    }
  }

  return (
    <footer className="py-[30px]" style={{ backgroundColor: '#f1f1f1' }}>
      <div className='flex items-center justify-center mb-[24px]'>
        {/** margin:0 auto;width:50px;height:50px;border:1px solid #f1f1f1;border-radius:50%;background-color:#fefefe;box-shadow:0 0 10px 0 rgba(217,217,217,.6) */}
        <div>
          <button
            className="flex items-center justify-center"
            style={{
            margin: '0',
            width: '50px',
            height: '50px',
            border: '1px solid #f1f1f1',
            borderRadius: '50%',
            backgroundColor: '#fefefe',
            boxShadow: '0 0 10px 0 rgba(217,217,217,.6)'
          }}
            onClick={onClickCopyLink}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.43385 12.2786L9.22998 12.2461C8.81234 12.1794 8.39991 12.0367 8.01269 11.8132C6.31102 10.8307 5.72798 8.65478 6.71044 6.95311L9.43765 2.22945C10.4201 0.527773 12.596 -0.0552586 14.2977 0.927201C15.9994 1.90966 16.5824 4.08558 15.5999 5.78725L14.1921 8.22573L12.4633 7.22763L13.8712 4.78915C14.3024 4.04225 14.0465 3.08719 13.2996 2.65596C12.5527 2.22474 11.5976 2.48064 11.1664 3.22755L8.4392 7.95121C8.00798 8.69811 8.26389 9.65317 9.01079 10.0844C9.33086 10.2692 9.68834 10.3278 10.0271 10.2758L10.6449 10.1811L9.43385 12.2786Z" fill="#817b7b"></path><path d="M10.5661 7.72136L10.7699 7.75391C11.1876 7.82057 11.6 7.96328 11.9872 8.18685C13.6889 9.16931 14.2719 11.3452 13.2895 13.0469L10.5623 17.7706C9.57981 19.4722 7.40389 20.0553 5.70223 19.0728C4.00055 18.0903 3.41752 15.9144 4.39998 14.2128L5.80784 11.7743L7.5366 12.7724L6.12874 15.2109C5.69752 15.9578 5.95342 16.9128 6.70033 17.344C7.44723 17.7753 8.40229 17.5194 8.83351 16.7725L11.5607 12.0488C11.9919 11.3019 11.736 10.3468 10.9891 9.91561C10.6691 9.73081 10.3116 9.67225 9.97283 9.72418L9.35506 9.8189L10.5661 7.72136Z" fill="#817b7b"></path></svg>
          </button>
          <p className="font-GowunBatang text-sm mt-[4px]">링크복사</p>
        </div>
      </div>
      <div className="text-xs w-full text-center">
        ⓒ Doyoung. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
