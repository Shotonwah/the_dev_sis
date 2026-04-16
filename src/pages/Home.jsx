import Hero from '../components/Hero';
import ProjectPreview from "../components/ProjectPreview";
import SkillsPreview from '../components/SkillsPreview';
import ContactMe from "../components/ContactMe";
import DesignProcess from "../components/DesignProcess";
import Services from "../components/Services";
import FadeIn from "../components/FadeIn";
import Nhero from "../components/Nhero";

function Home() {
    return(
        <>
        <div>
            <Hero/>
            <FadeIn>
                <Nhero/>
            </FadeIn>
            <FadeIn>
                <Services/>
            </FadeIn>
            <FadeIn>
                <ProjectPreview/>
            </FadeIn>
            <FadeIn>
                 <DesignProcess/>
            </FadeIn>
            <SkillsPreview/>
            <FadeIn>
                <ContactMe/>
            </FadeIn>
        </div>
        </>
    )
}

export default Home;