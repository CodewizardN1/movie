import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './middle.css';
import picture from '../../../public/Picture (4).png'
import icon from '../../../public/Vector 196.png'
import star from '../../../public/Review.png'
import star2 from '../../../public/Review (1).png'

// import required modules
import { Navigation,Pagination } from 'swiper/modules';
import filter from '../../../public/Filter.png'
import Image from 'next/image';
import Link from 'next/link';
import Right from '../right/right';
import Left from '../leftSide/left';
export default function Middle() {
  return (
    <div className="bg-[#000000] 2xl:h-[100vh] base:h-[100%] base:pb-[30px] md:pb-0 overflow-hidden">
      <div className="header hidden">
        <h1 className="text-white md:text-[25px] base:text-[17px] font-[800]">Movies</h1>
        <div className=''>
        <h1 className=" md:text-[25px] base:text-[17px] font-[800] text-[#F8B319]">Tv Shows</h1>
        <div className=' md:w-[115px] base:w-[80px] h-[4px] rounded-[92px] bg-[#F8B319]'></div>
        </div>
        <h1 className="text-white md:text-[25px] base:text-[17px] font-[800]">Anime</h1>
        <label className="input input-bordered flex items-center gap-2 w-[315px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-100 search"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
          <Image src={filter} className='base:hidden md:flex' alt='filter' />
        </label>
      </div>

      {/* res nav */}
      <div className='base:flex justify-between items-center md:hidden w-[95%] m-auto pt-[20px] '>
        <div className="drawer position-relative z-[9999]">
          <input id="my-drawer" type="checkbox" className="drawer-toggle relative z-[1000]" />
          <div className="drawer-content  ">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn bg-[#000] drawer-button"><HiMiniBars3CenterLeft size={'25px'} className='font-bold text-orange-400' /></label>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay bg-black"></label>
            <ul className="menu p-4 w-80 min-h-full flex flex-col gap-6 bg-base-200 overflow-hidden
             text-base-content bg-black">
              {/* Sidebar content here */}
              <Left />
              
            </ul>
          </div>
        </div>
        <label className="input input-bordered flex items-center gap-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-100"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow w-[200px] sm:w-[230px]" placeholder="Search" />
        </label>

      </div>

      <div className='base:flex xl:hidden items-center pt-[20px] justify-center tex-white'>
        <h1 className='text-white'>Click to see  </h1>
        <Link href={'/movies'}>
      <button className="btn bg-orange-500 border-none">Movies</button>
        </Link>
      </div>
      


      <div className='md:w-[80%] base:w-[95%] m-auto md:pt-[60px] base:pt-[30px]'>
        <Link href={'/movie'}>
      <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
          
          <SwiperSlide>
            <h1 className='absolute text-[40px] font-[800] text-[white] top-6 left-14'>The Crown</h1>
            <div className='absolute flex justify-between md:w-[90%] base:w-[100%] md:bottom-6 base:bottom-0'>
              <button className='md:w-[160px] base:w-[100px] sm:w-[120px] md:h-[56px] base:h-[48px] bg-btn flex items-center gap-2 justify-center font-semibold md:text-[19px] base:text-[15px] text-[#F9F9F9] md:rounded-[15px] base:rounded-none'><Image className='icon' src={icon} alt='+' /> Watchlist</button>
              <button className='md:w-[190px] base:w-[100px] sm:w-[120px] md:h-[56px] h-[48px] bg-[#F8B319] flex items-center gap-2 justify-center font-bold md:text-[19px] base:text-[15px] text-[#000] md:rounded-[15px] base:rounded-none'>Watch Now</button>
            </div>
            <Image src={picture} alt='image'>
            </Image>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className='absolute text-[40px] font-[800] text-[white] top-6 left-14'>The Crown</h1>
            <div className='absolute flex justify-between md:w-[90%] base:w-[100%] md:bottom-6 base:bottom-0'>
              <button className='md:w-[160px] base:w-[100px] sm:w-[120px] md:h-[56px] base:h-[48px] bg-btn flex items-center gap-2 justify-center font-semibold md:text-[19px] base:text-[15px] text-[#F9F9F9] md:rounded-[15px] base:rounded-none'><Image className='icon' src={icon} alt='+' /> Watchlist</button>
              <button className='md:w-[190px] base:w-[100px] sm:w-[120px] md:h-[56px] h-[48px] bg-[#F8B319] flex items-center gap-2 justify-center font-bold md:text-[19px] base:text-[15px] text-[#000] md:rounded-[15px] base:rounded-none'>Watch Now</button>
            </div>
            <Image src={picture} alt='image'>
            </Image>
          </SwiperSlide>
          <SwiperSlide>
            <h1 className='absolute text-[40px] font-[800] text-[white] top-6 left-14'>The Crown</h1>
            <div className='absolute flex justify-between md:w-[90%] base:w-[100%] md:bottom-6 base:bottom-0'>
              <button className='md:w-[160px] base:w-[100px] sm:w-[120px] md:h-[56px] base:h-[48px] bg-btn flex items-center gap-2 justify-center font-semibold md:text-[19px] base:text-[15px] text-[#F9F9F9] md:rounded-[15px] base:rounded-none'><Image className='icon' src={icon} alt='+' /> Watchlist</button>
              <button className='md:w-[190px] base:w-[100px] sm:w-[120px] md:h-[56px] h-[48px] bg-[#F8B319] flex items-center gap-2 justify-center font-bold md:text-[19px] base:text-[15px] text-[#000] md:rounded-[15px] base:rounded-none'>Watch Now</button>
            </div>
            <Image src={picture} alt='image'>
            </Image>
          </SwiperSlide>
        

      </Swiper>
        </Link>
      </div>



      <div className='md:w-[80%] base:w-[95%] m-auto pt-[30px]'>
        <h1 className='text-white text-[25px]'>Popular on Honey Movies</h1>
         <div className='pt-[10px] flex justify-between items-center overflow-x-scroll base:gap-3 scrollimg'>
          <Link href={'/movie'}>
          <div className='md:w-[237px] base:w-[300px] h-[298px] midbg'>
              <div className='pl-4 pt-4'>
                <h1 className='text-[22px] font-bold text-white'>Loki</h1>
                <Image className='pt-1' src={star} alt='star 5' />
              </div>

              <div className='flex justify-between px-4 pt-[130px]'>
                <h1 className='text-[#cbc9c9]'>6 Ep</h1>
                <h1 className='text-[#cbc9c9]'>Superhero</h1>
              </div>

              <div className='px-4 flex justify-between items-center pt-[8px]'>
                <button className='md:w-[57px] base:w-[48px] md:h-[57px] base:h-[48px] bg-btn flex items-center justify-center rounded-[15px]'><Image src={icon} alt='+' /></button>
                <button className='md:w-[130px] base:w-[100px] rounded-[15px] md:h-[57px] base:h-[48px] bg-[#F8B319] text-black font-bold'>More Info</button>
              </div>
          </div>
          </Link>
          <Link href={'/movie'}>
            <div className='md:w-[237px] base:w-[300px] h-[298px] midbg2'>
                <div className='pl-4 pt-4'>
                  <h1 className='text-[22px] font-bold text-white'>Chernoby!</h1>
                  <Image className='pt-1' src={star2} alt='star 5' />
                </div>

                <div className='flex justify-between px-4 pt-[130px]'>
                  <h1 className='text-[#cbc9c9]'>5 Ep</h1>
                  <h1 className='text-[#cbc9c9]'>Mini series</h1>
                </div>

                <div className='px-4 flex justify-between items-center pt-[8px]'>
                  <button className='md:w-[57px] base:w-[48px] md:h-[57px] base:h-[48px] bg-btn flex items-center justify-center rounded-[15px]'><Image src={icon} alt='+' /></button>
                  <button className='md:w-[130px] base:w-[100px] rounded-[15px] md:h-[57px] base:h-[48px] bg-[#F8B319] text-black font-bold'>More Info</button>
                </div>
            </div>
          </Link>
          <Link href={'/movie'}>
            <div className='md:w-[237px] base:w-[300px] h-[298px] midbg3'>
                <div className='pl-4 pt-4'>
                  <h1 className='text-[22px] font-bold text-white'>Rick and Morty</h1>
                  <Image className='pt-1' src={star2} alt='star 5' />
                </div>

                <div className='flex justify-between px-4 pt-[130px]'>
                  <h1 className='text-[#cbc9c9]'>49 Ep</h1>
                  <h1 className='text-[#cbc9c9]'>Fantasy</h1>
                </div>

                <div className='px-4 flex justify-between items-center pt-[8px]'>
                  <button className='md:w-[57px] base:w-[48px] md:h-[57px] base:h-[48px] bg-btn flex items-center justify-center rounded-[15px]'><Image src={icon} alt='+' /></button>
                  <button className='md:w-[130px] base:w-[100px] rounded-[15px] md:h-[57px] base:h-[48px] bg-[#F8B319] text-black font-bold'>More Info</button>
                </div>
            </div>
          </Link>
         </div>
      </div>
    </div>
  );
}
