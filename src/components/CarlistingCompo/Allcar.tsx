/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetallCarsQuery } from "@/redux/feature/cars/carsApi";
import CarCard from "../Reusable/CarCard";

const Allcar = () => {
    const { data } = useGetallCarsQuery(undefined)
    console.log(data);

    return (
        <div className="font-CustomFont flex flex-col justify-center items-center my-9">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2">
                {
                    data?.data?.map((c: any) => (
                        <CarCard {...c} key={c._id} />
                    ))
                }
            </div>
        </div>
    );
};

export default Allcar;