import Container from "../components/Container";
import about from '../img/about.png'
import Tabs from "../components/Tabs";
import Banner from "../components/Banner";
import Head from "../components/Head";

export default function About() {
    return (
        <>
            <Head
                title="Display - About"
                description="About. We are dedicated, professional and vision-driven."
                url="http://localhost:3000/about"
            />

            <Banner content={"About My Business"} />

            <Container>
                <div className="py-12 grid grid-cols-12 gap-5">
                    <img
                        src={about}
                        alt="Man working on the computer while talking on the phone."
                        className="col-span-12 sm:col-span-5 mx-auto"
                    />
                    <div className="col-span-12 sm:col-span-7 flex flex-col justify-between">
                        <p className="text-sm mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue
                            mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
                            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
                            Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu
                            a elit congue lacinia.
                        </p>
                        <p className="text-sm">
                            Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque,
                            id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue
                            mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
                            mi, quis tincidunt eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                </div>
            </Container>

            <Container>
                <div className="mb-12 grid grid-cols-12 gap-x-5">
                    <div className="col-span-12 sm:col-span-6 mb-12 sm:mb-0">
                        <h2 className="text-2xl font-title uppercase mb-6">Mission Statement</h2>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel
                            congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
                            non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus
                            a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque
                            pellentesque arcu a elit congue lacinia.
                        </p>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                        <h2 className="text-2xl font-title uppercase mb-6">Fun Facts</h2>
                        <p className="text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel
                            congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse
                            non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus
                            a nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque
                            pellentesque arcu a elit congue lacinia.
                        </p>
                    </div>
                </div>
            </Container>

            <Tabs />
        </>
    )
}
