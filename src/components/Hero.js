import Container from "./Container";
import devices from "../img/devices.png";
import {Link} from "react-router-dom";

export default function Hero() {
    return (
        <div>
            <div className="relative bg-[url('./img/sunburst.png')] bg-no-repeat bg-cover bg-center max-h-[525px]">
                <Container>
                    <div className="grid grid-cols-12 gap-5 w-full">
                        <img src={devices}
                             alt=""
                             className="col-start-2 col-span-10 pt-[25%] -mb-[8%] -ml-[2.7%] xl:pt-[15%] xl:-ml-[3.3%] transition delay-1000 animate-fade"
                        />
                    </div>
                </Container>
            </div>
            <Container>
                <div className="py-12 grid grid-cols-12 mt-[7%]">
                    <div className="col-start-2 col-span-10">
                        <p className="text-center col-span-12 mb-6 opacity-0 animate-fade animation-delay-750">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue
                            mauris. Fusce velitaria justo, faucibus eu.
                        </p>
                        <Link to="/work" className="flex items-center bg-green-500 text-white font-bold text-sm uppercase w-fit h-10 px-5 hover:bg-green-400 block mx-auto opacity-0 animate-fade animation-delay-1500">
                            Browse Portfolio
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}
