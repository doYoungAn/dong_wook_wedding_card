import { FC, PropsWithChildren } from 'react';

interface SectionProps {
  bg?: 'secondary';
}

const Section: FC<SectionProps & PropsWithChildren> = ({ children, bg }) => {
  return (
    <section className={`mb-6 py-[60px] ${bg ? 'bg-secondBg' : ''}`}>
      {children}
    </section>
  );
};

export default Section;
