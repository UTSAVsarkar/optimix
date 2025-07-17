import MotionLine from '../components/MotionLine';
import Sample from '../components/Sample';
import SectionIntro from '../components/SectionIntro';

function AboutUsIntro() {
    return (
        <>
            <SectionIntro
                title="ABOUT US"
                descriptionLines={[
                    "At EGK, we simplify",
                    "construction processes",
                    "to increase your project",
                    "velocity."
                ]}
            />
            <MotionLine />
            <Sample />
        </>
    );
}

export default AboutUsIntro;
