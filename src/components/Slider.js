import Container from "./Container";
import slide from '../img/slide.png'
import "./Slider.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Controller, Navigation} from "swiper";
import 'swiper/css';

export default function Slider() {

    const slides1 = []
    const slides2 = []

    for (let i = 0; i < 5; i++) {
        slides1.push(
            <SwiperSlide>
                <div className="relative flex justify-center">
                    <div className="group cursor-pointer">
                        <img src={slide} alt=""/>
                        <div className="absolute w-24 h-24 m-auto left-0 right-0 top-0 bottom-0 p-6 fill-white bg-green-500 rounded-full flex items-center justify-center invisible group-hover:visible">
                            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="33"
                                 height="42" viewBox="0 0 33 42">
                                <path d="M32.546,10.358 L26.527,20.830 C25.577,22.483 23.473,23.049 21.828,22.095 L20.338,21.231 L22.058,18.239 L22.058,18.239 C22.881,18.716 23.933,18.433 24.408,17.607 L28.707,10.126 C29.182,9.300 28.900,8.244 28.078,7.767 L22.120,4.312 C21.297,3.835 20.246,4.118 19.771,4.944 L15.471,12.424 C14.996,13.250 15.278,14.307 16.100,14.784 L14.381,17.776 L12.891,16.912 C11.246,15.958 10.682,13.845 11.632,12.193 L17.652,1.720 C18.602,0.068 20.705,-0.498 22.351,0.456 L31.287,5.638 C32.932,6.592 33.496,8.705 32.546,10.358 ZM12.200,28.480 C11.377,28.003 11.096,26.946 11.571,26.120 L18.450,14.152 C18.925,13.325 19.977,13.042 20.799,13.519 C21.622,13.996 21.904,15.053 21.429,15.879 L14.549,27.848 C14.074,28.674 13.023,28.957 12.200,28.480 ZM10.941,23.760 L10.941,23.760 C10.118,23.283 9.067,23.567 8.592,24.393 L4.292,31.873 C3.817,32.699 4.099,33.756 4.921,34.233 L10.879,37.688 C11.702,38.165 12.754,37.882 13.229,37.056 L17.528,29.575 C18.003,28.749 17.721,27.692 16.899,27.215 L16.899,27.215 L18.619,24.223 L20.108,25.087 C21.753,26.041 22.317,28.154 21.367,29.807 L15.348,40.279 C14.398,41.932 12.294,42.498 10.649,41.544 L1.712,36.361 C0.067,35.407 -0.497,33.294 0.453,31.642 L6.473,21.169 C7.422,19.517 9.526,18.950 11.171,19.905 L12.661,20.768 L10.941,23.760 Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
        slides2.push(
            <SwiperSlide>
                <div className="text-center">
                    <h2 className="mb-6 text-lg">Dark UI Kit Freebie</h2>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel
                        congue mauris. Fusce velit justo, faucibus eu sagittis.
                    </p>
                </div>
            </SwiperSlide>
        )
    }

    return (
        <div className="py-12">
            <Container>
                <h1 className="text-2xl mb-6 text-center">A Couple of Our Featured Projects</h1>
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
                        autoHeight={true}
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
                                slidesPerView: 4,
                                spaceBetween: 40
                            },
                        }}
                        allowTouchMove={false}
                    >
                        {slides1}
                    </Swiper>
                </div>
                <Container>
                    <div className="flex items-center grid grid-cols-12 gap-2 md:gap-5 mx-auto justify-between">
                        <button className="swiper-button-prev col-span-1 md:col-start-3 fill-neutral-200">
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
                                {slides2}
                            </Swiper>
                        </div>
                        <button className="swiper-button-next col-start-12 col-span-1 md:col-start-10 ml-auto fill-green-500">
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
