import { FC } from 'react';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '동욱 ❤️ 보경, 결혼합니다.',
  description: 'Test Description',
}

const HomePage: FC = () => {

  return (
    <div>
      <h1>Dong wook Wedding Card</h1>
    </div>
  )
}

export default HomePage