/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetallavailableCarsQuery } from "@/redux/feature/cars/carsApi";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import AddBooking from "./AddBooking";

const Allbookings = () => {
const {data, isLoading}= useGetallavailableCarsQuery(undefined)
console.log(data);

if (isLoading) {
    return <p>Loading...</p>
}

    return (
        <div className="font-CustomFont">
            <div className="grid grid-cols-1 mx-auto px-10 gap-3">
{
    data?.data?.map((bs:any)=>(
        <Card className=' container    gap-0 items-center  max-w-2xl  h-autofont-CustomFont'>
      
           <div className="rounded-2xl pt-2">
            <img src={bs.image} className="w-full rounded-full"/>
           </div>
     
        <CardHeader>
            <CardTitle>
                {bs.name}
            </CardTitle>
            <CardDescription className=" font-light">$ {bs.pricePerHour}</CardDescription>
            <CardDescription className=" font-light animate-pulse text-green-700">{bs.status}</CardDescription>
            <CardDescription className=" font-light">{bs.description}</CardDescription>
            <CardContent>
                <div className="">
                 
                </div>
            </CardContent>
        </CardHeader>
        <CardFooter className='items-center '>
            <AddBooking/>
        </CardFooter>

    </Card>
    ))
}
            </div>
        </div>
    );
};

export default Allbookings;