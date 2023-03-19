import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import {Login} from './Login';
import { SignUp } from './SignUp';
import Nav from './components/Nav';

=======
import Login from './Pages/Login/Login';
import { SignUp } from './Pages/SignUp/SignUp';
import { Footer } from './Components/Footer/footer';
>>>>>>> dev

function App() {
  return (
    <React.Fragment>
    <div className="App">
<<<<<<< HEAD
      <Nav/>
      <Login/>
=======
      <header><Nav/></header>
      <SignUp/>
      {/* <Login/> */}
>>>>>>> dev
    </div>
    <footer><Footer/></footer>
    </React.Fragment>
  );
}

export default App;
