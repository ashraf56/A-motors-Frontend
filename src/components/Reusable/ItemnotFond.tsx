/* eslint-disable @typescript-eslint/no-explicit-any */
import noit from '@/assets/noitem.svg'
const ItemnotFond = ({message}:string|null|any) => {
    return (
        <div className='flex font-CustomFont justify-center items-center '>
            <div className='w-full justify-center text-center'>
             <img src={noit} alt="t" className='w-80' />
             <h1 className='uppercase font-bold'>{message}</h1>
            </div>
        </div>
    );
};

export default ItemnotFond;