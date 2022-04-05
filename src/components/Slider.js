import Container from "./Container";
import {Swiper, SwiperSlide} from "swiper/react";
import {Controller, Navigation} from "swiper";
import 'swiper/css';
import {useEffect, useState} from "react";
import Project from "./Project";
import Spinner from "./Spinner";
import {getProjects} from "../services/projects";

export default function Slider() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects().then(projects => setProjects(projects))
    }, [])

    if (projects.length === 0) return (
        <div className="py-44">
            <Spinner />
        </div>
    )

    return (
        <div className="py-12">
            <Container>
                <h1 className="text-2xl mb-6 text-center font-title uppercase">A Couple of Our Featured Projects</h1>
                <p className="text-center text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris.
                    Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt
                    eros.
                </p>
            </Container>
            <div>
                <div className="my-12">
                    <Swiper
                        loop={true}
                        autoHeight={false}
                        modules={[Navigation, Controller]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        centeredSlides={true}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 4.8,
                                spaceBetween: 20,
                            },
                        }}
                        allowTouchMove={false}
                    >
                        {projects.map(proj => (
                            <SwiperSlide key={proj.id}>
                                <div className="max-w-[300px] mx-auto">
                                    <Project img={proj.image} alt={proj.name} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <Container>
                    <div className="flex items-center grid grid-cols-12 gap-2 md:gap-5 mx-auto justify-between">
                        <button className="swiper-button-prev col-span-1 md:col-start-3 fill-neutral-200" aria-label="Move slider back.">
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="21" height="31" viewBox="0 0 21 31">
                                <path d="M15.294,-0.001 L0.001,15.500 L15.294,31.001 L20.999,25.298 L11.332,15.500 L20.999,5.702 L15.294,-0.001 Z" />
                            </svg>
                        </button>
                        <div className="col-start-2 col-span-10 md:col-start-4 md:col-span-6">
                            <Swiper
                                modules={[Navigation, Controller]}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                loop={true}
                                autoHeight={true}
                                slidesPerView={1}
                                allowTouchMove={false}
                            >
                                {projects.map(proj => (
                                    <SwiperSlide key={proj.id}>
                                        <div className="text-center">
                                            <h2 className="mb-6 text-lg font-title uppercase">
                                                {proj.name}
                                            </h2>
                                            <p className="text-sm">
                                                {proj.description}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <button className="swiper-button-next col-start-12 col-span-1 md:col-start-10 ml-auto fill-green-500" aria-label="Move slider forward.">
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="21" height="31" viewBox="0 0 21 31">
                                <path d="M5.706,31.001 L20.999,15.500 L5.706,-0.001 L0.001,5.702 L9.668,15.500 L0.001,25.298 L5.706,31.001 Z" />
                            </svg>
                        </button>
                    </div>
                </Container>
            </div>
        </div>
    )
}
