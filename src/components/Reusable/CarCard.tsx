/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom";
const CarCard = (fc:any) => {
    return (
        <div>
             <div >
            <Card className=" w-full md:w-[350px] h-full   font-CustomFont ">
                <CardHeader>
                    <div className="mx-auto">
                        <img src={fc.image} alt="" className="min-h-full h-52 mb-2 rounded-lg" />
                    </div>
                    <CardTitle>${fc.price}</CardTitle>
                    <CardDescription >{fc.description}</CardDescription>
                </CardHeader>
                <CardFooter className=" ">
                    <Button variant={'outline'}>
                        <Link to={`/`}>View Detail</Link>
                    </Button>
                </CardFooter>
            </Card>

        </div>
        </div>
    );
};

export default CarCard;