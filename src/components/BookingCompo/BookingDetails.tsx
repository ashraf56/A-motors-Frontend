/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useGetSingleCarsQuery } from "@/redux/feature/cars/carsApi";
import InnerImageZoom from "react-inner-image-zoom";
import { BoltIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import AddBooking from "./AddBooking";
const BookingDetails = () => {
    const { id: slug } = useParams()
    const { data, isLoading } = useGetSingleCarsQuery(slug as string, { pollingInterval: 3000 })
    console.log(data);

    if (isLoading) {
        return <p>Loading ...</p>
    }
    return (
        <div className="font-CustomFont">
            <Breadcrumb className="px-2 pt-2 text-xl">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="/booking">Bookings</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Car Details</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="lg:flex items-center justify-center gap-2 container font-CustomFont my-5">
                <div className="w-full lg:w-3/5  ">
                    <div>
                        <h1 className="font-semibold  text-3xl flex items-center gap-2 ">
                            {data?.data?.name}

                            {
                                data?.data.isElectric === true ? <BoltIcon className="h-6 w-6 text-yellow-500 animate-pulse duration-300" /> : ''
                            }


                        </h1>
                        <p className="flex gap-2">$<span className="font-semibold text-3xl ">{data?.data?.pricePerHour}<span className="text-base font-normal">/hr</span></span></p>
                    </div>
                    {/* {image} */}
                    <div className="w-full max-w-3xl mt-5 "> <InnerImageZoom src={data?.data?.image} zoomSrc={data?.data?.image}  className="rounded-xl" />
                    </div>


                    <div className="py-1">
                        <h1 className="font-semibold text-md uppercase ">features</h1>
                        <div className="grid grid-cols-3 gap-3 pt-3 pb-3 ">{data?.data?.features.map((cf: any) => (

                            <Button size={'sm'} variant={'outline'} className="uppercase ">{cf}</Button>

                        ))}</div>
                    </div>
                </div>

                <div className="w-full lg:w-3/5 h-full px-5 ">

                    <div>
                        <p className="font-semibold text-md py-1 uppercase ">Insurance Options</p>

                        <p className="text-sm">
                            At A-motors, we prioritize your peace of mind. We offer a range of insurance packages to suit your needs:

                            Basic Coverage: Included with every rental, this plan covers damage to the vehicle in the event of an accident, with a small deductible.

                            Comprehensive Coverage: Provides full coverage for the rental vehicle, including damage, theft, and third-party liability, ensuring a worry-free journey.

                           


                        </p>
                    </div>
                    <div>
                        <p className="font-semibold py-1 text-md uppercase ">description</p>

                        <p className="text-sm">
                            {data?.data?.description}
                        </p>
                    </div>                 
                    <div>
                        <p className="font-semibold text-md py-1 uppercase ">Cancellation Policy</p>

                        <p className="text-sm">We understand that plans can change. A-motors offers a flexible cancellation policy:
                            <br />
                            <span>
                                Free Cancellation:</span> Cancel your reservation up to 48 hours before the pick-up time for a full refund.

                            <span>Late Cancellation:</span> Cancellations made within 48 hours of pick-up will incur a small cancellation fee.

                            <span>No-Show Policy:</span> If you do not show up for your reservation without prior notice, you will be charged the full rental amount.

                        </p>

                    </div>
                    <div>
                        <p className="font-semibold text-md py-1 uppercase ">Color</p>
                        {
                            data?.data.color &&
                            <div>{data?.data.color}</div>
                        }
                    </div>
                    <div className="w-full my-3 flex  flex-col justify-start space-y-3 items-start">
                        <div className="">
                            <p className="font-semibold text-lg"> {data?.data?.name}
                            </p>
                            {data?.data?.status === 'available' ? <p className="text-green-600 text-sm">car is {data?.data?.status}</p> :
                                <p className="text-red-600 text-sm"> car is  {data?.data?.status}</p>
                            }
                           
                           
                         
                        </div>

                         <AddBooking book={data?.data} />
                    </div>


                </div>
            </div>


        </div>
    );
};

export default BookingDetails;