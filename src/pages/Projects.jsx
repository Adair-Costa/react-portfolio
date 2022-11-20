import React from "react";
import "../styles/Projects.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // importacao do FontAwesome
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // importacao do icon

const Projects = () => {

    // icons
    const iconGithub = <FontAwesomeIcon icon={faGithub} className="fs-2" />

    return (
        <div className="container-fluid vh-50">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="text-center p-5">
                        <h1 className="button-github">My personal Projects</h1>
                    </div>

                    <div className="d-flex justify-content-center flex-wrap margin-top margin-projects">

                        <figure className="figure me-5 margin-projects">
                            <div className="text-center">
                                <img src="logo192.png" className="figure-img img-fluid rounded" alt="..." />
                            </div>
                            <figcaption className="figure-caption button-github">Skills: html, css, javascript, bootstrap, react</figcaption>
                            <div className="text-center mt-3">
                                <a href="#" target="_blank" className="text-decoration-none text-dark button-github">
                                    {iconGithub}
                                </a>
                            </div>
                        </figure>

                        <figure className="figure me-5">
                            <div className="text-center">
                                <img src="logo192.png" className="figure-img img-fluid rounded" alt="..." />
                            </div>
                            <figcaption className="figure-caption button-github">Skills: html, css, javascript, bootstrap, react</figcaption>
                            <div className="text-center mt-3">
                                <a href="#" target="_blank" className="text-decoration-none text-dark button-github">
                                    {iconGithub}
                                </a>
                            </div>
                        </figure>

                        <figure className="figure me-5 figure-third">
                            <div className="text-center">
                                <img src="logo192.png" className="figure-img img-fluid rounded" alt="..." />
                            </div>
                            <figcaption className="figure-caption button-github">Skills: html, css, javascript, bootstrap, react</figcaption>
                            <div className="text-center mt-3">
                                <a href="#" target="_blank" className="text-decoration-none text-dark button-github">
                                    {iconGithub}
                                </a>
                            </div>
                        </figure>

                        <figure className="figure me-5 mt-5">
                            <div className="text-center">
                                <img src="logo192.png" className="figure-img img-fluid rounded" alt="..." />
                            </div>
                            <figcaption className="figure-caption button-github">Skills: html, css, javascript, bootstrap, react</figcaption>
                            <div className="text-center mt-3">
                                <a href="#" target="_blank" className="text-decoration-none text-dark button-github">
                                    {iconGithub}
                                </a>
                            </div>
                        </figure>

                        <figure className="figure me-5 mt-5">
                            <div className="text-center">
                                <img src="logo192.png" className="figure-img img-fluid rounded" alt="..." />
                            </div>
                            <figcaption className="figure-caption button-github">Skills: html, css, javascript, bootstrap, react</figcaption>
                            <div className="text-center mt-3">
                                <a href="#" target="_blank" className="text-decoration-none text-dark button-github">
                                    {iconGithub}
                                </a>
                            </div>
                        </figure>

                        <figure className="figure me-5 mt-5">
                            <div className="text-center">
                                <img src="logo192.png" className="figure-img img-fluid rounded" alt="..." />
                            </div>
                            <figcaption className="figure-caption button-github">Skills: html, css, javascript, bootstrap, react</figcaption>
                            <div className="text-center mt-3">
                                <a href="#" target="_blank" className="text-decoration-none text-dark button-github">
                                    {iconGithub}
                                </a>
                            </div>
                        </figure>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;