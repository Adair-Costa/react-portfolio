import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "../styles/Home.css";

import Skills from "../Skills";
import Footer from "../../src/Footer";

const Home = () => {

    // icons
    const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} />
    const iconGithub = <FontAwesomeIcon icon={faGithub} />
    const iconEnvelope = <FontAwesomeIcon icon={faEnvelope} />

    return (
        <>
            <div className="container-fluid bg-home text-white vh-100">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 d-flex justify-content-center margin-col">

                    <div className="text-center">

                        <div className="card-body margin-name section-name">
                            <h1 className="card-title text-warning mb-4">Hi, my name is Adair</h1>
                            <p className="card-text mb-4">A software developer with a passion for learning and creating.</p>

                            <ul className="list-unstyled d-flex justify-content-center">
                                <li className="me-3">
                                    <a className="text-decoration-none text-white" target="_blank" href="https://www.linkedin.com/in/adair-costa-670aaa17b/">
                                        {iconLinkedin}
                                    </a>
                                </li>

                                <li className="me-3">
                                    <a className="text-decoration-none text-white" target="_blank" href="https://github.com/Adair-Costa/Adair-Costa/blob/main/README.md">
                                        {iconGithub}
                                    </a>
                                </li>

                                <li className="me-3">
                                    <a className="text-decoration-none text-white" target="_blank" href="https://outlook.live.com/mail/0/">
                                        {iconEnvelope}
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
        </div>

        <Skills />
        <Footer />
        </>
    );
}

export default Home;