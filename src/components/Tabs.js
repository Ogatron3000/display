import Container from "./Container";
import {useState} from "react";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <div>
            <Container>
                <h2 className="font-title text-2xl uppercase mb-6">Services</h2>
            </Container>
            <div className="bg-neutral-200 mb-6">
                <Container>
                    <div className="grid grid-cols-12">
                        <button
                            onClick={() => setActiveTab(1)}
                            className={"py-6 sm:py-12 col-span-6 sm:col-span-3 flex flex-col items-center hover:bg-neutral-300 hover:text-neutral-700 group " + (activeTab === 1 ? "bg-neutral-300 text-neutral-700" : null)}>
                            <div className={"h-16 flex items-end mb-6 fill-neutral-500 group-hover:fill-neutral-700 " + (activeTab === 1 ? "fill-neutral-700" : null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="50" height="58" viewBox="0 0 50 58">
                                    <path d="M48.438,50.267 L47.407,50.267 C47.239,50.873 46.998,51.448 46.691,51.981 L47.644,52.934 C48.254,53.544 48.254,54.532 47.644,55.142 L47.092,55.694 C46.482,56.304 45.493,56.304 44.883,55.694 L43.923,54.735 C43.391,55.038 42.818,55.274 42.214,55.439 L42.214,56.439 C42.214,57.301 41.514,58.000 40.652,58.000 L39.870,58.000 C39.008,58.000 38.308,57.301 38.308,56.439 L38.308,55.439 C37.704,55.274 37.131,55.038 36.598,54.735 L35.639,55.694 C35.029,56.304 34.040,56.304 33.430,55.694 L32.878,55.142 C32.268,54.532 32.268,53.544 32.878,52.934 L33.831,51.981 C33.524,51.448 33.283,50.873 33.115,50.267 L32.084,50.267 C31.221,50.267 30.522,49.568 30.522,48.705 L30.522,47.925 C30.522,47.063 31.221,46.364 32.084,46.364 L33.103,46.364 C33.264,45.763 33.495,45.191 33.794,44.661 L32.878,43.745 C32.268,43.135 32.268,42.146 32.878,41.537 L33.430,40.985 C34.040,40.375 35.029,40.375 35.639,40.985 L36.538,41.883 C37.087,41.563 37.681,41.314 38.308,41.143 L38.308,40.094 C38.308,39.232 39.008,38.533 39.870,38.533 L40.652,38.533 C41.514,38.533 42.214,39.232 42.214,40.094 L42.214,41.143 C42.841,41.314 43.435,41.563 43.984,41.883 L44.883,40.985 C45.493,40.375 46.482,40.375 47.092,40.985 L47.644,41.537 C48.254,42.146 48.254,43.135 47.644,43.745 L46.728,44.661 C47.026,45.191 47.257,45.763 47.419,46.364 L48.438,46.364 C49.300,46.364 50.000,47.063 50.000,47.925 L50.000,48.705 C50.000,49.568 49.300,50.267 48.438,50.267 ZM40.261,44.046 C37.888,44.046 35.965,45.968 35.965,48.340 C35.965,50.711 37.888,52.633 40.261,52.633 C42.633,52.633 44.557,50.711 44.557,48.340 C44.557,45.968 42.633,44.046 40.261,44.046 ZM40.261,50.242 C39.182,50.242 38.308,49.369 38.308,48.291 C38.308,47.213 39.182,46.339 40.261,46.339 C41.339,46.339 42.214,47.213 42.214,48.291 C42.214,49.369 41.339,50.242 40.261,50.242 ZM36.940,24.193 L34.813,24.193 C34.468,25.444 33.971,26.629 33.338,27.729 L35.303,29.694 C36.561,30.951 36.561,32.989 35.303,34.246 L34.165,35.384 C32.907,36.642 30.867,36.642 29.610,35.384 L27.632,33.407 C26.534,34.032 25.352,34.518 24.106,34.857 L24.106,36.919 C24.106,38.697 22.664,40.138 20.885,40.138 L19.275,40.138 C17.496,40.138 16.054,38.697 16.054,36.919 L16.054,34.857 C14.808,34.518 13.626,34.032 12.529,33.407 L10.551,35.384 C9.293,36.642 7.254,36.642 5.996,35.384 L4.857,34.246 C3.599,32.989 3.599,30.951 4.857,29.694 L6.823,27.729 C6.189,26.629 5.693,25.444 5.347,24.193 L3.221,24.193 C1.442,24.193 -0.000,22.752 -0.000,20.974 L-0.000,19.365 C-0.000,17.587 1.442,16.146 3.221,16.146 L5.321,16.146 C5.654,14.907 6.131,13.728 6.747,12.635 L4.857,10.746 C3.599,9.489 3.599,7.451 4.857,6.193 L5.996,5.055 C7.254,3.798 9.293,3.798 10.551,5.055 L12.403,6.907 C13.537,6.248 14.760,5.734 16.054,5.382 L16.054,3.219 C16.054,1.441 17.496,-0.000 19.275,-0.000 L20.885,-0.000 C22.664,-0.000 24.106,1.441 24.106,3.219 L24.106,5.381 C25.400,5.734 26.624,6.248 27.757,6.907 L29.610,5.055 C30.867,3.798 32.907,3.798 34.165,5.055 L35.303,6.193 C36.561,7.451 36.561,9.489 35.303,10.746 L33.414,12.635 C34.030,13.728 34.506,14.907 34.839,16.146 L36.940,16.146 C38.718,16.146 40.161,17.587 40.161,19.365 L40.161,20.974 C40.161,22.752 38.718,24.193 36.940,24.193 ZM20.080,11.367 C15.188,11.367 11.223,15.331 11.223,20.220 C11.223,25.109 15.188,29.073 20.080,29.073 C24.972,29.073 28.938,25.109 28.938,20.220 C28.938,15.331 24.972,11.367 20.080,11.367 ZM20.080,24.143 C17.857,24.143 16.054,22.342 16.054,20.119 C16.054,17.897 17.857,16.095 20.080,16.095 C22.304,16.095 24.106,17.897 24.106,20.119 C24.106,22.342 22.304,24.143 20.080,24.143 Z" />
                                </svg>
                            </div>
                            <h3 className="font-title text-sm sm:text-base md:text-lg uppercase">
                                Websites
                            </h3>
                        </button>
                        <button
                            onClick={() => setActiveTab(2)}
                            className={"py-6 sm:py-12 col-span-6 sm:col-span-3 flex flex-col items-center hover:bg-neutral-300 hover:text-neutral-700 group " + (activeTab === 2 ? "bg-neutral-300 text-neutral-700" : null)}>
                            <div className={"h-16 flex items-end mb-6 fill-neutral-500 group-hover:fill-neutral-700 " + (activeTab === 2 ? "fill-neutral-700" : null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="50" height="42" viewBox="0 0 50 42">
                                    <path d="M46.551,42.000 L3.448,42.000 C1.543,42.000 -0.001,40.433 -0.001,38.500 L-0.001,8.750 C-0.001,6.817 1.543,5.250 3.448,5.250 L6.896,5.250 L6.896,-0.000 L20.689,0.109 L20.683,5.280 L46.551,5.250 C48.455,5.250 49.999,6.817 49.999,8.750 L49.999,38.500 C49.999,40.433 48.455,42.000 46.551,42.000 ZM17.241,3.500 L10.344,3.500 L10.344,8.750 L17.241,8.750 L17.241,3.500 ZM18.965,12.177 C12.299,12.177 6.896,17.661 6.896,24.427 C6.896,31.192 12.299,36.677 18.965,36.677 C25.630,36.677 31.034,31.192 31.034,24.427 C31.034,17.661 25.630,12.177 18.965,12.177 ZM42.241,9.661 C40.336,9.661 38.792,11.228 38.792,13.161 C38.792,15.094 40.336,16.661 42.241,16.661 C44.145,16.661 45.689,15.094 45.689,13.161 C45.689,11.228 44.145,9.661 42.241,9.661 ZM18.966,32.593 C14.681,32.593 11.207,29.068 11.207,24.719 C11.207,20.369 14.681,16.844 18.966,16.844 C23.250,16.844 26.724,20.369 26.724,24.719 C26.724,29.068 23.250,32.593 18.966,32.593 Z" />
                                </svg>
                            </div>
                            <h3 className="font-title text-sm sm:text-base md:text-lg uppercase">
                                Photography
                            </h3>
                        </button>
                        <button
                            onClick={() => setActiveTab(3)}
                            className={"py-6 sm:py-12 col-span-6 sm:col-span-3 flex flex-col items-center hover:bg-neutral-300 hover:text-neutral-700 group " + (activeTab === 3 ? "bg-neutral-300 text-neutral-700" : null)}>
                            <div className={"h-16 flex items-end mb-6 fill-neutral-500 group-hover:fill-neutral-700 " + (activeTab === 3 ? "fill-neutral-700" : null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="45.031" height="45.969" viewBox="0 0 45.031 45.969">
                                    <path d="M44.113,43.963 L43.019,45.055 C41.811,46.262 39.852,46.262 38.644,45.055 L29.896,36.318 C28.881,35.305 28.771,33.788 29.459,32.605 L24.676,27.829 C22.104,29.735 18.930,30.877 15.480,30.877 C6.939,30.877 0.014,23.961 0.014,15.431 C0.014,6.700 6.939,-0.015 15.480,-0.015 C24.022,-0.015 30.946,6.700 30.946,15.431 C30.946,19.402 29.433,23.011 26.967,25.748 L31.646,30.421 C32.830,29.733 34.350,29.844 35.364,30.857 L44.113,39.595 C45.321,40.801 45.321,42.757 44.113,43.963 ZM27.048,15.366 C27.048,8.969 21.854,3.782 15.448,3.782 C13.664,3.782 11.994,4.217 10.483,4.936 C11.291,5.764 12.508,7.002 12.573,7.002 C11.316,7.002 7.202,11.111 7.202,12.463 C7.202,12.397 5.892,11.156 5.035,10.351 C4.298,11.874 3.848,13.561 3.848,15.366 C3.848,21.764 9.042,26.951 15.448,26.951 C21.854,26.951 27.048,21.764 27.048,15.366 Z" />
                                </svg>
                            </div>
                            <h3 className="font-title text-sm sm:text-base md:text-lg uppercase">
                                SEO
                            </h3>
                        </button>
                        <button
                            onClick={() => setActiveTab(4)}
                            className={"py-6 sm:py-12 col-span-6 sm:col-span-3 flex flex-col items-center hover:bg-neutral-300 hover:text-neutral-700 group " + (activeTab === 4 ? "bg-neutral-300 text-neutral-700" : null)}>
                            <div className={"h-16 flex items-end mb-6 fill-neutral-500 group-hover:fill-neutral-700 " + (activeTab === 4 ? "fill-neutral-700" : null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="50" height="43" viewBox="0 0 50 43">
                                    <path d="M46.428,43.000 L3.571,43.000 C1.598,43.000 -0.001,41.395 -0.001,39.416 L-0.001,3.583 C-0.001,1.604 1.598,-0.000 3.571,-0.000 L46.428,-0.000 C48.400,-0.000 49.999,1.604 49.999,3.583 L49.999,39.416 C49.999,41.395 48.400,43.000 46.428,43.000 ZM6.249,2.687 C5.263,2.687 4.464,3.489 4.464,4.479 C4.464,5.468 5.263,6.271 6.249,6.271 C7.235,6.271 8.035,5.468 8.035,4.479 C8.035,3.489 7.235,2.687 6.249,2.687 ZM11.606,2.687 C10.620,2.687 9.821,3.489 9.821,4.479 C9.821,5.468 10.620,6.271 11.606,6.271 C12.593,6.271 13.392,5.468 13.392,4.479 C13.392,3.489 12.593,2.687 11.606,2.687 ZM17.075,2.687 C16.089,2.687 15.289,3.489 15.289,4.479 C15.289,5.468 16.089,6.271 17.075,6.271 C18.061,6.271 18.861,5.468 18.861,4.479 C18.861,3.489 18.061,2.687 17.075,2.687 ZM46.000,3.000 L21.000,3.000 L21.000,6.000 L46.000,6.000 L46.000,3.000 ZM46.000,9.000 L4.000,9.000 L4.000,39.000 L46.000,39.000 L46.000,9.000 Z" />
                                </svg>
                            </div>
                            <h3 className="font-title text-sm sm:text-base md:text-lg uppercase">
                                Applications
                            </h3>
                        </button>
                    </div>
                </Container>
            </div>

            <Container>
                <div className={"mb-12 " + (activeTab !== 1 ? "hidden" : null)}>
                    <p className="text-sm mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue
                        mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
                        mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
                        Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu
                        a elit congue lacinia.
                    </p>
                    <ul className="pl-5">
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.
                        </li>
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus donec.
                        </li>
                    </ul>
                </div>

                <div className={"mb-12 " + (activeTab !== 2 ? "hidden" : null)}>
                    <p className="text-sm mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur eos in
                        itaque nam, nisi porro recusandae rem tempore totam! Dignissimos eum excepturi laborum quas
                        suscipit. Accusamus accusantium porro provident.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam consectetur
                        cumque ducimus harum, incidunt minima possimus repellendus repudiandae tenetur.
                    </p>
                    <ul className="pl-5">
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, ullam?
                        </li>
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </li>
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, eveniet, quasi.
                        </li>
                    </ul>
                </div>

                <div className={"mb-12 " + (activeTab !== 3 ? "hidden" : null)}>
                    <p className="text-sm mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis error in laudantium
                        odio quo repellendus velit? Ea magni molestiae odio veniam! Dolor eos eveniet omnis quae
                        quam, quibusdam suscipit!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cumque dolores magnam
                        natus nemo qui quos, sit. Beatae expedita facilis harum illo ipsa quae quo reiciendis rem
                        rerum suscipit, tenetur!
                    </p>
                    <ul className="pl-5">
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur.
                        </li>
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum?
                        </li>
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing.
                        </li>
                    </ul>
                </div>

                <div className={"mb-12 " + (activeTab !== 4 ? "hidden" : null)}>
                    <p className="text-sm mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda beatae debitis
                        dolor earum ex, illo ipsum magnam neque nisi nostrum nulla quaerat quasi quos ratione
                        repellendus saepe sed vero!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus adipisci deserunt
                        distinctio ducimus enim facilis fuga incidunt minima nam neque, non possimus, provident quis
                        sequi similique ut vel voluptatum.
                    </p>
                    <ul className="pl-5">
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla sit amet.
                        </li>
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </li>
                        <li className="flex items-center gap-3">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" width="7" height="10" viewBox="0 0 7 10">
                                    <path d="M1.902,10.000 L7.000,5.000 L1.902,-0.000 L0.000,1.839 L3.223,5.000 L0.000,8.161 L1.902,10.000 Z" />
                                </svg>
                                </span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur excepturi iure ut.
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}
