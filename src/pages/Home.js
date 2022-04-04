import Hero from "../components/Hero";
import Video from "../components/Video";
import Slider from "../components/Slider";
import {Helmet} from "react-helmet";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Display</title>
                <meta name="description" content="Display application." />
                <link rel="canonical" href="http://localhost:3000" />
            </Helmet>
            <Hero />
            <Video />
            <Slider />
        </>
    )
}