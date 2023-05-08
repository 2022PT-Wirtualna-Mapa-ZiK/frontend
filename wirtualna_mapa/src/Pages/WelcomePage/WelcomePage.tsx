import React, { FC } from 'react';
import Background from '../../assets/back1.png';
import picture1 from '../../assets/welcomePage1.png';
import picture2 from '../../assets/welcomePage2.png';
import picture3 from '../../assets/welcomePage3.png';
import Button from "../../Components/Button/button";
import { PATHS } from '../../utils/consts';
import './WelcomePage.css';


const WelcomePage = () => {

    return(
  <div className="wrapper" >
        <div className="back-welcome">
          <div className="circle-pink"></div>
          <div className="circle-small"></div>
          <div className="triangle">
            <div className="inside"></div>
          </div>
          <div className="circle-blue"></div>
          <div className="center-welcome">
            <div >
              <h1 className="welcome">Witaj!</h1>
                <div className="triangle1">
                  <h2>Kim jesteśmy?</h2>
                <p>Jesteśmy studentami Wydziału Informatyki Politechniki Białostockiej.</p>
                </div>
                
              <div className='triangle2' >
                
                <h2>Co robimy?</h2>
                <p>Pracujemy nad projektem który pomoże znaleźć pracę dla ludzi zgodną z ich potrzebami</p>
              </div>
              <div className='triangle3'>
                
                <h2>W jaki sposób pracujemy?</h2>
                <p>Pracujemy w dwóch zespołach - backendowym oraz frontendowym, w każdym z nich jest około 4-6 osób</p>
                <div></div>
              </div>
            </div>
            {/* <Button link={PATHS.home} text="Dołącz do nas!" /> */}
          </div>
          
    
        </div>
  </div>
  
);
      }
export default WelcomePage;
