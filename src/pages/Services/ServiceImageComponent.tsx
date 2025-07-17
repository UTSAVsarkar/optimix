import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

export default function ServiceImageComponent() {
    return (
                    <ParallaxProvider>
                <ParallaxBanner
                    layers={[
                        {
                            image: 'https://static.wixstatic.com/media/84770f_b0f8a4cbc4934dd98fbc047c3ec83d8d~mv2.jpg/v1/fill/w_3456,h_1320,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/84770f_b0f8a4cbc4934dd98fbc047c3ec83d8d~mv2.jpg',
                            speed: -20,
                        },
                    ]}
                    style={{ aspectRatio: '3 / 1' }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: '2rem',
                            color: 'white',
                            fontWeight: 'bold',
                            textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
                        }}
                    >
                        “You can dream, create, design, and build the most wonderful place in the world. But it requires people to make the dream a reality.” 
                        <br />
                        <i style={{fontSize: 15}}>WALT DISNEY</i>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>
    )
}