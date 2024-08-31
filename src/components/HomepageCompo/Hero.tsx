import imgs from '@/assets/Hero1.jpg'
const Hero = () => {
    return (
        <div className='w-full h-[90vh] flex flex-col p-5  items-start  justify-center bg-black ' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0),rgba(0, 0, 0, 0.4)),url(${imgs})`, backgroundSize: 'cover', backgroundPosition:'center'}}>
             <div className='mb-5 w-full max-w-2xl px-10 lg:mb-28 text-white'>
              
                <h1 className='font-bold font-CustomFont uppercase text-3xl md:text-6xl pb-4 tracking-[0.1m]'>Your Ultimate Destination for Quality Vehicle</h1>
                <p className='  text-lg font-light font-CustomFont uppercase tracking-[0.1m]'> Experience the Road Like Never Before </p>

<div>
    
</div>



            </div>


        </div>
    );
};

export default Hero;