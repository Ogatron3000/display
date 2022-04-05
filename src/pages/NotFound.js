import Container from "../components/Container";
import {Helmet} from "react-helmet";

export default function NotFound() {
    return (
        <>
            <Helmet>
                <title>Display - Page Not Found</title>
            </Helmet>
            <div className="bg-green-500 flex-1 flex items-center">
                <Container>
                    <h1 className="text-8xl font-title uppercase text-center text-white mb-6">404</h1>
                    <p className="text-xl text-white">Oops! The page you're looking for doesn't exist!</p>
                </Container>
            </div>
        </>
    )
}
