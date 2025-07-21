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
                    "We simplify construction",
                    "processes to increase",
                    "your project velocity",
                ]}
                bgcolor="black"
            />
            <MotionLine color='white'/>
            <MissionVision onNavChange={props.onNavChange} />
        </>
    );
}

export default AboutUsIntro;
