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

                        <figure className="figure me-5 margin-projects col-425">
                            <div className="text-center">
                                <img src="manager-app.png" className="figure-img img-fluid rounded" alt="Foto of Manage App" />
                            </div>
                            <div>
                                <h1>Manager App</h1>
                            </div>
                            <figcaption className="figure-caption button-github no-select">Skills: html, css, javascript, bootstrap, react</figcaption>
                            <div className="text-center mt-3">
                                <a href="https://github.com/Adair-Costa/react-manager-app.git" target="_blank" rel="noreferrer" className="text-decoration-none text-dark button-github">
                                    {iconGithub}
                                </a>
                            </div>
                        </figure>

                        <figure className="figure me-5 col-425">
                            <div className="text-center">
                                <img src="list-contacts.png" className="figure-img img-fluid rounded" alt="Foto of list contact app" />
                            </div>
                            <div>
                                <h1>List Contacts</h1>
                            </div>
                            <figcaption className="figure-caption button-github">Skills: html, css, javascript, bootstrap, react</figcaption>
                            <div className="text-center mt-3">
                                <a href="https://github.com/Adair-Costa/react-list-contacts.git" target="_blank" rel="noreferrer" className="text-decoration-none text-dark button-github">
                                    {iconGithub}
                                </a>
                            </div>
                        </figure>

                        <figure className="figure me-5 figure-third col-425">
                            <div className="text-center">
                                <img src="to-do-list.png" className="figure-img img-fluid rounded" alt="Foto of To-do-list app" />
                            </div>
                            <div>
                                <h1>To-do-list</h1>
                            </div>
                            <figcaption className="figure-caption button-github">Skills: html, css, javascript, bootstrap, react</figcaption>
                            <div className="text-center mt-3">
                                <a href="https://github.com/Adair-Costa/react-to-do-list.git" target="_blank" rel="noreferrer" className="text-decoration-none text-dark button-github">
                                    {iconGithub}
                                </a>
                            </div>
                        </figure>

                        <figure className="figure me-5 mt-5 col-425 figure-portfolio">
                            <div className="text-center">
                                <img src="portfolio.png" className="figure-img img-fluid img-fluid-portfolio rounded" alt="Foto of personal portfolio app" />
                            </div>
                            <div>
                                <h1>Personal portfolio</h1>
                            </div>
                            <figcaption className="figure-caption button-github no-select">Skills: html, css, javascript, bootstrap, react</figcaption>
                            <div className="text-center mt-3">
                                <a href="https://github.com/Adair-Costa/react-portfolio.git" target="_blank" rel="noreferrer" className="text-decoration-none text-dark button-github">
                                    {iconGithub}
                                </a>
                            </div>
                        </figure>

                        <figure className="figure me-5 mt-5 col-425">
                            <div className="text-center">
                                <img src="e-comerce.png" className="figure-img img-fluid rounded" alt="Foto of e-comerce" />
                            </div>
                            <div>
                                <h1>E-comerce</h1>
                            </div>
                            <figcaption className="figure-caption button-github">Skills: html, css, javascript, bootstrap, react</figcaption>
                            <div className="text-center mt-3">
                                <a href="https://github.com/Adair-Costa/react-e-comerce.git" target="_blank" rel="noreferrer" className="text-decoration-none text-dark button-github">
                                    {iconGithub}
                                </a>
                            </div>
                        </figure>

                        <figure className="figure me-5 mt-5 col-425">
                            <div className="text-center">
                                <img src="space-x.png" className="figure-img img-fluid rounded" alt="Foto of spaceX" />
                            </div>
                            <div>
                                <h1>Clone spaceX</h1>
                            </div>
                            <figcaption className="figure-caption button-github no-select">Skills: html, css, javascript, bootstrap, sass</figcaption>
                            <div className="text-center mt-3">
                                <a href="https://github.com/Adair-Costa/clone-spaceX.git" target="_blank" rel="noreferrer" className="text-decoration-none text-dark button-github">
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