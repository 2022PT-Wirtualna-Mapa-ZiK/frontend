import "./footer.css";
import * as React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
<div className="footer">
  {/* <ul>
    <li><a href="/" className="border-left">Home</a></li>
    <li><a href="/about" className="menu">About</a></li>
    <li><a href="/contact" className="border-right">Contact</a></li> */}
    <p className="footer-content-right">
      <p>Authors: Krystian Sandomierski, Przemysław Kuczyński, Marcin Kaczanowski, Kamil Karwowski, Hubert Jan Kawałko, Michał Kłubowicz, Michał Kmieć, Rafał Kurzyna, Piotr Średnicki, Milena Święcka
    </p>
      {/* <p>© {new Date().getFullYear()} Politechnika Białostocka WI</p> */}
    </p>
  {/* </ul> */}
</div>
    )
  }
}
