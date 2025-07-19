import { motion, useScroll, useTransform } from "framer-motion";
import Form from "../components/Form";
import Heading from "../components/Heading";
import Contact from "./Contact/Contact";
import AboutUsIntro from "../IntroPages/AboutIntro/AboutUsIntro";
import ProjectsIntro from "../IntroPages/ProjectIntro/ProjectsIntro";
import ServicesIntro from "../IntroPages/ServiceIntro/ServicesIntro"
import ParallaxImage from "../components/ParallaxImage";

interface Props {
    onNavChange: (item: string) => void;
}

const Home: React.FC<Props> = ({ onNavChange }) => {
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 500], ["0%", "50%"]);

    return (
        <>
            {/* Background Section */}
            <motion.div
                style={{
                    position: "relative",
                    backgroundImage: `url(${process.env.PUBLIC_URL + "/backimg.png"})`,
                    backgroundSize: "cover",
                    backgroundPositionY: bgY,
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                }}
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* Heading Overlay */}
            <div
                style={{
                    marginTop: 120,
                    color: "white",
                    marginLeft: 20,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                }}
            >
                <Heading />
            </div>

            {/* Form in Corner */}
            <div
                style={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    backgroundColor: "#AF6118",
                    color: "white",
                    padding: "15px 20px",
                    borderRadius: "8px",
                    zIndex: 2,
                    maxWidth: "90vw",
                    fontSize: "14px",
                    boxShadow: `
              0 4px 10px rgba(0,0,0,0.3),
              0 8px 24px rgba(0,0,0,0.25),
              0 12px 48px rgba(0,0,0,0.2)
            `,
                }}
            >
                <Form />
            </div>

            <AboutUsIntro onNavChange={onNavChange} />
            <ServicesIntro onNavChange={onNavChange} />
            <ParallaxImage
                image="https://static.wixstatic.com/media/c837a6_c4ec010a6ed34a1e8b7068fffc7e6062~mv2.jpg/v1/fill/w_1960,h_1946,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_c4ec010a6ed34a1e8b7068fffc7e6062~mv2.jpg"
                text="You can dream, create, design, and build the most wonderful place in the world. But it requires people to make the dream a reality."
            />
            <ProjectsIntro onNavChange={onNavChange} />
            <Contact />
        </>
    );
}

export default Home;