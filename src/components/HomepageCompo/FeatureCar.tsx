import CarCard from "../Reusable/CarCard";
import Title from "../Reusable/Title";


const featuredCars = [
    {
        id: 1,
        name: "Tesla Model S",
        image: "https://dummyimage.com/600x400/000/fff",
        description: "A luxury electric sedan with exceptional performance, long-range capabilities, and cutting-edge technology.",
        price: 120,
    },
    {
        id: 2,
        name: "Ford Mustang GT",
        image: `https://dummyimage.com/600x400/000/fff`,
        description: "A classic American muscle car that delivers thrilling performance and iconic style.",
        price: 95,
    },
    {
        id: 3,
        name: "BMW X5",
        image: "https://dummyimage.com/600x400/000/fff",
        description: "A premium SUV with a powerful engine, luxurious interior, and advanced safety features.",
        price: 150,
    }

];


const FeatureCar = () => {
    return (
        <div className="font-CustomFont my-5 py-10 mx-auto flex flex-col space-y-4 ">
            <Title name={'Feature Cars'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-2 ">
                {
                    featuredCars.map(fc => (
                        <CarCard key={fc.id} {...fc} />
                    ))
                }
            </div>
        </div>
    );
};

export default FeatureCar;