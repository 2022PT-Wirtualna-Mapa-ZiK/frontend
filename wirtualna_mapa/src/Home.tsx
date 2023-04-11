import React from 'react'
import './index.css';
import background from "./assets/back2.jpg"
import { useNavigate } from 'react-router-dom';
import { PATHS } from './utils/consts';

  
const Home = () => {
  
    const navigate = useNavigate();
    const login = () => {
      navigate(PATHS.login);}
      const register = () => {
        navigate(PATHS.register);}
      
  
  

  return (
    <div className='home'>
      <div className="div-home">
      <button className="btn-acc" onClick={register}>Register</button>
      <button className="btn-acc" onClick={login}>Log In!</button>
      </div>


    </div>
  )
}

export default Home;