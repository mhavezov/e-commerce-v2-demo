import React from 'react';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';
import {
  RiSearchLine,
  RiUserLine,
  RiShoppingCartLine,
} from 'react-icons/ri';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Header() {
  return (
    <div>
      <header className='relative'>
        <Swiper spaceBetween={50} slidesPerView={1} navigation>
          <nav className='absolute top-0 z-10 h-20 w-full'>
            <div className='flex h-full justify-between items-center uppercase font-bold text-sm text-gray-50 hover:text-gray-500 hover:bg-gray-50 hover:opacity-100 transition-colors duration-300 ease-in font-body'>
              <div className='ml-8 text-3xl'>
                Logo <span className='text-pink-400'>.</span>
              </div>
              <div className='space-x-4'>
                <a href='' className='hover:text-gray-900'>
                  home{' '}
                </a>
                <a href='' className='hover:text-gray-900'>
                  shop{'\u25be'}
                </a>
                <a href='' className='hover:text-gray-900'>
                  template
                </a>
                <a href='' className='hover:text-gray-900'>
                  contact
                </a>
                <a href='' className='hover:text-gray-900'>
                  docs
                </a>
              </div>
              <div className='mr-8 flex text-2xl space-x-4'>
                <a href='' className='hover:text-gray-900'>
                  <RiSearchLine />
                </a>
                <a href='' className='hover:text-gray-900'>
                  {' '}
                  <RiUserLine />
                </a>
                <a href='' className='hover:text-gray-900'>
                  <RiShoppingCartLine />
                </a>
              </div>
            </div>
          </nav>

          <SwiperSlide>
            <div
              className='h-screen relative'
              style={{
                backgroundImage: `url('/assets/slider-01.jpg')`,
                backgroundPosition: 'center',
              }}
            >
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col items-center text-gray-50 max-w-lg'>
                  <h4 className='text-sm tracking-widest uppercase font-body mb-12'>
                    Just arrived
                  </h4>
                  <h1 className='text-8xl text-center font-bold tracking-tight font-title'>
                    Denim Jackets
                  </h1>
                  <p className='text-center text-lg font-body my-12'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </p>
                  <a
                    href='/category'
                    className='bg-gray-50 hover:bg-gray-200 text-gray-900 text-xs uppercase py-3 px-4 tracking-widest font-semibold font-body'
                  >
                    View collection
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='h-screen relative'
              style={{
                backgroundImage: `url('/assets/slider-02.jpg')`,
                backgroundPosition: 'center',
              }}
            >
              <div className='absolute bg-black inset-0 bg-opacity-40'></div>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col items-center text-gray-50 max-w-lg'>
                  <h4 className='text-sm tracking-widest uppercase font-body mb-12'>
                    Our bestseller
                  </h4>
                  <h1 className='text-8xl text-center font-bold tracking-tight font-title'>
                    Skinny Jeans
                  </h1>
                  <p className='text-center text-lg font-body my-12'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </p>
                  <a
                    href='/category'
                    className='bg-gray-50 hover:bg-gray-200 text-gray-900 text-xs uppercase py-3 px-4 tracking-widest font-semibold font-body'
                  >
                    View collection
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='h-screen'
              style={{
                backgroundImage: `url('/assets/slider-03.jpg')`,
                backgroundPosition: 'center',
              }}
            >
              <div className='absolute bg-black inset-0 bg-opacity-40'></div>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col items-center text-gray-50 max-w-lg'>
                  <h1 className='text-8xl text-center font-semibold tracking-tight font-body uppercase'>
                    Skeleton tees
                  </h1>
                  <p className='text-center text-lg font-body my-8'>
                    Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                  </p>
                  <a
                    href='/category'
                    className='bg-gray-50 hover:bg-gray-200 text-gray-900 text-xs uppercase py-3 px-4 tracking-widest font-semibold font-body'
                  >
                    View collection
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </header>
    </div>
  );
}
