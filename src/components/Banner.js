import Container from "./Container";

export default function Banner({ content }) {
    return (
        <div className="bg-green-500 py-8">
            <Container>
                <h1 className="uppercase text-2xl sm:text-3xl text-white font-title">
                    {content}
                </h1>
            </Container>
        </div>
    )
}
