import MotionLine from '../../components/MotionLine';
import SectionIntro from '../../components/SectionIntro';
import MissionVision from './MissionVision';

interface Props {
    onNavChange: (item: string) => void;
}

function AboutUsIntro(props: Props) {
    return (
        <>
            <SectionIntro
                title="ABOUT US"
                descriptionLines={[
                    "At Optimax, we simplify",
                    "construction processes",
                    "to increase your project",
                    "velocity."
                ]}
            />
            <MotionLine />
            <MissionVision onNavChange={props.onNavChange} />
        </>
    );
}

export default AboutUsIntro;
