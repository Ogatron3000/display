import {Link} from "react-router-dom";
import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="bg-zinc-800">
                <div className="flex flex-col items-center justify-between sm:flex-row items-center px-5 md:px-10 py-12 max-w-screen-lg max-w-screen-lg mx-auto">
                    <h2 className="text-neutral-100 text-center mb-8 sm:mb-0 text-2xl">
                        Are You Ready To Be Blown Away?
                    </h2>
                    <button className="bg-green-500 text-white font-bold text-sm uppercase w-fit h-10 px-5 hover:bg-green-400">
                        Click here to find out
                    </button>
                </div>
            </div>
            <div className="text-xs px-5 md:px-10 py-6 flex flex-wrap gap-6 justify-between uppercase max-w-screen-lg mx-auto">
                <div>
                    Copyright 2013 Display. All rights reserved.
                </div>
                <nav>
                    <ul>
                        <Link to="/">Home</Link> /
                        <Link to="/about"> About</Link> /
                        <Link to="/work"> Work</Link> /
                        <Link to="/Contact"> Contact</Link>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
