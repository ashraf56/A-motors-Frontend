/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetallCarsQuery } from "@/redux/feature/cars/carsApi";
import CarCard from "../Reusable/CarCard";
import Title from "../Reusable/Title";




const FeatureCar = () => {
    const { data } = useGetallCarsQuery(undefined)
    return (
        <div className="font-CustomFont my-5 py-10 mx-auto flex flex-col space-y-4 ">
            <Title name={'Feature Cars'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 ">
                {
                    data?.data?.slice(0,3).map((fc:any) => (
                        <CarCard key={fc.id} {...fc} />
                    ))
                }
            </div>
        </div>
    );
};

export default FeatureCar;