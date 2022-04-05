import Hero from "../components/Hero";
import Video from "../components/Video";
import Slider from "../components/Slider";
import Head from "../components/Head";

export default function Home() {
    return (
        <>
            <Head
                title="Display"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                url="http://localhost:3000"
            />
            <Hero />
            <Video />
            <Slider />
        </>
    )
}