import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from './Login';
import { SignUp } from './SignUp';
import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Login/>
    </div>
  );
}

export default App;
