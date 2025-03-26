import { FC, PropsWithChildren } from 'react';

const Section: FC<PropsWithChildren> = ({ children }) => {

  return (
    <section>
      {children}
    </section>
  )
}

export default Section;