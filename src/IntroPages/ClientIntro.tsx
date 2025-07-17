import Sample from '../components/Sample';
import SectionIntro from '../components/SectionIntro';

function ClientIntro() {
    return (
        <>
            <SectionIntro
                title="WE WORK WITH TOP NOTCH CLIENTS"
                descriptionLines={[
                    "Engineers who",
                    "understand your",
                    "business"
                ]}
                bgcolor="black"
            />
            <Sample />
        </>
    );
}

export default ClientIntro;
