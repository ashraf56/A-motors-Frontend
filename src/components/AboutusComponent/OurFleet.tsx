import { Avatar } from "@radix-ui/react-avatar";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Title from "../Reusable/Title";


const fleetData = [
    {
        title: "Economy Cars",
        description: "Perfect for those who value efficiency and affordability, our economy cars are ideal for city driving and short trips. Enjoy great fuel economy and easy maneuverability without compromising on comfort."
    },
    {
        title: "Luxury Cars",
        description: "Indulge in elegance and sophistication with our luxury car options. Experience the highest level of comfort, advanced features, and a smooth driving experience, whether for a special occasion or a premium travel experience."
    },
    {
        title: "SUVs",
        description: "For those who need more space and versatility, our range of SUVs offers plenty of room for families, adventures, and extra cargo. Enjoy a commanding view of the road and the capability to handle various terrains with ease."
    },
    {
        title: "Premium Vehicles",
        description: "Our premium vehicles combine luxury with performance, offering a high-end driving experience with advanced technology and superior comfort. Perfect for those who want to travel in style and make a statement."
    },
    {
        title: "Electric Vehicles",
        description: "Embrace sustainability with our selection of electric vehicles. Enjoy eco-friendly driving with zero emissions and cutting-edge technology that offers a quiet and efficient ride."
    }
];


const OurFleet = () => {
    return (
        <div className="font-CustomFont flex flex-col bg-gradient-to-r from-[#ebf4f5] to-[#d3f3f1] py-10">
            <Title name='Our Fleet'/>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 mx-auto px-4 py-10">
                {
                    fleetData.map(t => (
                        <Card className=' w-[300px] mx-auto   h-auto '>

                            <CardHeader className="flex">
                                <Avatar className="w-full ">
                                    
                                </Avatar>
                                <CardTitle>
                                    {t.title}
                                </CardTitle>
                                <CardDescription>{t.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};

export default OurFleet;