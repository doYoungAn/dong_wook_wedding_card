import { FC } from 'react';

interface TitleProps {
  title?: string;
}

const Title: FC<TitleProps> = ({ title = '' }) => {
  return (
      <h2 className='w-full text-center text-primary2 font-GowunBatang font-bold mb-[30px]'>{title}</h2>
    
  );
};

export default Title;
