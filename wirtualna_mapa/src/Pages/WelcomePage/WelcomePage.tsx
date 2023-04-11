import React, { FC } from 'react';
import styles from './WelcomePage.module.css';
import Background from '../../assets/back1.png';
import picture1 from '../../assets/welcomePage1.png';
import picture2 from '../../assets/welcomePage2.png';
import picture3 from '../../assets/welcomePage3.png';
import Button from "../../Components/Button/button";
import { PATHS } from '../../utils/consts';

const WelcomePage = () => {

    return(
  <div className={styles.WelcomePage} style={{
    backgroundImage: `url(${ Background })`, 
    height: "100%", width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"}}>
    <div style={{marginLeft:"80px", marginRight:"80px"}}>
      <h1 style={{}}>Welcome!</h1>
      <div style={{display: "grid"}}>
        <div style={{
        width: "500px",
        height: "0",
        borderStyle: "solid",
        borderWidth: "100px 1000px 100px 0",
        borderColor: "transparent #b2ffa3 transparent transparent",
        marginLeft: "auto", 
        gridColumn: "1", gridRow: "1"}}>
        </div>
        <h2 style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "10px", paddingRight: "5px"}}>Who are we?</h2>
        <p style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "70px", paddingRight: "5px"}}>We are students from the Białystok Polytechnic.</p>
        <div style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "130px", paddingRight: "5px", }}><img style={{height: "50px"}} src={picture1} alt="not found"/></div>
      </div>
      <div style={{display: "grid"}}>
        <div style={{
        width: "500px",
        height: 0,
        borderStyle: "solid",
        borderWidth: "100px 0 100px 1000px",
        borderColor: "transparent transparent transparent #b2ffa3",
        gridColumn: "1", gridRow: "1"}}>
        </div>
        <h2 style={{textAlign: "left", gridColumn: "1", gridRow: "1", paddingTop: "10px", paddingLeft: "5px"}}>What we do?</h2>
        <p style={{textAlign: "left", gridColumn: "1", gridRow: "1", paddingTop: "60px", width: "300px", paddingLeft: "5px"}}>We are working on a project that will help people find jobs related to their needs.</p>
        <img style={{alignSelf: 'left', gridColumn: "1", gridRow: "1", paddingTop: "130px", paddingLeft: "5px", height: "50px"}} src={picture2} alt="not found"/>
        </div>
      <div style={{display: "grid"}}>
        <div style={{
        width: "500px",
        height: "0",
        borderStyle: "solid",
        borderWidth: "100px 1000px 100px 0",
        borderColor: "transparent #b2ffa3 transparent transparent",
        marginLeft: "auto", 
        gridColumn: "1", gridRow: "1"
        }}>
        </div>
        <h2 style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "10px", paddingRight: "5px"}}>How we work?</h2>
        <p style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "70px", paddingRight: "5px"}}>We work in two teams: frontend and backend, each having 4-6 members.</p>
        <div style={{textAlign: "right", gridColumn: "1", gridRow: "1", paddingTop: "130px", paddingRight: "5px", }}><img style={{height: "50px"}} src={picture3} alt="not found"/></div>
      </div>
    </div>
    <Button link={PATHS.home} text="Join us!"/>
  </div>
  
);
      }
export default WelcomePage;
