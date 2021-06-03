import React from 'react';

function Section() {
  return (
    <section className=' relative h-screen gap-2 grid mt-2 grid-cols-1 grid-rows-10 lg:grid-cols-6 lg:grid-rows-2'>
      <div
        className='lg:col-span-3 flex items-center justify-center'
        style={{
          backgroundImage: `url('/assets/section-01.jpg')`,
          backgroundPosition: 'center',
        }}
      >
        <div className='text-center font-body opacity-90'>
          <h1 className='text-gray-50 text-7xl font-bold mb-10'>
            Top picks
          </h1>
          <a
            href=''
            className='bg-gray-50 py-2 px-4 text-sm hover:bg-gray-200'
          >
            Shop now
          </a>
        </div>
      </div>
      <div
        className='lg:col-span-3 flex items-center justify-center'
        style={{
          backgroundImage: `url('/assets/section-02.jpg')`,
          backgroundPosition: 'center',
        }}
      >
        <div className='text-center font-body opacity-90'>
          <h1 className='text-gray-50 text-7xl font-bold mb-10'>
            New Arrivals
          </h1>
          <a
            href=''
            className='bg-gray-50 py-2 px-4 text-sm hover:bg-gray-200'
          >
            Shop now
          </a>
        </div>
      </div>
      <div
        className='lg:col-span-2 flex items-center justify-center overflow-hidden'
        style={{
          backgroundImage: `url('/assets/section-03.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='text-center font-body opacity-90'>
          <h1 className='text-gray-100 text-7xl font-bold mb-10'>
            Jackets
          </h1>
          <a
            href=''
            className=' py-2 px-4 text-sm  font-semibold bg-lightBlue-500 hover:bg-lightBlue-600 text-gray-50'
          >
            Shop now
          </a>
        </div>
      </div>
      <div
        className='lg:col-span-2 flex items-center justify-center'
        style={{
          backgroundImage: `url('/assets/section-04.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='text-center font-body opacity-90'>
          <h1 className='text-gray-100 text-7xl font-bold mb-10'>
            Lookbook
          </h1>
          <a
            href=''
            className='py-2 px-4 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-gray-50'
          >
            Shop now
          </a>
        </div>
      </div>
      <div
        className='lg:col-span-2 flex items-center justify-center'
        style={{
          backgroundImage: `url('/assets/section-05.jpg')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='text-center font-body opacity-90'>
          <h1 className='text-gray-600 text-7xl font-bold mb-10'>
            Try this
          </h1>
          <a
            href=''
            className='py-2 px-4 text-sm font-semibold bg-pink-400 hover:bg-pink-500 text-gray-50'
          >
            Shop now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section;
