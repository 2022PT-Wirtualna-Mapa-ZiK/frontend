import React from 'react'
import path from 'path'
import './home.css';
import {Link, useNavigate} from "react-router-dom";
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

const navigate = useNavigate();
const login = () => {
  navigate(PATHS.login);}
  const register = () => {
    navigate(PATHS.register);}

  
  return (
    <div className='home'>
      <div className="div-home">        
       <button className="btn-acc" onClick={register}>Zarejestruj się</button>
      <button className="btn-acc" onClick={login}>Zaloguj się</button>
        
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