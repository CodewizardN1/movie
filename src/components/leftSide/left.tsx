import Image from 'next/image'
import logo from '../../../public/Logo.svg'
import icon from '../../../public/Icon.png'
import cel from '../../../public/Celebrities.png'
import award from '../../../public/Award.png'
import dis from '../../../public/Discover.png'
import rec from '../../../public/Recent.png'
import top from '../../../public/Top Rated.png'
import down from '../../../public/Downloaded.png'
import play from '../../../public/Playlists.png'
import watch from '../../../public/Watchlist.png'
import com from '../../../public/Completed.png'
import set from '../../../public/Settings.png'
import log from '../../../public/Log Out.png'

import Leftprops from '../leftProps'
export default function Left(){
 return(
   <div className='left bg-[#000000] w-[100%] md:h-[100vh] base:w-[100%] base:pb-6 base:overflow-hidden  '>
      <div className='container md:pt-[40px] base:pt-1 '>
         <div><Image src={logo} alt='image' /></div>

         <div className='md:pt-[50px] base:pt-4'>
            <h3 className='text-[#F9F9F9]'>Menu</h3>
            <div className='flex flex-col gap-4 pt-5'>
               <Leftprops img={icon} text={'Home'} color={'#F8B319'} />
               <Leftprops img={dis} text={'Disover'} color={'#F9F9F9'} />
               <Leftprops img={award} text={'Award'} color={'#F9F9F9'} />
               <Leftprops img={cel} text={'Celebrities'} color={'#F9F9F9'} />
            </div>
         </div>
         <div className='md:pt-[50px] base:pt-6'>
            <h3 className='text-[#F9F9F9]'>Library</h3>
            <div className='flex flex-col gap-4 pt-5'>
               <Leftprops img={rec} text={'Recent'} color={'#F9F9F9'} />
               <Leftprops img={top} text={'Top Rated'} color={'#F9F9F9'} />
               <Leftprops img={down} text={'Downloaded'} color={'#F9F9F9'} />
               <Leftprops img={play} text={'Playlists'} color={'#F9F9F9'} />
               <Leftprops img={watch} text={'Watchlists'} color={'#F9F9F9'} />
               <Leftprops img={com} text={'Completed'} color={'#F9F9F9'} />
            </div>
         </div>

         <div className='md:pt-[50px] base:pt-5'>
            <h3 className='text-[#F9F9F9]'>General</h3>
            <div className='flex flex-col gap-4 pt-5'>
               <Leftprops img={set} text={'Settings'} color={'#F9F9F9'} />
               <Leftprops img={log} text={'Log out'} color={'#F9F9F9'} />
            </div>
         </div>
      </div>
   </div>
 )
}