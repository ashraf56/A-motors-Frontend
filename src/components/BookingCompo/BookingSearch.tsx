import { Button } from "../ui/button";

const BookingSearch = () => {
    return (
        <div className='w-full  flex flex-col   items-center   justify-center  font-CustomFont'>
        <div className='mb-5 w-full  max-w-4xl font-CustomFont   text-center'>
            <div className='flex w-full max-w-3xl mx-auto mt-2 border-2 h-14 justify-between px-2 gap-2   items-center'>
                <input type="text" placeholder="Search now" className='bg-white h-12 w-full outline-none text-black  px-2' />
                <Button size={'default'} className=' bg-[#BC274B] h-12 font-CustomFont' >Search now</Button>
            </div>



        </div>


    </div>
    );
};

export default BookingSearch;