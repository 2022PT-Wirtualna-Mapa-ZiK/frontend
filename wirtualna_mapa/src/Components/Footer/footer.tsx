import './footer.css';
import * as React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p className="footer-text-left">
                    <a href="/gg" className="menu">
                        Home
                    </a>
                    <a href="/hh" className="menu">
                        About
                    </a>
                    <a href="/hh" className="menu">
                        Contact
                    </a>
                </p>
                <p className="footer-content-right">
                    <p>
                        Politechnika Białostocka WI {new Date().getFullYear()}
                    </p>
                </p>
            </div>
        );
    }
}
