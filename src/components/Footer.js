import {Link} from "react-router-dom";
import React from "react";
import Container from "./Container";

export default function Footer() {
    return (
        <footer>
            <div className="bg-zinc-800">
                <Container>
                    <div className="flex flex-col items-center justify-between sm:flex-row items-center py-12">
                        <h2 className="text-neutral-100 text-center mb-8 sm:mb-0 text-2xl">
                            Are You Ready To Be Blown Away?
                        </h2>
                        <Link to="/work" className="flex items-center bg-green-500 text-white font-bold text-sm uppercase w-fit h-10 px-5 hover:bg-green-400">
                            Click here to find out
                        </Link>
                    </div>
                </Container>
            </div>
            <Container>
                <div className="text-xs py-6 flex flex-wrap gap-6 justify-between uppercase">
                    <div>
                        Copyright 2013 Display. All rights reserved.
                    </div>
                    <nav>
                        <ul className="flex">
                            <li className="after:content-['_/\00a0']">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="after:content-['_/\00a0']">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="after:content-['_/\00a0']">
                                <Link to="/work">Work</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Container>
        </footer>
    )
}
