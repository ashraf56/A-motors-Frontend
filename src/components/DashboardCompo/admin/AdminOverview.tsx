import { Card } from "@/components/ui/card";

const AdminOverview = () => {
    return (
        <div className="font-CustomFont flex flex-col justify-center items-center w-full">
            <h1 className="text-3xl font-bold pb-10">Admin overview</h1>
            <div className="grid grid-cols-2 gap-3 justify-center  mx-auto">
                <Card className="rounded-none w-96 h-24 text-center items-center flex flex-col justify-center hover:bg-sky-100 transition-all duration-300 ">
                    <h1>Total booking</h1>
                    <p className="font-CustomFont text-5xl font-bold  ">12</p>
                </Card>
                <Card className="rounded-none w-96 h-24 text-center items-center flex flex-col justify-center hover:bg-red-100 transition-all duration-300">
                    <h1>Total Return car</h1>
                    <p className="font-CustomFont text-5xl font-bold ">3</p>
                </Card>
                <Card className="rounded-none w-96 h-24 text-center items-center flex flex-col justify-center hover:bg-green-100 transition-all duration-300">
                    <h1>Total booking</h1>
                    <p className="font-CustomFont text-5xl font-bold ">30</p>

                </Card>
                <Card className="rounded-none w-96 h-24 text-center items-center flex flex-col justify-center hover:bg-yellow-100 transition-all duration-300">
                    <h1>Total booking</h1>
                    <p className="font-CustomFont text-5xl font-bold ">36</p>

                </Card>
            </div>
        </div>
    );
};

export default AdminOverview;