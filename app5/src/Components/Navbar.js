import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
    <>
    <nav class="navbar  navbar-expand bg-dark navbar-dark">
            <div class="container-fluid">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link class="nav-link" to={"/"}>Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/contact"}>Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to={"/about"}>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
    )
}

export default NavBar