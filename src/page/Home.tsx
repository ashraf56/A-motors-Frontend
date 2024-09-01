import CustomerTestimonial from "@/components/HomepageCompo/CustomerTestimonial";
import Hero from "@/components/HomepageCompo/Hero";
import Whyus from "@/components/HomepageCompo/Whyus";

const Home = () => {
    return (
        <div className=" w-full">
          
     <Hero></Hero>
     <Whyus/>
     <CustomerTestimonial/>
        </div>
    );
};

export default Home;