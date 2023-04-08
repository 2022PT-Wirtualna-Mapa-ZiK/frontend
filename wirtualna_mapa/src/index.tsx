import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import SignIn from './Pages/SignIn/SignIn';
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import { SignUp } from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
    <App />
      <Routes>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
