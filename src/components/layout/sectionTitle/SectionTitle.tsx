import { FC } from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title }) => {

  return (
    <h2 className='mb-[30px] text-primary w-full text-center'>{ title }</h2>
  )
}

export default SectionTitle;