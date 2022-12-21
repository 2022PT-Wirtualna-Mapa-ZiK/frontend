import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import { SignUp } from './Pages/SignUp/SignUp';
import { Footer } from './Components/Footer/footer';

function App() {
  return (
    <React.Fragment>
    <div className="App">
      <SignUp/>
      {/* <Login/> */}
    </div>
    <footer><Footer/></footer>
    </React.Fragment>
  );
}

export default App;
