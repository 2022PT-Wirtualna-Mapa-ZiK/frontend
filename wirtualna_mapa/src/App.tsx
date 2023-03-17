import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { SignUp } from './SignUp';
import Nav from './components/Nav';
import Home from './Home';
import WelcomePage from './components/WelcomePage/WelcomePage';


function App() {
  return (
    <div className="App">
      <Nav />
      <WelcomePage />
    </div>
  );
}

export default App;
