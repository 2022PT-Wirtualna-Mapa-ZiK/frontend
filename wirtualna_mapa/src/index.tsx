import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import { SignUp } from "./Pages/SignUp/SignUp";
import { PATHS } from "./utils/consts";
import CategoriesEmployers from "./Pages/CategoriesEmployers/CategoriesEmployers";
import { Footer } from "./Components/Footer/footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <Routes>
        <Route path={PATHS.login} element={<SignIn />} />
        <Route path={PATHS.register} element={<SignUp />} />
        <Route path={PATHS.welcome} element={<WelcomePage />} />
        <Route path={PATHS.home} element={<Home />} />
        <Route
          path={PATHS.categoriesEmployers}
          element={<CategoriesEmployers />}
        />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
