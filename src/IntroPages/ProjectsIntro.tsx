import MotionLine from '../components/MotionLine';
import Sample from '../components/Sample';
import SectionIntro from '../components/SectionIntro';

function ProjectsIntro() {
    return (
        <>
            <SectionIntro
                title="FEATURED PROJECTS"
                descriptionLines={[
                    "Every project has its",
                    "unique DNA"
                ]}
            />
            <MotionLine />
            <Sample />
        </>
    );
}

export default ProjectsIntro;
