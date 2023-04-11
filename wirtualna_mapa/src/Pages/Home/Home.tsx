import React from 'react'
import './home.css';
import {useNavigate} from "react-router-dom";
import Button from "../../Components/Button/button";
import { PATHS } from '../../utils/consts';



const Home = () => {

  const professions = [
    {description: 'Informatyk', key: 0},
    {description: 'Biotechnolog', key: 1},
    {description: 'Logistyk', key: 2},
    {description: 'Elektryk', key: 3},
    {description: 'Lekarz', key: 4},
    {description: 'Trener', key: 5},
    {description: 'Finance manager', key: 6},
    {description: 'Data scientist', key: 7},
    {description: 'Graphic designer', key: 8},
    {description: 'Researcher', key: 9},
  ];
  
  return (
    <div className='home'>
      <div className="div-home">        
        <Button link={PATHS.register} text="Zarejestruj się"/>
        <Button link={PATHS.login} text="Zaloguj się"/>

      </div>
      <div className="div-welcome">        
        <p>Witaj!</p>
      </div>
      <div className="div-title">        
        <h1>Aktualnie najczęściej wyszukiwane zawody:</h1>
      </div>
      <div className="div-list">        
        <ol>      
          {/* display each value(profession) from list */}
          {professions.map(profess => {
          return (
            <li key={profess.key}>{profess.description}</li>
          );
            })}
        </ol>
      </div>



    </div>
  )
}

export default Home;