import { FC } from 'react';
import type { Metadata } from 'next';
import Section from '@/components/layout/section';
import SectionTitle from '@/components/layout/sectionTitle';
import TopBanner from '@/components/topBanner';
import Invitation from '@/components/invitation';
import Counter from '@/components/counter';
import Information from '@/components/information';
import Gallery from '@/components/gallery';
import Location from '@/components/location';
import Give from '@/components/give';
import Footer from '@/components/footer';
import { ToastContainer } from 'react-toastify';

export const metadata: Metadata = {
  title: '동욱 ❤️ 보경, 결혼합니다.',
  description: 'Test Description',
}

const HomePage: FC = () => {

  return (
    <>
      <main>
        <TopBanner />
        <Section>
          <SectionTitle title='INVITATION' />
          <Invitation />
        </Section>
        <Section>
          <SectionTitle title='D-Day' />
          <Counter />
        </Section>
        <Section>
          <SectionTitle title='예식 안내' />
          <Information />
        </Section>
        <Section>
          <SectionTitle title='OUR MOMENTS' />
          <Gallery />
        </Section>
        <Section>
          <SectionTitle title='오시는길' />
          <Location />
        </Section>
        <Section>
          <SectionTitle title='마음 전하실 곳' />
          <Give />
        </Section>
      </main>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default HomePage