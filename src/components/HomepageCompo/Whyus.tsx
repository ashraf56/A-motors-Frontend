import whyus from '@/assets/whyus.jpg'
import Title from '../Reusable/Title';

const Whyus = () => {
    return (
        <div className='py-10'>
            <div className=" font-CustomFont " >
                <Title name={'Why Choose US ?'} />

                <div className='block lg:flex justify-center pt-10 items-center mx-auto gap-2 w-full lg:max-w-full'>
                    <div className='w-full lg:w-1/2 px-2'>
                        <h3 className='text-xl font-bold pb-2'>Best Prices Guaranteed</h3>
                        <p>
                            We pride ourselves on offering the most competitive rates in the industry. With us, you’re always getting the best value for your money.We take pride in maintaining our fleet to the highest standards. Every vehicle undergoes regular inspections and thorough cleaning to ensure it meets our strict quality and safety guidelines. When you rent with us, you can drive with peace of mind, knowing you’re in a well-maintained, reliable vehicle.
                        </p>
                        <h3 className='text-xl font-bold pb-2 pt-2'>Wide Selection of Vehicles</h3>
                        <p>
                            We cater to every type of traveler. Whether you’re looking for an economical compact car for your solo adventure, a luxurious sedan for business trips, or a spacious SUV for a family vacation, our diverse fleet has something for everyone. From top-tier brands to budget-friendly options, we ensure you have access to the perfect vehicle to meet your needs.
                        </p>
                        <h3 className='text-xl font-bold pb-2 pt-2'>24/7 Customer Support</h3>
                        <p>
                            Your satisfaction is our top priority. That’s why our customer support team is available 24/7 to assist you at any time, day or night. Whether you have questions about your booking, need help on the road, or want to make last-minute changes, our friendly and knowledgeable team is always here to help, ensuring a seamless rental experience from start to finish.
                        </p>
                    </div>
                    <div >
                        <img src={whyus} alt="why" className='w-96 mx-auto  rounded-bl-[200px] rounded-tr-[200px] hover:rounded-br-[200px] hover:rounded-tl-[200px] hover:rounded-bl-none hover:rounded-tr-none duration-500 ease-in transition-all ' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Whyus;