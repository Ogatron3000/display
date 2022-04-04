import Container from "../components/Container";

export default function NotFound() {
    return (
        <div className="bg-green-500 h-full flex items-center">
            <Container>
                <h1 className="text-8xl font-title uppercase text-center text-white mb-6">404</h1>
                <p className="text-xl text-white">Oops! The page you're looking for doesn't exist!</p>
            </Container>
        </div>
    )
}
