import imgs from '@/assets/Hero1.jpg'
import { Button } from '../ui/button';
const Hero = () => {
    return (
        <div className='w-full  flex flex-col  h-[70vh] items-center   justify-center  font-CustomFont' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 0.5)),url(${imgs})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='mb-5 w-full  max-w-4xl    text-white text-center'>

                <p className=' pb-3 text-lg font-light font-CustomFont uppercase tracking-[0.1m]'> Experience the Road Like Never Before </p>
                <h1 className='font-bold font-CustomFont uppercase  text-3xl md:text-3xl pb-4 tracking-[0.1m]'>Your Ultimate Destination for Quality Vehicle</h1>

                <div className='flex w-full bg-white h-14 justify-between px-2 gap-2   items-center'>
                    <input type="text" placeholder="Search now" className='bg-white h-12 w-full outline-none text-black  px-2' />
                    <Button size={'default'} className=' bg-[#BC274B] h-12' >Book now</Button>
                </div>



            </div>


        </div>
    );
};

export default Hero;