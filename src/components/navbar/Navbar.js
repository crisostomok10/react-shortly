import React, { useState } from 'react'
import './Navbar.css'
import {ReactComponent as Logo } from '../../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <div className="navbar-container">
            <div className="navbar-container-wrap">
                <div className="navbar-left">
                    <a href="#" className="logo"><Logo /></a>
                </div>
                <div className="navbar-right">
                    <div className="navbar-right-wrap" id={toggleNav ? "hidden" : ""}>
                        <div className="nav-link-wrap">
                            <a href="" className="nav-link">Features</a>
                            <a href="" className="nav-link">Pricing</a>
                            <a href="" className="nav-link">Resources</a>
                        </div>
                        <div className="user-link-wrap">
                            <a href="" className="login nav-link">Login</a>
                            <button className="sign-up-btn">Sign Up</button>
                        </div>        
                    </div>
                    <a id="hamburger" onClick={() => setToggleNav(!toggleNav)}><FontAwesomeIcon icon={faBars} /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
