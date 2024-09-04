
import val from '@/assets/values.jpg'
import Title from '../Reusable/Title';

const Valuescomitment = () => {
    return (
        <div className=" font-CustomFont my-10" >
            <Title name='Values & Commitment' />

            <div className='block py-10 lg:flex justify-center items-center mx-auto gap-0.5 w-full lg:max-w-full'>
                <div className='w-full lg:w-1/2'>
                    <h3 className='text-xl font-semibold pb-2'>Our Values & Commitment</h3>
                    <p>
                        At A-motors, our core values guide everything we do. We are committed to delivering exceptional customer service, ensuring that every interaction is positive, helpful, and tailored to meet your needs.
                    </p>
                    <br />
                    <h1 className='text-xl font-semibold pb-2'>Customer-Centric Approach</h1>
                    <p> We prioritize our customers above all else, striving to exceed expectations and build lasting relationships based on trust, respect, and transparency.

                    </p><br />
                    <h1 className='text-xl font-semibold pb-2'>Sustainability</h1>
                    <p> We are dedicated to minimizing our environmental impact. Through sustainable practices and eco-friendly initiatives, we aim to contribute to a healthier planet while providing top-quality products and services.

                    </p><br />
                    <h1 className='text-xl font-semibold pb-2'>Integrity</h1>
                    <p> We conduct our business with the highest ethical standards. Honesty, fairness, and accountability are the cornerstones of our operations.

                    </p><br />

                </div>
                <div>
                    <img src={val} alt="val" className='w-96 mx-auto rounded-2xl' />
                </div>
            </div>
        </div>
    );
};

export default Valuescomitment;