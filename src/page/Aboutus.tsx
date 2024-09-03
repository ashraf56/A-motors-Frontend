import AboutHero from "@/components/AboutusComponent/AboutHero";
import Contactus from "@/components/AboutusComponent/Contactus";
import OurHistory from "@/components/AboutusComponent/OurHistory";
import OurTeams from "@/components/AboutusComponent/OurTeams";

const Aboutus = () => {
    return (
        <div>
            <AboutHero/>
            <OurHistory/>
            <OurTeams/>
            <Contactus/>
        </div>
    );
};

export default Aboutus;