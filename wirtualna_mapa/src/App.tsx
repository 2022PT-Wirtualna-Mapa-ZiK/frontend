import React from 'react';
import './App.css';

import { SignUp } from './Pages/SignUp/SignUp';
import { Footer } from './Components/Footer/footer';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import WelcomePage from './Pages/WelcomePage/WelcomePage';

function App() {
  return (
    <div className="App">

      {/* <WelcomePage /> */}
      <SignUp/>

    </div>
  );
}

export default App;
