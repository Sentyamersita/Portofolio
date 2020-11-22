import React from 'react'
import '../App.css';

import About from "../sections/About"
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import Interests from "../sections/Interests";
import Awards from "../sections/Awards";

function LayoutNavbar() {
    return (
        <div className="LayoutNavbar">
            <About />
            <Experience />
            <Education />
            <Skills />
            <Interests />
            <Awards />   
        </div>
    )
}

export default LayoutNavbar