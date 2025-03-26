import { FC } from 'react';
import type { Metadata } from 'next';
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
        <Invitation />
        <Counter />
        <Information />
        <Gallery />
        <Location />
        <Give />
      </main>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default HomePage