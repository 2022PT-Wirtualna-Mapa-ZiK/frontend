import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import WelcomePage from './Pages/WelcomePage/WelcomePage';
import { SignUp } from './Pages/SignUp/SignUp';
import { PATHS } from './utils/consts';
import General from './Pages/General/General';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route
                    path={PATHS.general}
                    element={
                        localStorage.getItem('loggedIn') ? (
                            <General />
                        ) : (
                            <SignIn />
                        )
                    }
                />
                <Route path={PATHS.login} element={<SignIn />} />
                <Route path={PATHS.register} element={<SignUp />} />
                <Route path={PATHS.welcome} element={<WelcomePage />} />
                <Route path={PATHS.home} element={<Home />} />
            </Routes>
        </Router>
    </React.StrictMode>
);
