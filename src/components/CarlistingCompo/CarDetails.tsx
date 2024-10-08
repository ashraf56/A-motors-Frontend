/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetSingleCarsQuery } from "@/redux/feature/cars/carsApi";
import { BoltIcon } from "@heroicons/react/24/outline";
import { Link, useParams } from "react-router-dom";
import { Button } from "../ui/button";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import InnerImageZoom from "react-inner-image-zoom";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'

const CarDetails = () => {
    const { id: slug } = useParams()
    const { data, isLoading } = useGetSingleCarsQuery(slug as string)

    if (isLoading) {
        return <p>Loading ...</p>
    }
    return (
        <div>
            <Breadcrumb className="px-2 pt-2 text-xl">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="/">Home</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink>
                            <Link to="/carlist">Car List</Link>
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
                    <div className="w-full max-w-3xl mt-5 "> <InnerImageZoom src={data?.data?.image} zoomSrc={data?.data?.image} className="rounded-xl" /></div>

                </div>

                <div className="w-full lg:w-3/5 h-full px-5 ">

                    <div className="py-1">
                        <h1 className="font-semibold text-md uppercase ">features</h1>
                        <div className="grid grid-cols-4 gap-3 pt-3  ">{data?.data?.features.map((cf: any) => (

                            <Button size={'sm'} variant={'outline'} className="rounded-full  ">#{cf}</Button>

                        ))}</div>
                    </div>

                    <div>
                        <h1 className="font-semibold text-md uppercase ">description</h1>

                        <p>
                            {data?.data?.description}
                        </p>
                    </div>


                    <div>
                        <p className="font-semibold text-md py-1 uppercase ">Color</p>
                        {
                            data?.data.color &&
                            <div>{data?.data.color}</div>
                        }
                    </div>


                    <div className="w-full my-3 flex justify-between  items-center">
                        <div >
                            <p className="font-semibold text-lg"> {data?.data?.name}
                            </p>
                            {data?.data?.status === 'available' ? <p className="text-green-600 text-sm">car is {data?.data?.status}</p> :
                                <p className="text-red-600 text-sm"> car is  {data?.data?.status}</p>
                            }
                        </div> <Link to={'/booking'}><Button size={'default'} className=" bg-[#BC274B]  font-CustomFont" >Book now</Button>
                        </Link> 
                    </div>


                </div>
            </div>

        </div>

    );
};

export default CarDetails;