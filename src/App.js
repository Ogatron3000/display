import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="bg-neutral-50 text-neutral-500">
            <nav className="py-8">
                <ul className="flex gap-6">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-green-500" : null}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-500" : null}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/work" className={({ isActive }) => isActive ? "text-green-500" : null}>
                            Work
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact" className={({ isActive }) => isActive ? "text-green-500" : null}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="bg-green-500 p-20 text-center">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
