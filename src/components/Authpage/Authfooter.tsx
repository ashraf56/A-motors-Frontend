import { Link } from "react-router-dom";

const Authfooter = () => {
    return (
        <footer >
        
        <div className=' bg-black text-sm text-center flex gap-4 justify-center mx-auto text-white font-CustomFont py-5'>
        <p className='text-sm'><Link to={'/'}>Go to home</Link></p>
        <p className='text-sm'>Privacy Policy</p>
        <p className='text-sm'> Terms & Conditions</p> 
        </div>
    </footer>
    );
};

export default Authfooter;
