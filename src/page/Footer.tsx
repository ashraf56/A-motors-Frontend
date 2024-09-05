import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <footer >
            <div className="font-CustomFont  grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  bg-gradient-to-r from-[#ebf4f5] to-[#d3f3f1] p-10 gap-5 mx-auto">
                <div>
                    <div><img src={logo} width={50} height={50} /></div>
                    <p className=" font-CustomFont font-extrabold uppercase text-2xl tracking-widest">A-motors</p>

                    <p className='text-sm pt-1'>Experience the freedom of the road with A-Motors. We provide top-quality vehicles and exceptional customer service for a smooth and hassle-free journey.</p>
                </div>


                <div className="flex flex-col gap-y-4 mx-auto">
                    <h4 className="font-bold text-xl">Contact Us</h4>
                    <p className='text-sm'>Email: info@amotors123.com</p>
                    <p className='text-sm'>Phone: (123) 956-7890</p>
                    <p className='text-sm'>Address: 10 Adventure Lane, Outdoor City, CT 98765</p>

                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="font-bold text-xl">Customer Service</h4>
                    <p className='text-sm'>FAQ</p>
                    <p className='text-sm'> Car Rental Terms</p>
                    <p className='text-sm'>Privacy Policy</p>
                    <p className='text-sm'> Terms & Conditions</p>

                </div>
                <div className="flex flex-col gap-y-4">
                    <h4 className="font-bold text-xl">Follow Us</h4>
                    <p className='text-sm'>Facebook</p>
                    <p className='text-sm' >Youtube</p>
                    <p className='text-sm'>Twiter</p>
                    <p className='text-sm'>Linkedin</p>
                </div>
            </div>
            <div className='bg-gradient-to-r to-[#ebf4f5] from-[#d3f3f1]  text-sm text-center flex gap-4 justify-center mx-auto  font-CustomFont py-5'>
            <p>&copy; 2024 A-motors. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;