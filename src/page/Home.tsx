import CustomerTestimonial from "@/components/HomepageCompo/CustomerTestimonial";
import FeatureCar from "@/components/HomepageCompo/FeatureCar";
import Hero from "@/components/HomepageCompo/Hero";
import Whyus from "@/components/HomepageCompo/Whyus";

const Home = () => {
    return (
        <div className=" w-full">
          
     <Hero></Hero>
     <FeatureCar/>
     <Whyus/>
     <CustomerTestimonial/>
        </div>
    );
};

export default Home;