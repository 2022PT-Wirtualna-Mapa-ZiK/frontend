import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Buffer } from "buffer";
import './signin.css';
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/button";
import { PATHS } from "../../utils/consts";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ email: "", password: "", databaseError: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);

          //encode to base64
          const basicAuth =
            "Basic " +
            Buffer.from(values.email + ":" + values.password, "utf8").toString(
              "base64"
            );
          fetch("http://localhost:8000/api/v1/user/login", {
            method: "GET",
            headers: {
              authorization: basicAuth,
            },
          })
            .then((response) => {
              if (response.status === 200) {
                navigate(PATHS.home);
              } else {
                console.log("There is no such user in the database");
                values.databaseError = "Podany użytkownik nie istnieje";
              }
              setSubmitting(true);
            })
            .then((data) => {
              console.log(data);
              localStorage.setItem("loginKey", JSON.stringify(data));
            })
            .catch((err) => {
              console.log(err);
              values.databaseError = "Brak połączenia z bazą danych";
            });
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required("Required"),
        password: Yup.string()
          .required("Wymagane")
          .min(8, "Hasło musi mieć minimum 8 znaków")
          .matches(/(?=.*[0-9])/, "Hasło musi zawierać liczbę"),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <div className="wrapper">
            <form
              className="form-wrapper"
              onSubmit={handleSubmit}
              id="loginForm"
            >
              <h2>Login</h2>

              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="text"
                placeholder="Podaj swój adres email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={[errors.email && touched.email && "error"].join("")}
              />

              {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
              )}
              <label htmlFor="email">Hasło</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={[
                  errors.password && touched.password && "error",
                ].join("")}
              />
              {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
              )}
              <a href="/retrieve">Zapomniałeś hasła?</a>
              <Button text="Login" form="loginForm" />
              <div className="database-feedback">{values.databaseError}</div>
              <h3>Nie masz konta?</h3>
              <Button link={PATHS.register} text="Zarejestruj się"/>
            </form>
          </div>
        );
      }}
    </Formik>
  );
};

export default SignIn;
