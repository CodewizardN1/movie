import Link from 'next/link'
import { FaAngleLeft } from "react-icons/fa6";
import './movie.css'
import star from '../../../public/Review.png'
import mv from '../../../public/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import Image from 'next/image';
import icon from '../../../public/Vector 196.png'
export default function Movie() {

  return (
    <div className="w-[100%] xl:h-[100vh] base:h-[100%] lg:pb-[20px] moviebg">
      <div className='overlay xl:h-[100vh] base:h-[100%]'></div>

      <div className='md:w-[85%] base:w-[95%] m-auto pt-[100px] con'>
      <div className='flex items-center gap-3'>
          <Link href={'/'}>
          <button className='w-[50px] h-[50px] bg-btn text-white rounded-[15px] flex items-center justify-center'><FaAngleLeft size={'25px'} /></button>
          </Link>
          <h1 className='text-[22px] text-white font-bold'>Back Home</h1>
        </div>

    <div className='flex xl:flex-row base:flex-col base:col-reverse items-center justify-around w-[100%] base:gap-4 xl:gap-0'>
        <div className='flex flex-col gap-4 pt-[50px]'>
          <h1 className='md:text-[45px] base:text-[25px] font-bold text-white'>Loki</h1>
          <Image src={star} alt='5 star' style={{width:"20%"}} />
          <h1 className='text-white'>10 m+ views</h1>
          <Image src={mv} alt='5 star' />
          <h1 className='md:w-[640px] base:w-[90%] text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum natus, a laudantium nam ut temporibus officiis laborum consequuntur quo vero molestiae minus, explicabo corporis, distinctio vitae tenetur error sunt nobis? Accusantium cum dolorum ad ut sed provident rerum obcaecati possimus perspiciatis voluptate nobis libero, excepturi quae placeat eius aliquid aspernatur temporibus reprehenderit adipisci, beatae omnis nisi assumenda! </h1>
          <div className='flex gap-5'>
              <button className='md:w-[160px] base:w-[100px] sm:w-[120px] md:h-[56px] base:h-[48px] bg-btn flex items-center gap-2 justify-center font-semibold md:text-[19px] base:text-[15px] text-[#F9F9F9] md:rounded-[10px] base:rounded-none'><Image className='icon' src={icon} alt='+' /> Watchlist</button>
              <button className='md:w-[190px] base:w-[100px] sm:w-[120px] md:h-[56px] h-[48px] bg-[#F8B319] flex items-center gap-2 justify-center font-bold md:text-[19px] base:text-[15px] text-[#000] md:rounded-[10px] base:border-r-b-r-[10px]'>Watch Now</button>
            </div>
        </div>


        <div className='bg sm:w-[452px] h-[568px] base:w-[90%]'>

        </div>
    </div>
      </div>
    </div>
  )
}
