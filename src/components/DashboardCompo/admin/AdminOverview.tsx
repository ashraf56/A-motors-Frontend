import { Card } from "@/components/ui/card";
import { useGetallavailableCarsQuery, useGetallCarsQuery } from "@/redux/feature/cars/carsApi";
import { TruckIcon } from "@heroicons/react/24/outline";

const AdminOverview = () => {
    const { data } = useGetallCarsQuery(undefined,{pollingInterval:3000})
    const { data: availablecars } = useGetallavailableCarsQuery(undefined,{pollingInterval:3000})
    return (
        <div className="font-CustomFont flex flex-col justify-center items-center w-full">
            <h1 className="text-3xl font-bold pb-10">Admin overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center  mx-auto">
                <Card className="rounded-none w-96 h-32 md:h-52 text-center items-center flex flex-col justify-center hover:bg-sky-100 transition-all duration-300 ">
                <div className="flex gap-1 justify-center items-center">
                        <p><TruckIcon className="w-7 h-7" /></p> <p>Total car</p>
                    </div>                    <p className="font-CustomFont text-5xl font-bold  ">{data?.data?.length}</p>
                </Card>
                <Card className="rounded-none w-96 h-32 md:h-52  text-center items-center flex flex-col justify-center hover:bg-red-100 transition-all duration-300">
                    <div className="flex gap-1 justify-center items-center">
                        <p><TruckIcon className="w-7 h-7" /></p> <p>Available car</p>
                    </div>
                    <p className="font-CustomFont text-5xl font-bold ">{availablecars?.data?.length}</p>
                </Card>
                <Card className="rounded-none w-96 h-32 md:h-52 text-center items-center flex flex-col justify-center hover:bg-green-100 transition-all duration-300">
                    <h1>Total booking</h1>
                    <p className="font-CustomFont text-5xl font-bold ">30</p>

                </Card>
                <Card className="rounded-none w-96 h-32 md:h-52 text-center items-center flex flex-col justify-center hover:bg-yellow-100 transition-all duration-300">
                    <h1>Total User</h1>
                    <p className="font-CustomFont text-5xl font-bold ">36</p>

                </Card>
            </div>
        </div>
    );
};

export default AdminOverview;