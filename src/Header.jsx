import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {

    // hook useState
    const [showMenu, setSHowMenu] = useState(() => {
        return false;
    })

    // hook useLocation
    let location = useLocation();

    // functions
    function changeStateMenu() {
        setSHowMenu((oldPrev) => {
            return !oldPrev;
        })
    }

    // hooke useEffect
    useEffect(() => {
        setSHowMenu(false);
    }, [location]);

    return (
        <div className="container-fluid bg-header">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid d-flex justify-content-end">

                            <button onClick={changeStateMenu} className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon top-bar"></span>
                                <span className="toggler-icon middle-bar"></span>
                                <span className="toggler-icon bottom-bar"></span>
                            </button>

                            <div className="collapse navbar-collapse d-flex justify-content-center" id={showMenu ? "show" : "hidden"}>
                                <ul className="navbar-nav text-center">
                                    <li className="nav-item">
                                        <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/projects">Projects</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link text-white" to="/experiences">Education</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;