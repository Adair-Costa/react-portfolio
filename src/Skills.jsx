import React from "react";
import "./styles/Skills.css";

const Skills = () => {
    return (
        <div className="container-fluid bg-white width">
            <div className="row text-dark p-5">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="text-start margin-col">
                        <h1 className="card-title text-center color-text-skills">Skills</h1>

                        <div className="card-body margin-col">

                            <div className="mb-5">
                                <h1 className="card-ttile color-text-skills">Front-End</h1>
                                <p className="card-text text-uppercase color-text-skills">html5, css3, javascript, sass, bootstrap, bulma, react js, git/Github</p>
                            </div>

                            <div className="mb-5">
                                <h1 className="card-ttile color-text-skills">Language</h1>
                                <p className="card-text text-uppercase color-text-skills">javascript</p>
                            </div>

                            <div className="mb-5">
                                <h1 className="card-ttile color-text-skills">Frameworks</h1>
                                <p className="card-text text-uppercase color-text-skills">Bootstrap5 and Bulma</p>
                            </div>

                            <div className="mb-5">
                                <h1 className="card-ttile color-text-skills">Lib</h1>
                                <p className="card-text text-uppercase color-text-skills">React js</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;