import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { SignUp } from './SignUp';
import Nav from './components/Nav';
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
