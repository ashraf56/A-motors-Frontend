import  whyus from '@/assets/whyus.jpg'

const Whyus = () => {
    return (
        <div className='py-10'>
             <div className=" font-CustomFont " >
            <h1 className="uppercase text-center text-3xl font-bold ">Why Choose US</h1>
            <p className="text-center text-sm font-light pb-2  uppercase tracking-[0.2em]">We've Got You Covered</p>

            <div className='block lg:flex justify-center items-center mx-auto gap-2 w-full lg:max-w-full'>
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
                    <img src={whyus} alt="why" className='w-96 mx-auto   lg:rounded-s-2xl hover:rounded-e-2xl hover:rounded-s-none duration-300 transition-all ' />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Whyus;