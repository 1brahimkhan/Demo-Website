import React from 'react'
import { Common } from "./Common";
import { NavLink } from 'react-router-dom'
import web from '../images/rocket2.svg'
export const About = () => {
    return (
        <div>
            <Common name = 'We Are ' imgsrc={web} exact visit ="/contact" btname = 'Contact Now'/>
        </div>
    )
}
