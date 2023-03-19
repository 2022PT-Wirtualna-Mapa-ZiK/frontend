import React from 'react';
import './App.css';

import { SignUp } from './Pages/SignUp/SignUp';
import { Footer } from './components/Footer/footer';
import Nav from './components/Nav/Nav';
import Home from './Pages/Home/Home';
import WelcomePage from './Pages/WelcomePage/WelcomePage';

function App() {
  return (
    <div className="App">

      {/* <WelcomePage /> */}
      <Home />
      <Footer/>

    </div>
  );
}

export default App;
