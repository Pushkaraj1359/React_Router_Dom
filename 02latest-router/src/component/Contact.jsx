import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Contact() {
    return (
        <div>
        <h1>this is an contact page</h1>
        <button><NavLink to='call'>call</NavLink></button>
        <button><NavLink to='address'>address</NavLink></button>
        <Outlet/>
        </div>
    )
}

export default Contact
