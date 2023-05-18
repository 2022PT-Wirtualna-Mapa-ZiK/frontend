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
import CategoriesEmployers from './Pages/CategoriesEmployers/CategoriesEmployers';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Router>
            <App />
            <Routes>
                <Route
                    path={PATHS.categoriesEmployers}
                    element={
                        localStorage.getItem('loggedIn') ? (
                            <CategoriesEmployers />
                        ) : (
                            <SignIn />
                        )
                    }
                />
                <Route path={PATHS.login} element={<SignIn />} />
                <Route path={PATHS.register} element={<SignUp />} />
                <Route path={PATHS.welcome} element={<WelcomePage />} />
                <Route path={PATHS.home} element={<Home />} />
                {/* <Route
                    path={PATHS.categoriesEmployers}
                    element={<CategoriesEmployers />}
                /> */}
            </Routes>
        </Router>
    </React.StrictMode>
);
