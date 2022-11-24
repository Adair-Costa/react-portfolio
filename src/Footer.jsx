import React from "react";
import "./styles/Footer.css";

// importacao dos icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    // icons
    const iconLinkedin = <FontAwesomeIcon icon={faLinkedin} />
    const iconGithub = <FontAwesomeIcon icon={faGithub} />
    const iconEnvelope = <FontAwesomeIcon icon={faEnvelope} />
    const iconCopyright = <FontAwesomeIcon icon={faCopyright} />

    return (
        <div className="container-fluid bg-footer">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-15">
                    <div className="text-center">
                        <div className="card-body">
                            <div className="card-text size-elements-footer">
                                <ul className="d-flex justify-content-center list-unstyled">
                                    <li className="me-3">
                                        <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/adair-costa-670aaa17b/">
                                            {iconLinkedin}
                                        </a>
                                    </li>

                                    <li className="me-3">
                                        <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href="https://github.com/Adair-Costa">
                                            {iconGithub}</a>
                                    </li>

                                    <li className="me-3">
                                        <a className="text-white text-decoration-none" target="_blank" rel="noreferrer" href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1587989613&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26RpsCsrfState%3ddaac5a1c-71d2-6a0a-dc0f-a32972ce5b76&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015">
                                            {iconEnvelope}
                                        </a>
                                    </li>
                                </ul>

                                <div className="card-text d-flex justify-content-center align-items-center">
                                    <div className="d-flex">
                                        <div className="copyright me-1">
                                            {iconCopyright}
                                        </div>
                                        <div className="paragraph">
                                            <p>2022 Adair Costa</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;