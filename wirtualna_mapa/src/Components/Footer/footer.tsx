import "./footer.css";
import * as React from "react";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Footer extends React.Component {
  render() {
    return (
<div className="footer">
  <p className="footer-text-left">
    <a href="#" className="menu">Home</a>
    <a href="#" className="menu">About</a> 
    <a href="#" className="menu">Contact</a>
  </p>
  <p className="footer-content-right">
  <a>Politechnika Białostocka WI {new Date().getFullYear()}</a>
  </p>
</div>
    )
  }
}
