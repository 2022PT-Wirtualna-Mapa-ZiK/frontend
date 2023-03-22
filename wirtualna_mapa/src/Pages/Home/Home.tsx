import React from 'react'
import path from 'path'
import './home.css';
import {useNavigate} from "react-router-dom";




const Home = () => {
  return (
    <div className='home'>
      <div className="div-home">
        <button className="btn-acc">Account</button>
        <button className="btn-log">Log in</button>

      </div>
    </div>
  )
}

export default Home;