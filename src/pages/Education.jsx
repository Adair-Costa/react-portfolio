import React from "react";
import "../styles/Education.css";

const Educations = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xx-12">
                    <h1 className="mb-5 text-center pt-5">Education</h1>

                    <div className="text-center p-5 section-education">

                        <div className="card mb-5 bg-education text-white p-3 card-professional">
                            <div className="card-body">
                                <h5 className="card-title text-warning mb-3">Professional Technical School of Cantanhede - Coimbra - Portugal</h5>
                                <p className="card-text">Computer Systems Management and Programming Technician</p>
                                <p className="text-center card-data">Sep 2015</p>
                            </div>
                        </div>

                        <div className="card mb-5 bg-education text-white p-3 card-professional">
                            <div className="card-body">
                                <h5 className="card-title text-warning mb-3">Autonomous University of Lisbon</h5>
                                <p className="card-text">Computer Science and engineering</p>
                                <p className="text-center card-data">Sep 2021</p>
                            </div>
                        </div>

                        <div className="card bg-education text-white p-3 card-professional">
                            <div className="card-body">
                                <h5 className="card-title text-warning mb-3">One Bit Code</h5>
                                <p className="card-text">Full Stack Javascript</p>
                                <p className="text-center card-data">Jan 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Educations;