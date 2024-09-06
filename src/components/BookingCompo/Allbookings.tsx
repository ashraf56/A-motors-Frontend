import { useGetallavailableCarsQuery } from "@/redux/feature/cars/carsApi";
import { Card, CardTitle } from "../ui/card";

const Allbookings = () => {
const {data, isLoading}= useGetallavailableCarsQuery(undefined)
console.log(data);

if (isLoading) {
    return <p>Loading...</p>
}

    return (
        <div>
            <div className="grid md:grid-cols-3">
{
    data?.data?.map((b)=>(
        <Card>
            <CardTitle>{b.name}</CardTitle>
        </Card>
    ))
}
            </div>
        </div>
    );
};

export default Allbookings;