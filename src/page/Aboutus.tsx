import AboutHero from "@/components/AboutusComponent/AboutHero";
import Contactus from "@/components/AboutusComponent/Contactus";
import OurFleet from "@/components/AboutusComponent/OurFleet";
import OurHistory from "@/components/AboutusComponent/OurHistory";
import OurTeams from "@/components/AboutusComponent/OurTeams";
import Valuescomitment from "@/components/AboutusComponent/Valuescomitment";

const Aboutus = () => {
    return (
        <div>
            <AboutHero/>
            <OurHistory/>
            <OurTeams/>
            <OurFleet/>
            <Valuescomitment/>
            <Contactus/>
        </div>
    );
};

export default Aboutus;