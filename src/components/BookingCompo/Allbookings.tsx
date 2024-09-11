/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetallavailableCarsQuery } from "@/redux/feature/cars/carsApi";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Allbookings = () => {
const {data, isLoading}= useGetallavailableCarsQuery(undefined,{pollingInterval:3000})
console.log(data);

if (isLoading) {
    return <p>Loading...</p>
}

    return (
        <div className="font-CustomFont my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto px-10 gap-3">
{
    data?.data?.map((bs:any)=>(
        <Card className=' container    gap-0 items-center  max-w-2xl  h-autofont-CustomFont'>
      <CardHeader>
           <div className="rounded-full pb-2 ">
            <img src={bs.image} className="w-full  object-contain rounded-3xl "/>
           </div>
     
        
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
        <Button variant={'outline'}>
                        <Link to={`/booking/${bs._id}`}>Book now</Link>
                    </Button>
        </CardFooter>

    </Card>
    ))
}
            </div>
            
        </div>
    );
};

export default Allbookings;