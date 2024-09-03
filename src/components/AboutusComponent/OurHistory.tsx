import historyimg from '@/assets/history.jpg'
import Title from '../Reusable/Title';
const OurHistory = () => {
    return (
        <div className="font-CustomFont  my-10">
            <Title name='Our History' />
            <div className=' w-full max-w-7xl pt-10 lg:flex gap-3 items-center justify-center px-10 mx-auto'>
                <div  className='w-full lg:w-1/2'>
                    <h1 className='text-xl font-semibold pb-2'>Founding Year</h1>
                    <p>Founded in 2024, A-motors was born out of a passion for providing top-tier automotive services and a commitment to customer satisfaction. From our humble beginnings, we have grown into a trusted name in the industry, serving countless satisfied customers.
                    </p><br />
                    <h1 className='text-xl font-semibold pb-2'>Mission</h1>
                    <p> Our mission has always been to deliver quality, reliability, and excellence in every vehicle we offer. We believe in building lasting relationships with our customers by providing unparalleled service and value.</p>
                </div>
                <div className='w-full lg:w-1/2 '>
                    <img src={historyimg} alt="h" className='w-96 rounded-t-full mx-auto rounded-b-full' />
                </div>
                <div  className='w-full lg:w-1/2'>
                    <h1 className='text-xl font-semibold pb-2'>Vision</h1>
                    <p> At A-motors, our vision is to drive the future of automotive services by continually innovating and exceeding customer expectations. We strive to be the first choice for all your automotive needs, setting new standards in the industry.</p> <br />

                    <h1 className='text-xl font-semibold pb-2'>Commitment to Excellence</h1>
                    <p>At A-motors, our commitment to excellence drives everything we do. We believe that by consistently delivering superior products and services, we can make a lasting impact on the lives of our customers.</p>

                </div>
            </div>
        </div>
    );
};

export default OurHistory;