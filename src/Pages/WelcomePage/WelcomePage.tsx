import React from 'react';
import './WelcomePage.css';

const WelcomePage = () => {
    return (
        <div className="wrapper">
            <div className="back-welcome">
                <div className="circle-pink"></div>
                <div className="circle-small"></div>
                <div className="triangle">
                    <div className="inside"></div>
                </div>
                <div className="circle-blue"></div>
                <div className="center-welcome">
                    <div className="triangle-holder">
                        <h1 className="welcome">Witaj!</h1>
                        <div>
                            <div className="triangle1">
                                <div>
                                    <h2>Kim jesteśmy?</h2>
                                    <br />
                                    <p>
                                        Jesteśmy studentami Wydziału Informatyki
                                        Politechniki Białostockiej.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="triangle2">
                                <div>
                                    <h2>Co robimy?</h2>
                                    <br />
                                    <p>
                                        Pracujemy nad projektem który pomoże
                                        znaleźć pracę dla ludzi zgodną z ich
                                        potrzebami
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="triangle3">
                                <div>
                                    <h2>W jaki sposób pracujemy?</h2>
                                    <br />
                                    <p>
                                        Pracujemy w dwóch zespołach -
                                        backendowym oraz frontendowym, w każdym
                                        z nich jest około 4-6 osób
                                    </p>
                                </div>
                            </div>

                            <div></div>
                        </div>
                    </div>
                    {/* <Button link={PATHS.home} text="Dołącz do nas!" /> */}
                </div>
            </div>
        </div>
    );
};
export default WelcomePage;
