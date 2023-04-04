import React from 'react'
import './index.css';
import background from "./assets/back2.jpg"
import Button from "./Components/Button/button"

const Home = () => {
  return (
    <div className='home'>
      <div className="div-home">
        <Button link="/logged-in" text="Account"/>
        <Button link="/logged-in" text="Login"/>
      </div>


    </div>
  )
}

export default Home;