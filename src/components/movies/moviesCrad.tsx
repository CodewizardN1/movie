  "use client" 
  // Import Swiper React components
  import { Swiper, SwiperSlide } from 'swiper/react';
  import img1 from '../../../public/Rectangle 5.png'
  import img2 from '../../../public/Rectangle 7.png'
  import img3 from '../../../public/Rectangle 8.png'
  import img4 from '../../../public/Rectangle 9.png'
  import img5 from '../../../public/image 10.png'
  import star from '../../../public/Review.png'
  // Import Swiper styles

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  import './movie.css';

  // import required modules
  import { FreeMode, Pagination, Navigation } from 'swiper/modules';

  import './movie.css';
  import { FaAngleLeft } from "react-icons/fa6";
  import Image from 'next/image';
  import { useState } from 'react';
  import Link from 'next/link';
  export default function MoviesCard() {
    const [isEnd, setIsEnd] = useState(false);

    const handleSwiper = (swiper) => {
      swiper.on('slideChange', () => {
        if (swiper.isEnd) {
          setIsEnd(true);
        } else {
          setIsEnd(false);
        }
      });
    };
    return (
      <div className='w-[100%] xl:h-[100vh] base:h-[100%] base:pb-4 xl:pb-0 bg-black '>
        <div className='md:w-[85%] base:w-[95%] m-auto xl:pt-[100px] base:pt-[50px]'>

          <div className='flex items-center gap-3'>
            <Link href={'/'}>
            <button className="w-[50px] h-[50px] bg-btn text-white rounded-[15px] flex items-center justify-center">&apos;<FaAngleLeft size={'25px'} />&apos;</button>
            </Link>
            <h1 className='text-[22px] text-white font-bold'>Back Home</h1>
          </div>

          <h1 className='md:text-[40px] text-white base:text-[25px] font-bold pt-[35px] pb-5'>Top Rated Movies</h1>
        <Swiper
        onSwiper={handleSwiper}
        breakpoints={{
          290: {
            slidesPerView: 1.3,
            navigation: false,
          },
          300: {
            slidesPerView: 1.4,
            navigation: false
          },
          340: {
            slidesPerView: 1.4,
          },
          360: {
            slidesPerView: 1.6,
          },
          400: {
            slidesPerView: 1.75,
          },
          440: {
            slidesPerView: 1.9,
          },
          480: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 2.2,
          },
          540: {
            slidesPerView: 2.35,
          },
          580: {
            slidesPerView: 2.55,
          },
          620: {
            slidesPerView: 2.75,
          },
          660: {
            slidesPerView: 2.9,
          },
          700: {
            slidesPerView: 3.1,
          },
          768: {
            slidesPerView: 3.25,
          },
          800: {
            slidesPerView: 2.3,
          },
          850: {
            slidesPerView: 3.6,
          },
          900: {
            slidesPerView: 3.9,
          },
          950: {
            slidesPerView: 2.9,
          },
          1000: {
            slidesPerView: 2.9,
          },
          1080: {
            slidesPerView: 4.75,
          },
          1550: {
            slidesPerView: 5.3,
          },
        }}
          spaceBetween={10}
        slidesPerView={4.5}
        freeMode={true}
          navigation={true}
          modules={[Pagination, Navigation, FreeMode]}
          className="mySwiper"
        >

          <SwiperSlide>
            <div>
              <Image src={img5} alt='movie' className='rounded-[15px] h-[417px]' />

              <div className=' pl-4 flex flex-col gap-1'>
                <h1 className='text-[22px] text-white font-bold text-left'>Avatar</h1>
                <Image src={star} alt='5' className='w-[20px] star' />
                <p className='text-[#cecece] text-[16px] font-semibold'>10 Oct 2021</p>
                <p className='text-white text-[12px] w-[270px]'>Avatar release is expected to draw large
                crowds due to popularity | NewsBytes</p>
              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img1} alt='movie' className='rounded-[15px] h-[417px]' />

              <div className='mt-[-20px] pl-4 flex flex-col gap-1'>
                <h1 className='text-[22px] text-white font-bold text-left'>Venom 2</h1>
                <Image src={star} alt='5' className='w-[20px] star' />
                <p className='text-[#cecece] text-[16px] font-semibold'>10 Oct 2021</p>
                <p className="text-white text-[12px] w-[270px]">Let There Be Carnage' release delayed to September | NewsBytes</p>
              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img2} alt='movie' className='rounded-[15px] h-[417px]' />

              <div className='mt-[-20px] pl-4 flex flex-col gap-1'>
                <h1 className='text-[22px] text-white font-bold text-left'>Bloodshot</h1>
                <Image src={star} alt='5' className='w-[20px] star' />
                <p className='text-[#cecece] text-[16px] font-semibold'>10 Oct 2021</p>
                <p className='text-white text-[12px] w-[270px]'>Ray Garrison, a soldier recently killed in action, is brought back to life as the superhero ...</p>
              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img4} alt='movie' className='rounded-[15px] h-[417px]' />

              <div className='mt-[-20px] pl-4 flex flex-col gap-1'>
                <h1 className='text-[22px] text-white font-bold text-left'>Jumanji</h1>
                <Image src={star} alt='5' className='w-[20px] star' />
                <p className='text-[#cecece] text-[16px] font-semibold'>10 Oct 2021</p>
                <p className='text-white text-[12px] w-[270px]'>English Movies: Watch English Movies 2021, Latest Hollywood Movies Online | English Films</p>
              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img3} alt='movie' className='rounded-[15px] h-[417px]' />

              <div className='mt-[-20px] pl-4 flex flex-col gap-1'>
                <h1 className='text-[22px] text-white font-bold text-left'>The City of Gold</h1>
                <Image src={star} alt='5' className='w-[20px] star' />
                <p className='text-[#cecece] text-[16px] font-semibold'>10 Oct 2021</p>
                <p className='text-white text-[12px] w-[270px]'>English Movies: Watch English Movies 2021, Latest Hollywood Movies Online | English Films</p>
              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img5} alt='movie' className='rounded-[15px] h-[417px]' />

              <div className=' pl-4 flex flex-col gap-1'>
                <h1 className='text-[22px] text-white font-bold'>Avatar</h1>
                <Image src={star} alt='5' className='w-[20px] star' />
                <p className='text-[#cecece] text-[16px] font-semibold'>10 Oct 2021</p>
                <p className='text-white text-[12px] w-[270px]'>Avatar release is expected to draw large
                crowds due to popularity | NewsBytes</p>
              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img1} alt='movie' className='rounded-[15px] h-[417px]' />

              <div className='mt-[-20px] pl-4 flex flex-col gap-1'>
                <h1 className='text-[22px] text-white font-bold'>Venom 2</h1>
                <Image src={star} alt='5' className='w-[20px] star' />
                <p className='text-[#cecece] text-[16px] font-semibold'>10 Oct 2021</p>
                <p className="text-white text-[12px] w-[270px]">Let There Be Carnage' release delayed to September | NewsBytes</p>
              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img2} alt='movie' className='rounded-[15px] h-[417px]' />

              <div className='mt-[-20px] pl-4 flex flex-col gap-1'>
                <h1 className='text-[22px] text-white font-bold'>Bloodshot</h1>
                <Image src={star} alt='5' className='w-[20px] star' />
                <p className='text-[#cecece] text-[16px] font-semibold'>10 Oct 2021</p>
                <p className='text-white text-[12px] w-[270px]'>Ray Garrison, a soldier recently killed in action, is brought back to life as the superhero ...</p>
              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img4} alt='movie' className='rounded-[15px] h-[417px]' />

              <div className='mt-[-20px] pl-4 flex flex-col gap-1'>
                <h1 className='text-[22px] text-white font-bold'>The City of Gold</h1>
                <Image src={star} alt='5' className='w-[20px] star' />
                <p className='text-[#cecece] text-[16px] font-semibold'>10 Oct 2021</p>
                <p className='text-white text-[12px] w-[270px]'>English Movies: Watch English Movies 2021, Latest Hollywood Movies Online | English Films</p>
              </div>
            </div>  
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={img3} alt='movie' className='rounded-[15px] h-[417px]' />

              <div className='mt-[-20px] pl-4 flex flex-col gap-1'>
                <h1 className='text-[22px] text-white font-bold'>The City of Gold</h1>
                <Image src={star} alt='5' className='w-[20px] star' />
                <p className='text-[#cecece] text-[16px] font-semibold'>10 Oct 2021</p>
                <p className='text-white text-[12px] w-[270px]'>English Movies: Watch English Movies 2021, Latest Hollywood Movies Online | English Films</p>
              </div>
            </div>  
          </SwiperSlide>

        </Swiper>
        </div>
      </div>
    )
  }


