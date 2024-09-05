import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { StarIcon } from "@radix-ui/react-icons";
import Title from "../Reusable/Title";

const customerReviews = [
    {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        comment: "Great service! The car was in excellent condition and the process was smooth.",
        date: "2024-08-25"
    },
    {
        id: 2,
        name: "Jane Smith",
        rating: 5,
        comment: "Amazing experience! The staff was friendly and the car met all my expectations.",
        date: "2024-08-20"
    },
    {
        id: 3,
        name: "Mike Johnson",
        rating: 4,
        comment: "Good service overall, but the car could have been a bit cleaner.",
        date: "2024-08-18"
    },
    {
        id: 4,
        name: "Mike Johnson",
        rating: 4,
        comment: "Good service overall, but the car could have been a bit cleaner.",
        date: "2024-08-18"
    }
];



const CustomerTestimonial = () => {
    return (
        <div className="font-CustomFont py-10 ">
            <Title name={'Customer Testimonials'} />

            <Carousel
                className="w-full max-w-full font-CustomFont overflow-x-hidden md:overflow-visible  md:max-w-2xl  mx-auto pt-10" >
                <CarouselContent  >
                    {customerReviews.map(({ id, name, comment, rating, date }) => (
                        <CarouselItem key={id}  >
                            <div className="p-1 h-full ">
                                <Card className="h-full ">
                                    <CardContent className="flex flex-col  h-full items-center  justify-center p-6">
                                        <h1 className=" text-lg sm:text-4xl font-light text-center py-3 ">{comment}</h1>
                                        <p className="flex justify-center gap-1 py-3"><StarIcon className="h-5 w-5 text-yellow-600" />
                                            {rating}</p>
                                        <p className="font-semibold pt-2">{name}</p>
                                        <span>{date}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default CustomerTestimonial;