import Container from "./Container";
import video from "../img/video.png";
import {useState} from "react";
import Popup from "./Popup";

export default function Video() {
    const [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
        document.body.style.overflow = 'hidden';
    }

    return (
        <div className="bg-neutral-200">
            <Container>
                <div className="grid grid-cols-12 gap-x-5 gap-y-8 py-10">
                    <div className="col-span-12 md:col-span-5 mx-auto relative h-fit">
                        <img src={video} alt="Video player." />
                        <button
                            onClick={open}
                            className="fill-neutral-200 absolute top-1/3 right-1/2 translate-x-1/2"
                            aria-label="Play 'Get to know us a little better' video."
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="45" height="56" viewBox="0 0 45 56">
                                <path d="M42.309,33.023 L9.492,54.969 C8.468,55.654 7.281,56.000 6.091,56.000 C5.110,56.000 4.126,55.765 3.229,55.290 C1.242,54.238 0.000,52.183 0.000,49.946 L0.000,6.054 C0.000,3.817 1.242,1.762 3.229,0.710 C5.216,-0.341 7.624,-0.218 9.492,1.031 L42.309,22.977 C43.991,24.102 45.000,25.985 45.000,28.000 C45.000,30.015 43.991,31.898 42.309,33.023 Z" />
                            </svg>
                        </button>
                    </div>
                    <div className="col-span-12 md:col-span-7 flex flex-col justify-between">
                        <h1 className="text-2xl mb-4 leading-none">
                            Get To Know Us a Little Better!
                        </h1>
                        <p className="text-sm mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue
                            mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
                            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
                            Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu
                            a elit congue lacinia.
                        </p>
                        <p className="text-sm">
                            Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla. Donec sit amet sapien neque,
                            id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
                        </p>
                    </div>
                </div>
            </Container>
            <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}
