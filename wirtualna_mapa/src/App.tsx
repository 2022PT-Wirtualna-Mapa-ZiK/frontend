import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import { SignUp } from './Pages/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <SignUp/>
      {/* <Login/> */}
    </div>
  );
}

export default App;
