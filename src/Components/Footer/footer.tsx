import './footer.css';
import * as React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p className="footer-content-right">
                    <p>
                        Authors: Krystian Sandomierski, Przemysław Kuczyński,
                        Marcin Kaczanowski, Kamil Karwowski, Hubert Jan Kawałko,
                        Michał Kłubowicz, Michał Kmieć, Rafał Kurzyna, Piotr
                        Średnicki, Milena Święcka
                    </p>
                    {/* <p>© {new Date().getFullYear()} Politechnika Białostocka WI</p> */}
                </p>
                {/* </ul> */}
            </div>
        );
    }
}
