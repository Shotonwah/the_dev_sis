import Hero from '../../src/components/Hero';
import ProjectPreview from "../../src/components/ProjectPreview";
import SkillsPreview from '../../src/components/SkillsPreview';
import ContactMe from "../../src/components/ContactMe";
import DesignProcess from "../../src/components/DesignProcess";
import Services from "../../src/components/Services";
import FadeIn from "../../src/components/FadeIn";
import Nhero from "../../src/components/Nhero";

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