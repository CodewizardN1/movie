import Image from 'next/image'
import { FaChevronLeft , FaChevronRight} from "react-icons/fa";
import img1 from '../../../public/Picture (6).png'
import img2 from '../../../public/Picture (5).png'
import pro from '../../../public/Progress.png'
import chev from '../../../public/Vector 59.png'
import bell from '../../../public/bell-04.png'
import user from '../../../public/user-profile-02.png'
import icon from '../../../public/Vector 196.png'
import thril from '../../../public/Thriller.png'
import drama from '../../../public/Drama.png'
import sup from '../../../public/Superhero.png'
import sit from '../../../public/Sitcom.png'
import './right.css'
import { BsSliders2 } from 'react-icons/bs';
import Link from 'next/link';
export default function Right({rowId, rowid}){
    const slideLeft = () => {
        let slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 200;
      };
      const slideRight = () => {
        let slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 200;
      };
    const slideLeft2 = () => {
        let slider2 = document.getElementById('slider2' + rowid);
        slider2.scrollLeft = slider2.scrollLeft - 200;
      };
      const slideRight2 = () => {
        let slider2 = document.getElementById('slider2' + rowid);
        slider2.scrollLeft = slider2.scrollLeft + 200;
      };
    const slideLeft3 = () => {
        let slider2 = document.getElementById('slider2' + 3);
        slider2.scrollLeft = slider2.scrollLeft - 200;
      };
      const slideRight3 = () => {
        let slider2 = document.getElementById('slider2' + 3);
        slider2.scrollLeft = slider2.scrollLeft + 200;
      };
    
    return (
        <div className="bg-[rgb(0,0,0)] w-[100%] 2xl:h-[100vh] base:h-[100%] pt-[40px]">
            <div className='flex justify-between items-center'>
            <button className='w-[57px] h-[57px] bg-btn flex items-center justify-center rounded-[15px]'><Image src={bell} alt='+' /></button>

                <div className='flex items-center gap-2 pr-7'>
                    <h1 className='text-white flex items-center gap-1'>Anastasia <Image src={chev} alt='bot' /></h1>
                    <button className='w-[57px] h-[57px] bg-btn flex items-center justify-center rounded-[15px]'><Image src={user} alt='+' /></button>
                </div>
            </div>

            <div className='pt-[40px] pr-7'>
                <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-white text-[28px] text-left '>Continue</h1>
                    <h1 className='text-orange-400 flex items-center text-[23px] cursor-pointer'> <h1 onClick={slideLeft}><FaChevronLeft /></h1> <h1 onClick={slideRight}><FaChevronRight /></h1></h1>
                </div>
                <Link href={'/movies'}>
                <h2 className='flex items-center text-white cursor-pointer'>See more <FaChevronRight /></h2>
                </Link>
                </div>

                <div
          id={'slider' + rowId}
          className='pt-[20px] over w-[400px] h-full flex gap-[4rem] overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative'
        >
            <div className='w-[210px] h-[129px] bg-[#16181E] flex items-center gap-2 rounded-[8px]'>
                <div className='flex flex-col pt-1 pl-2 gap-2'>
                    <Image src={img1} alt='img' />
                    <button style={{ backgroundColor: 'rgba(249, 249, 249, 0.2)' }} className='w-[55px] h-[40px] rounded-[8px] text-white'>Drop</button>
                </div>  

                <div className='flex flex-col gap-1'>
                    <h1 className='pt-1 text-white'>WandaVision</h1>
                    <p style={{ color: 'rgba(249, 249, 249, 0.7)' }} className='text-[14px]'>1 Episode left</p>
                    <Image src={pro} alt='pro' />
                    <button className='bg-[#F8B319] w-[125px] h-[40px] text-black mt-1 rounded-[8px]'>Watch</button>
                </div>
            </div>
            <div className='w-[210px] h-[129px] bg-[#16181E] flex items-center gap-2 rounded-[8px]'>
                <div className='flex flex-col pt-1 pl-2 gap-2'>
                    <Image src={img2} alt='img' />
                    <button style={{ backgroundColor: 'rgba(249, 249, 249, 0.2)' }} className='w-[55px] h-[40px] rounded-[8px] text-white'>Drop</button>
                </div>  

                <div className='flex flex-col gap-1'>
                    <h1 className='pt-1 text-white'>WandaVision</h1>
                    <p style={{ color: 'rgba(249, 249, 249, 0.7)' }} className='text-[14px]'>1 Episode left</p>
                    <Image src={pro} alt='pro' />
                    <button className='bg-[#F8B319] w-[125px] h-[40px] text-black mt-1 rounded-[8px]'>Watch</button>
                </div>
            </div>
            <div className='w-[210px] h-[129px] bg-[#16181E] flex items-center gap-2 rounded-[8px]'>
                <div className='flex flex-col pt-1 pl-2 gap-2'>
                    <Image src={img1} alt='img' />
                    <button style={{ backgroundColor: 'rgba(249, 249, 249, 0.2)' }} className='w-[55px] h-[40px] rounded-[8px] text-white'>Drop</button>
                </div>  

                <div className='flex flex-col gap-1'>
                    <h1 className='pt-1 text-white'>WandaVision</h1>
                    <p style={{ color: 'rgba(249, 249, 249, 0.7)' }} className='text-[14px]'>1 Episode left</p>
                    <Image src={pro} alt='pro' />
                    <button className='bg-[#F8B319] w-[125px] h-[40px] text-black mt-1 rounded-[8px]'>Watch</button>
                </div>
            </div>
          
        </div>
            
            </div>




            <div className='pt-[30px] pr-7'>
                <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-white text-[28px] text-left '>Top rated</h1>
                    <h1 className='text-orange-400 flex items-center text-[23px] cursor-pointer '> <h1 onClick={slideLeft2}><FaChevronLeft /></h1> <h1 onClick={slideRight2}><FaChevronRight /></h1></h1>
                </div>
                <Link href={'/movies'}>
                <h2 className='flex items-center text-white cursor-pointer'>See more <FaChevronRight /></h2>
                </Link>
                </div>

                <div
          id={'slider2' + rowid}
          className='pt-[20px] over w-[400px] h-full flex gap-[4rem] overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative'
        >
            <div className='w-[250px] h-[129px] bgimg11 rounded-[8px]'>
                <h1 className='text-white pl-3 pt-2 text-[20px]'>Supernatural</h1>

                <div className='flex justify-between px-4 pt-4'>
                <h1 className='text-[#cbc9c9]'>49 Ep</h1>
                <h1 className='text-[#cbc9c9]'>Fantasy</h1>
              </div>

              <div className='px-4 flex gap-2 justify-between items-center pt-[4px]'>
                <button className='md:w-[48px] base:w-[35px] md:h-[42px] base:h-[42px] bg-btn flex items-center justify-center rounded-[7px]'><Image src={icon} alt='+' /></button>
                <button className='md:w-[125px] base:w-[70px] rounded-[7px] md:h-[42px] base:h-[48px] bg-[#F8B319] text-black font-bold'>Watch</button>
              </div>
            </div>
            <div className='w-[250px] h-[129px] bgimg12 rounded-[8px]'>
                <h1 className='text-white pl-3 pt-2 text-[20px]'>Supernatural</h1>

                <div className='flex justify-between px-4 pt-4'>
                <h1 className='text-[#cbc9c9]'>49 Ep</h1>
                <h1 className='text-[#cbc9c9]'>Fantasy</h1>
              </div>

              <div className='px-4 flex justify-between gap-2 items-center pt-[4px]'>
                <button className='md:w-[48px] base:w-[35px] md:h-[42px] base:h-[42px] bg-btn flex items-center justify-center rounded-[7px]'><Image src={icon} alt='+' /></button>
                <button className='md:w-[125px] base:w-[70px] rounded-[7px] md:h-[42px] base:h-[48px] bg-[#00B9AE] text-black font-bold'>Watch</button>
              </div>
            </div>
            <div className='w-[250px] h-[129px] bgimg12 rounded-[8px]'>
                <h1 className='text-white pl-3 pt-2 text-[20px]'>Supernatural</h1>

                <div className='flex justify-between px-4 pt-4'>
                <h1 className='text-[#cbc9c9]'>49 Ep</h1>
                <h1 className='text-[#cbc9c9]'>Fantasy</h1>
              </div>

              <div className='px-4 flex justify-between gap-2 items-center pt-[4px]'>
                <button className='md:w-[48px] base:w-[35px] md:h-[42px] base:h-[42px] bg-btn flex items-center justify-center rounded-[7px]'><Image src={icon} alt='+' /></button>
                <button className='md:w-[125px] base:w-[70px] rounded-[7px] md:h-[42px] base:h-[48px] bg-[#00B9AE] text-black font-bold'>Watch</button>
              </div>
            </div>
            
          
        </div>
            
            </div>





            <div className='pt-[30px] pr-7'>
                <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <h1 className='text-white text-[28px] text-left '>Genres</h1>
                    <h1 className='text-orange-400 flex items-center text-[23px] cursor-pointer '> <h1 onClick={slideLeft3}><FaChevronLeft /></h1> <h1 onClick={slideRight3}><FaChevronRight /></h1></h1>
                </div>
                <Link href={'/movies'}>
                <h2 className='flex items-center text-white cursor-pointer'>See more <FaChevronRight /></h2>
                </Link>
                </div>

                <div
          id={'slider2' + '3'}
          className='pt-[20px] over w-[400px] h-full flex gap-[4rem] overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative'
        >
            <div className='w-[250px] h-[100%] flex flex-col gap-5 rounded-[8px]'>
                <div className='img1'></div>
                <div className='img2'></div>
            </div>
            <div className='w-[250px] h-[100%] flex flex-col gap-5 rounded-[8px]'>
                <div className='img3'></div>
                <div className='img4'></div>
            </div>
            <div className='w-[250px] h-[100%] flex flex-col gap-5 rounded-[8px]'>
                <div className='img2'></div>
                <div className='img1'></div>
            </div>
            
          
        </div>
            
            </div>
        </div>
    )
}